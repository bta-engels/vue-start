<template>
    <div :class="css">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "Default",
    props: {
        msg: {
            type: String,
            default: 'Das ist die falsche Route'
        },
        css: String,
    }
}
</script>
