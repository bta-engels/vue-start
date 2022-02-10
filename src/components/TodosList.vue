<template>
    <div>
		<div class="row alert-danger error" v-if="errors">
			<div v-for="(field,k) in errors" :key="k"  class="col ">
				<p v-for="error in field" :key="error" class="text-sm-center ">
					{{error}}
				</p>
			</div>
		</div>
        <div class="row">
            <div class="col">
                <TodosListAdd @on-click-add="store" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TodosListItem
					:data="todos"
					@on-todo-click="info"
					@on-click-delete="deleteTodo"
					@on-todo-change="update"
				/>
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
/* eslint-disable */
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
            axios.put("/api/todos/" + obj.id, obj)
                .then(resp => {
                    let updatedTodo = resp.data.data;
                    this.todos = this.todos.filter( item => item === updatedTodo ? updatedTodo : item)
                })
                .catch(err => {
                    console.error(err)
                    this.errors = err
                });
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
                    //console.info(err.response.status)
				    //console.log(err.response.data.errors)
				    //alert(err.response.data.errors.text)
				    this.errors = err.response.data.errors

				   //this.errrors = this.errrors.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
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
                        this.errors = err
                    });
            }
        }
    }
}
</script>

<style scoped>
.error{
	width: 70%;
	margin: 0 auto;
	border-radius: 12px;

}

</style>
