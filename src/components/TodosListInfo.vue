<template>
    <table>
      <tr>
        <th>Id</th>
        <td>{{ todo.id }}</td>
      </tr>
      <tr>
        <th>Done</th>
        <td>{{ todo.done }}</td>
      </tr>
      <tr>
        <th>Text</th>
        <td>{{ todo.text }}</td>
      </tr>

    </table>
</template>

<script>
export default {
    name: "TodosListInfo",
    props: ['data']
}
</script>

<style scoped>
</style>
