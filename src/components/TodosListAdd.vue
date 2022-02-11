<template>
	<div>
		<input v-model="txt" type="text"/>
        <b-button  @click="store" class="btn-sm btn-primary">
            <font-awesome-icon icon="plus"/>
        </b-button>
    </div>
</template>

<script>
export default {
	name: "TodosListAdd",
	data() {
		return {
			txt:null,
		}
	},
    methods: {
        store() {
            let newTodo = {
                done: false,
                text: this.txt,
            }
            this.$store.dispatch("todos/store", newTodo)
        }
    }
}
</script>

<style scoped>
</style>
