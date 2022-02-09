<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            | <router-link to="/todos">Todos</router-link>
            | <router-link to="/login">Login</router-link>
        </div>
        <div class="container align-content-center">
            <router-view/>
        </div>
    </div>
</template>

<script>

export default {
    name: "App",
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


</style>
