<template>
    <div>
        <div id="bind">
            <p v-bind:id="idA">아이디 바인딩</p>
            <p :class="classA">클래스 바인딩(v-bind 축약형)</p>
            <p v-bind:style="styleA">스타일 바인딩</p>
        </div>
        <div>
            <p v-if="flagIf">v-if true</p>
            <button @click="flagIf = !flagIf">v-if true/false</button>
            <p v-show="flagShow">v-show true</p>
            <button @click="flagShow = !flagShow">v-show true/false</button>
        </div>
        <div id="for">
            <ul>
                <li v-for="item in items" v-bind:key="item.id">
                    {{ item.id }} : {{ item.message }}
                </li>
            </ul>
        </div>
        <div>
            <input v-model="msg" placeholder="입력하세요." />
            <p>메시지: {{ msg }}</p>
        </div>
        <div>
            <div v-for="item in items" v-bind:key="item.id">
                <input type="checkbox" :id="item.id" :value="item.message" v-model="checkedItem"/>
                <label :for="item.id">{{ item.message }}</label>
            </div>
            
            <br />
            <span>Checked items: {{ checkedItem }}</span>
        </div>
        <div id="event-with-method">
            <button @click="btnClick">alert</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DirectiveTest",
    data() {
        return {
          idA: 1,
          classA: 'container',
          styleA: 'color: blue',
          flagIf: true,
          flagShow: true,
          items: [
              { 
                id: 1,
                message: 'foo'
              },
              { 
                id: 2,
                message: 'bar'
              }
          ],
          msg: '',
          checkedItem: []
        }
    },
    methods: {
      btnClick(event) {
          alert(event.target.tagName+' event!!!!!')
      }
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 5%;
    }
</style>