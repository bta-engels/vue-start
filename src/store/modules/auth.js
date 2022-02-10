/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const auth = {
	namespaced: true,
	state: {
		check: false,
		user: {
			name: null,
			email: null,
			token: null,
		},
		error: null,
	},
	getters: {
		/*  klassisches JS
				check: function (state) {
					return !!state.user.token
				}
		*/
		// ES6
		user: state => state.user,
		check: state => !!state.user.token,
		token: state => state.user.token,
		error: state => state.error,
	},
	mutations: {
		mLogin: function (state, loginResponse) {
			state.user = loginResponse
			state.error = null
			state.check = true
			localStorage.setItem('userName', state.user.name)
			localStorage.setItem('userToken', state.user.token)
			axios.defaults.headers.common['Authorization'] = "Bearer " + state.user.token;
			return state.user
		},
		mLogout: function (state) {
			state.user.name = null;
			state.user.email = null;
			state.user.token = null;
			localStorage.clear();
			delete(axios.defaults.headers.common['Authorization']);
			state.check = false;
			return state.user;
		},
		mError: function (state, error) {
			state.error = error
			console.info(state.error)
			return state.error
		}
	},
	actions: {
		login(context, user) {
			axios.post("/api/login", user)
				.then(resp => {
//					context.commit('mError', null)
					context.commit('mLogin', resp.data)
				})
				.catch(err => {
					context.commit('mError', err.response.data.errors.email[0])
				})
			;
		},
		logout({commit}) {
			commit('mLogout')
		}
	},
}
export default auth;
