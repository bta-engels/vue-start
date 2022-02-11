<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            | <router-link to="/todos">Todos</router-link>
            | <router-link to="/wetter">Wetter</router-link>
            | <router-link v-if="check" to="/logout">Logout {{ user.name }}</router-link>
            <router-link v-else to="/login">Login</router-link>
            | <router-link to="/lang/de" :class="{'currentLang': lang==='de'}">DE</router-link>
            | <router-link to="/lang/en" :class="{'currentLang': lang==='en'}">EN</router-link>
            | <router-link to="/lang/fr" :class="{'currentLang': lang==='fr'}">FR</router-link>
        </div>
        <div class="container align-content-center">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "App",
    beforeMount() {
        this.$store.dispatch("todos/index")
    },
    computed: {
        // spread-opperator "...": packt ein iterierbares objekt in seine bestandteile aus
        ...mapGetters({
            "check": "auth/check",
            "user": "auth/user",
            "lang": "locale/lang"
        })
/*
        check() {
            return this.$store.state.auth.check;
        },
        user() {
            return this.$store.state.auth.user;
        }
*/
    },
}
</script>

<style>
#app {
    color: #2c3e50;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
#nav {
    padding: 30px;
}
#nav a {
    color: #2c3e50;
    font-weight: bold;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
#nav a.currentLang {
    color: #c00;
}
</style>
