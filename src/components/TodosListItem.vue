<template>
    <ul v-if="data.length > 0">
        <li v-for="item in data" :key="item.id">
            {{ item.text }}
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
}
ul li {
    text-align: left;
}
</style>
