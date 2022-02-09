import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Default from "../components/Default";
import TodosPage from "../views/TodosPage";
import LoginPage from "../views/LoginPage";
import store from "@/store";

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
		path: '/*',
		name: 'Default',
		component: Default
	}
]

const router = new VueRouter({
	routes
})

export default router
