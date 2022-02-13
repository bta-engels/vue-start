/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const localeHeaderName = process.env.VUE_APP_LOCALE_HEADER_NAME,
	locale = {
		namespaced: true,
		state: {
			lang: 'de',
		},
		getters: {
			lang: state => state.lang,
		},
		mutations: {
			mSetLang: function (state, lang) {
				state.lang = lang;
				axios.defaults.headers.common[localeHeaderName] = lang;
			},
			mRemoveLang: function (state) {
				state.lang = null;
				delete axios.defaults.headers.common[localeHeaderName];
			},
		},
		actions: {
			setLang({commit}, language) {
				commit('mSetLang', language)
			}
		},
	};

export default locale;
