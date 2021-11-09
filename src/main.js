import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import EmitTest from './components/EmitTest.vue'


var router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/emit',
            component: EmitTest
        }
    ]
});

const app = createApp(App)
app.use(router);

app.mount('#app')
