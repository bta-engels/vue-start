<template>
    <div v-if="todo && todo.id">
        <table class="table table-striped">
            <tr>
                <th>ID</th>
                <td>{{ todo.id }}</td>
            </tr>
            <tr>
                <th>Erledigt</th>
                <td>{{ todo.done ? 'JA' : 'Nein' }}</td>
            </tr>
            <tr>
                <th>Text</th>
                <td>{{ todo.text }}</td>
            </tr>
            <tr>
                <th>erstellt</th>
                <td>{{ createdAt }} Uhr</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: "TodosListInfo",
    computed: {
        todo() {
            return this.$store.state.todos.translatedTodo
        },
        createdAt() {
            let date = new Date(this.todo.created_at),
                day = date.toLocaleDateString(),
                hours = date.getHours(),
                minutes = date.getMinutes();

            minutes = minutes < 10 ? "0" + minutes : minutes;
            hours = hours < 10 ? "0" + hours : hours;

            return day + " " + hours + ":" + minutes;
        }
    }
}
</script>

<style scoped>
th, td {
    text-align: left;
}
</style>
