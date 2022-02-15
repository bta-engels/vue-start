/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import store from "@/store";

Vue.use(Vuex)

const handleErrors = err => {
		if(!err) {
			return null
		}
		if(undefined !== err.response && 422 === err.response.status) {
			// failed form validation
			return (undefined !== err.response.data.errors.text)
				? err.response.data.errors.text[0]
				: 'Fehlerhafte Eingabe';
		}
		return null
	},
	__ = data => {
		let lang = store.state.locale.lang,
		fallback = process.env.VUE_APP_LOCALE;

		if(undefined !== data.text[lang]) {
			data.text = data.text[lang]
		} else if(undefined !== data.text[fallback]) {
			data.text = data.text[fallback]
		}
		return data;
	};

const todos = {
	namespaced: true,
	state: {
		liste: [],
		translatedListe: [],
		countDone: 0,
		countOpen: 0,
		todo: null,
		translatedTodo: null,
		error: null,
	},
	getters: {
		liste: state => state.liste,
		translatedListe: state => state.translatedListe,
		todo: state => state.todo,
		translatedTodo: state => __(state.todo),
		error: state => state.error,
		countOpen: state => state.liste.filter(item => !item.done).length,
		countDone: state => state.liste.filter(item => item.done).length,
	},
	mutations: {
		mTodo: function (state, todo) {
			let liste = JSON.parse(JSON.stringify(state.liste));
			state.todo = liste.find(item => item.id === todo.id)
			state.translatedTodo = __(state.todo)
		},
		mTranslateTodo: function (state) {
			if(state.todo) {
				let todo = JSON.parse(JSON.stringify(state.todo));
				state.translatedTodo = __(todo)
			}
		},
		mTranslateListe: function (state) {
			let liste = JSON.parse(JSON.stringify(state.liste));
//			console.info("mTranslateListe Liste", state.liste)
			if(liste.length > 0) {
				state.translatedListe = liste.map(__)
//				console.info("mTranslateListe", state.translatedListe)
			}
		},
 		mListe: function (state, todos) {
			state.error = null
		    state.liste = todos
		    this.mTranslateListe(state)
		},
		mError: function (state, err) {
			state.error = err
		},
		mUpdate: function (state, todo) {
			state.error = null
			state.liste = state.liste.map(item => item.id === todo.id ? todo : item)
//			console.info("todo", todo)
//			console.info("mUpdate", state.liste.find(item => item.id === todo.id))
		},
		mStore: function (state, todo) {
			state.error = null
			state.liste.unshift(todo)
		},
		mDelete: function (state, todo) {
			state.error = null
			state.liste = state.liste.filter( item => todo.id !== item.id)
		},
	},
	actions: {
		index(context) {
			axios.get("/api/todos")
				.then(resp => {
					context.commit('mListe', resp.data)
					context.commit('mTranslateListe')
				})
				.catch(err => {
					context.commit("mError", handleErrors(err))
				});
		},
		update(context, obj) {
			axios.put("/api/todos/" + obj.id, obj)
				.then(resp => {
					context.commit("mUpdate", resp.data.data)
					context.commit('mTranslateListe')
				})
				.catch(err => {
					context.commit("mError", handleErrors(err))
				});
		},
		store(context, newTodo) {
			axios.post("/api/todos", newTodo)
				.then(resp => {
					context.commit("mStore", resp.data.data)
					context.commit('mTranslateListe')
				})
				.catch(err => {
					context.commit("mError", handleErrors(err))
				});
		},
		delete(context, obj){
			if(confirm("Todo wirklich löschen?")) {
				axios.delete("/api/todos/" + obj.id)
					.then(resp => {
						context.commit("mDelete", resp.data.data)
						context.commit('mTranslateListe')
					})
					.catch(err => {
						context.commit("mError", handleErrors(err))
					});
			}
		}
	},

};
export default todos;
