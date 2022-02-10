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
        <div v-if="error" class="alert-danger p-2 m-1 text-center">{{ error }}</div>
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
            return this.$store.state.auth.error;
        },
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
