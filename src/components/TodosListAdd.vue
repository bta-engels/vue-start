<template>
	<div>
		<input v-model="txt" type="text"/>
		<input type="button" value="Add" @click="$emit('on-click-add',txt )">
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
}
</script>

<style scoped>
</style>
