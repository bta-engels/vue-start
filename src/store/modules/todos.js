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
		}
	},
};
export default todos;
