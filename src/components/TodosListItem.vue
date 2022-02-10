
<template>
    <ul v-if="data">
        <li v-for="item in data" :key="item.id">
                <input type="checkbox"
                       v-model="item.done"
					   @change="update(item)"
                />
                <input type="text"
                       :class="{'done': item.done}"
                       @click="$emit('on-todo-click', item)"
                       @change="update(item)"
                       v-model="item.text"
                />

                <b-button  @click="$emit('on-click-delete', item)" class="btn-sm btn-danger float-right del">
                    <font-awesome-icon icon="trash-alt"/>
                </b-button>
        </li>
    </ul>
    <h3 v-else>Bitte warten</h3>
</template>

<script>
/* eslint-disable */
export default {
    name: "TodosListItem",
    computed: {
        data() {
            return this.$store.state.todos.liste
        }
    },
	methods: {
		update(todo) {
			this.$store.dispatch('todos/update', todo);
		}
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
