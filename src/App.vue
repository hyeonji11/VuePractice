<template>
  <div>
    <!-- <router-link to="/hello"> hello </router-link>
    <router-link to="/emit"> emit test </router-link>
    <router-view></router-view>
    <PropsTest :obj="obj"></PropsTest>
    <div v-bind:style="{ fontSize: postFontSize + 'em'}">
      <EmitTest :title="emitTitle" @enlarge-text="onEnlargeText"></EmitTest>
    </div> -->
    <AxiosTest></AxiosTest>
    <DirectiveTest></DirectiveTest>
  </div>
</template>

<script>
// import PropsTest from './components/PropsTest.vue'
// import EmitTest from './components/EmitTest.vue'
import AxiosTest from './components/AxiosTest.vue'
import DirectiveTest from './components/DirectiveTest.vue'

export default {
  name: 'App',
  components: {
    AxiosTest,
    DirectiveTest
  },
  data() {
    return {
      obj: {
        title: "props title",
        content: "연습"
      },
      postFontSize : 1,
      emitTitle: "emit title"
    }
  },
  methods: {
    onEnlargeText() {
      this.postFontSize += 0.1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
