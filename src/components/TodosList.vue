<template>
    <div>
        <div v-if="error" class="row">
            <div class="col">
                <Error :msg="error" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListAdd />
            </div>
        </div>
        <DoneState />
        <div class="row">
            <div class="col">
                <ul v-if="todos">
                    <TodosListItem v-for="item in todos" :key="item.id" :todo="item" />
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListInfo />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import TodosListAdd from "@/components/TodosListAdd";
import TodosListItem from "@/components/TodosListItem";
import TodosListInfo from "@/components/TodosListInfo";
import DoneState from "@/components/DoneState";
import { mapGetters } from "vuex";
import Error from "@/components/Error";

export default {
    name: "TodosList",
    components: {Error, DoneState, TodosListInfo, TodosListItem, TodosListAdd},
    beforeMount() {
        if(!this.$store.state.locale.lang) {
            this.$store.dispatch('locale/setLang', process.env.VUE_APP_LOCALE);
            this.$store.commit("todos/mTranslateListe")
        }
        if (this.$store.state.todos.liste.length === 0) {
            this.$store.dispatch("todos/index");
        } else {
            this.$store.commit("todos/mTranslateListe")
        }
    },
    computed: mapGetters({
        error: "todos/error",
        todos: "todos/translatedListe",
    }),
}
</script>

<style scoped>
</style>
