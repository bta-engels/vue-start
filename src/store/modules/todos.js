/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
	namespaced: true,
	state: {
		liste: [],
		countDone: 0,
		countOpen: 0,
		todo: null,
		error: null,
	},
	getters: {
		liste: state => state.liste,
		todo: state => state.todo,
		error: state => state.error,
	},
	mutations: {
		mTodos: function (state, todos) {
			state.error = null
			state.liste = todos
		},
		mError: function (state, err) {
			state.error = err
		},
		mUpdate: function (state, todo) {
			state.error = null
			state.liste = state.liste.filter( item => item === todo ? todo : item)
		}
	},
	actions: {
		getTodos(context) {
			axios.get("/api/todos")
				.then(resp => {
					context.commit('mTodos', resp.data)
				})
				.catch(err => {
					context.commit('mError', err.response.data.message)
				});
		},
		update(context,obj){
			axios.put("/api/todos/" + obj.id, obj)
				.then(resp => {
					let updatedTodo = resp.data.data;
					context.commit("mUpdate",updatedTodo)
				})
				.catch(err => {
					if(err.response.status == 422) {
						let msg = (undefined !== err.response.data.errors.text)
							? err.response.data.errors.text[0]
							: 'Fehlerhafte Eingabe';
						context.commit("mError",msg)
					}
				});
		},
	},

};
export default todos;
