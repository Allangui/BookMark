import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq"
import App from './App.vue'

createApp(App).use(Vue3Mq, { breakpoints: {s:0 ,m:768} }).mount('#app')
