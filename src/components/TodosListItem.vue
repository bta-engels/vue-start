<template>
    <ul v-if="data && data.length > 0">
        <li v-for="item in data" :key="item.id">
            <b-form>
                <span @click="$emit('on-todo-click', item)">{{ item.text }}</span>
                <b-button class="btn-sm btn-danger float-right del">
                    <font-awesome-icon icon="trash-alt"/>
                </b-button>
            </b-form>

        </li>
    </ul>
    <h3 v-else>Bitte warten</h3>
</template>

<script>
export default {
    name: "TodosListItem",
    props: ['data']
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
}
ul li span {
    margin-left: 5px;
}
</style>
