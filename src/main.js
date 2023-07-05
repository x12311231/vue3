import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/assets/plugins/i18n";

let app = createApp(App);
app.directive('disable', (el, binding) => {
    el.style.borderStyle = 'none'
    el.setAttribute('disabled', true)
})
app.use(i18n, {
    greetings: {
        hello: 'hello vue'
    }
})
app.mount('#app')

