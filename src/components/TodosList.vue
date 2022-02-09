<template>
    <div>
        <div class="row">
            <div class="col">
                <TodosListAdd @on-click-add="store" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListItem :data="todos" @on-todo-click="info" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListInfo v-if="todo"  :data="todo" />
            </div>
        </div>
    </div>
</template>

<script>
/* global axios */
import TodosListAdd from "@/components/TodosListAdd";
import TodosListItem from "@/components/TodosListItem";
import TodosListInfo from "@/components/TodosListInfo";
export default {
    name: "TodosList",
    components: {TodosListInfo, TodosListItem, TodosListAdd},
    data() {
        return {
            todos: [],
            errors:null,
            todo: null,
        }
    },
    created() {
        this.getTodos()
    },
    methods: {
        getTodos() {
            axios.get("/api/todos")
                .then(resp => {
                    this.todos = resp.data
                })
                .catch(err => {
                    console.error(err)
                });
        },
        info(obj) {
            this.todo = obj
        },
        update(obj){

        },
        store(txt){
           let newTodo = {
             'text':txt,
             'done':0,
           };
           axios.post("/api/todos", newTodo)
               .then(resp => {
                    this.todos.unshift(resp.data.data)
               })
               .catch(err => {
                    console.error(err)
                    this.errors = err
               });
        },
        delete(obj){

        }
    }
}
</script>

<style scoped>

</style>
