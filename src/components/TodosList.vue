<template>
    <div>
        <div class="row">
            <div class="col">
                <TodosListAdd @on-click-add="store" />
            </div>
        </div>
        <DoneState />
        <div class="row">
            <div class="col">
                <TodosListItem
					@on-todo-click="info"
					@on-click-delete="deleteTodo"
				/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListInfo v-if="todo" :data="todo" />
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
export default {
    name: "TodosList",
    components: {DoneState, TodosListInfo, TodosListItem, TodosListAdd},
    data() {
        return {
            todo: null,
        }
    },
    beforeCreate() {
        this.$store.dispatch("todos/getTodos")
    },
    methods: {
        info(obj) {
            this.todo = obj
        },
        store(txt) {
           let newTodo = {
             'text':txt,
             'done':0,
           };
           axios.post("/api/todos", newTodo)
               .then(resp => {
                    this.todos.unshift(resp.data.data)
               })
               .catch(err => {
                   if(err.response.status == 422) {
                       let msg = (undefined !== err.response.data.errors.text)
                           ? err.response.data.errors.text[0]
                           : 'Fehlerhafte Eingabe';
                       alert(msg);
                   }
               });
        },
        deleteTodo(obj){
            if(confirm("Todo wirklich löschen?")) {
                axios.delete("/api/todos/" + obj.id)
                    .then(resp => {
                        this.todos = this.todos.filter( item => item !== obj )

						/* classic syntax
						this.todos = this.todos.filter(function(item){
							if (item !== obj){
								return item
							}
						})
						*/
                    })
                    .catch(err => {
                        console.error(err)
                    });
            }
        }
    }
}
</script>

<style scoped>

</style>
