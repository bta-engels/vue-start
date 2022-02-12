import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Default from "../components/Default";
import TodosPage from "../views/TodosPage";
import LoginPage from "../views/LoginPage";
import store from "@/store";
import WeatherPage from "@/views/WeatherPage";
import SwitchLang from "@/components/SwitchLang";
import Gallery from "@/components/Gallery";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/todos',
		name: 'Todos',
		component: TodosPage
	},
	{
		path: '/wetter',
		name: 'Wetter',
		component: WeatherPage
	},
	{
		path: '/gallery',
		name: 'Gallery',
		component: Gallery
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage
	},
	{
		path: '/logout',
		name: 'Logout',
		component: function () {
			store.dispatch("auth/logout")
		}
	},
	{
		path: '/lang/:langCode',
		name: 'Lang',
		component: SwitchLang
	},
	{
		path: '/*',
		name: 'Default',
		component: Default
	}
]

const router = new VueRouter({
	routes
})

export default router
