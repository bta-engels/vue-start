import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

store.dispatch("locale/setLang", process.env.VUE_APP_LOCALE)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
