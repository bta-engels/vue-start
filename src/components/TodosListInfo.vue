<template>
    <div>
        <table v-if="data" class="table table-striped">
            <tr>
                <th>ID</th>
                <td>{{ data.id }}</td>
            </tr>
            <tr>
                <th>Erledigt</th>
                <td>{{ data.done ? 'JA' : 'Nein' }}</td>
            </tr>
            <tr>
                <th>Text</th>
                <td>{{ data.text }}</td>
            </tr>
            <tr>
                <th>erstellt</th>
                <td>{{ data.created_at }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "TodosListInfo",
    props: ['data'],
}
</script>

<style scoped>
th,td {
    text-align: left;
}
</style>
