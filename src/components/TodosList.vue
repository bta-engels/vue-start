<template>
  <div></div>
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
  methods:{
    getTodos() {
      axios.get("/api/todos")
            .then(resp => {
              this.todos = resp.data
          })
          .catch(err => {
            console.error(err)
          })
    }
  }
}
</script>

<style scoped>

</style>