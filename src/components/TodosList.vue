<template>
    <div>
        <div class="row">
            <div class="col">
                <h3>Add Todo</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>Todo Liste</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>Todo Detail</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodosList",
    data() {
        return {
            todos: [],
        }
    },
    created() {
        this.getTodos()
    },
    methods: {
        getTodos() {
            axios.get("/api/todos")
                .then(resp => {
                    this.todos = resp.data
                })
                .catch(err => {
                    console.error(err)
                });
        }
    }
}
</script>

<style scoped>

</style>
