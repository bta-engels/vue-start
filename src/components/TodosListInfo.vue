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
                <td>{{ createdAt }} Uhr</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "TodosListInfo",
    props: ['data'],
    computed: {
        createdAt() {
            let date = new Date(this.data.created_at),
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
th,td {
    text-align: left;
}
</style>
