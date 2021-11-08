<template>
    <div>
        <h1>{{ obj.title }}</h1>
        <h2>{{ obj.content }}</h2>
    </div>
</template>

<script>
export default {
    name: "PropsTest",
    props: {
        obj: Object
    }
}
</script>

<style>

</style>