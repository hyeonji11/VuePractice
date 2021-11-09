<template>
    <div>
        <button @click="getData">프레임워크 목록</button>
    </div>
</template>

<script>
import axios from '/VueTest/vue1/node_modules/axios'

export default {
    name: "AxiosTest",
    methods: {
        getData() {
            axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/mas-ter/data/demo.json')
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                })
        }
    }
}
</script>

<style>

</style>