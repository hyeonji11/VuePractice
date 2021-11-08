<template>
    <div>
        <p>{{ title }}</p>
        <button @click="$emit('enlarge-text')">
            Enlarge text
        </button>
    </div>
</template>

<script>
export default {
    name: "EmitTest",
    props: {
        title: String
    }
}
</script>

<style>

</style>