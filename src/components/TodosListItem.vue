<template>
  <ul v-if="data.length > 0">
    <li v-for="(todo,index) in data" :key="data.id" >
      <input type="checkbox" :checked="todo.done">
      Index:{{index}}. Id:{{todo.id}} text:{{todo.text}} Done:{{todo.done}}
    </li>
  </ul>
  <h3 v-else>Kein Daten Vorhanden</h3>
</template>

<script>
export default {
  name: "TodosListItem",
  props:["data"]
}
</script>

<style scoped>

</style>