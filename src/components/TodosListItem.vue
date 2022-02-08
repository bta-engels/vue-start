<template>
  <ul v-if="data && data.length > 0">
    <li v-for="item in data" key="item.id">
       <span @click="$emit('on-todo-click', item)">{{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodosListItem",
  components: {},

  props: ['data']
}
</script>






<style scoped>

</style>