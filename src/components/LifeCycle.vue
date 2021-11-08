<template>
    <div id="app">
        {{ message }}
    </div>
    
</template>
<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            message: 'Hello vue.js!'
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log("mounted");
        this.message = "Hello Vue";
    },
    updated() {
        console.log("updated");
    }
}
</script>
<style>

</style>