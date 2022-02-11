<template>
    <div class="alert-danger m-1 p-2 text-center">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: "Error",
    props: ['msg'],
}
</script>

<style scoped>
</style>
