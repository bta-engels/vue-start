<template>
    <div class="row">
        <div class="col">Open: {{ open }}</div>
        <div class="col">Done: {{ done }}</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "DoneState",
    computed: mapGetters({
        "open": "todos/countOpen",
        "done": "todos/countDone",
    })
}
</script>

<style scoped>
</style>
