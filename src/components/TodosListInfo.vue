<template>
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Done/Not done</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{todo.id}}</td>
            <td>{{todo.text}}</td>
            <td>{{todo.done}}</td>
            <td>{{todo.created_at}}</td>
          </tr>
        </tbody>
    </table>

</template>

<script>
export default {

    name: "TodosListInfo",
    props: ['todo'],

}

</script>

<style scoped>
td,th {
  border: 1px solid #000;
}
</style>
