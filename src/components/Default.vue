<template>
    <div>
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
export default {
    name: "Default",
    props: {
        msg: {
            type: String,
            default: 'Das ist die falsche Route'
        }
    }
}
</script>
