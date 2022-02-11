import Vue from 'vue'
import Vuex from 'vuex'
import todos from "./modules/todos";
import auth from "./modules/auth";
import locale from "./modules/locale";

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {auth, todos, locale}
})

