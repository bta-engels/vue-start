<template>
    <div class="container align-content-center">
        <b-form class="align-self-center m-5" @submit.prevent="login">
            <b-form-group>
                <label for="email">Email: </label>
                <b-input id="email" required type="email" v-model="user.email"/>
            </b-form-group>
            <b-form-group>
                <label for="password">Passwort: </label>
                <b-input id="password" required type="password" v-model="user.password" />
            </b-form-group>
            <input type="submit" role="button" class="btn btn-primary" value="Login"/>
        </b-form>
		<div class="alert-danger p-1 m-1 w-100 text-sm-center" v-if="error">
			Error: {{error}}
		</div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: null,
                password: null,
            },
        }
    },
	computed: {
		error() {
			//console.info(this.$store.state.auth.error)
			return this.$store.state.auth.error
		}
	},
    methods: {
        login() {
            this.$store.dispatch('auth/login', this.user);
        }
    }
}
</script>


<style scoped>
</style>
