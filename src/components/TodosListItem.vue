
<template>
    <li>
        <input type="checkbox"
               v-model="todo.done"
               @change="update"
        />
        <input type="text"
               :class="{'done': todo.done}"
               @click="info(todo)"
               @change="update"
               v-model="todo.text"
        />

        <b-button  @click="remove" class="btn-sm btn-danger float-right del">
            <font-awesome-icon icon="trash-alt"/>
        </b-button>
    </li>
</template>

<script>
/* eslint-disable */
export default {
    name: "TodosListItem",
    props: ['todo'],
    methods: {
        info(obj) {
            this.$store.commit('todos/mTodo', obj)
        },
		update() {
			this.$store.dispatch('todos/update', this.todo);
		},
        remove() {
            this.$store.dispatch('todos/delete', this.todo);
        },
	}
}
</script>

<style scoped>
ul {
    width: 50%;
    margin: auto;
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
}
ul li {
    text-align: left;
    cursor: pointer;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.done {
    text-decoration: line-through;
}
[type=text]{
	width: 80%;
	margin-left:10px;
	border: none;
}
[type=text]:focus{
	outline: none;
}
</style>
