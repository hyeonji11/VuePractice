<template>
  <div>
    <PropsTest :obj="obj"></PropsTest>
    <div v-bind:style="{ fontSize: postFontSize + 'em'}">
      <EmitTest :title="emitTitle" @enlarge-text="onEnlargeText"></EmitTest>
    </div>
  </div>
</template>

<script>
import PropsTest from './components/PropsTest.vue'
import EmitTest from './components/EmitTest.vue'

export default {
  name: 'App',
  components: {
    PropsTest,
    EmitTest
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
