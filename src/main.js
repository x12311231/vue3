import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App);
app.directive('disable', (el, binding) => {
    el.style.borderStyle = 'none'
    el.setAttribute('disabled', true)
})
app.mount('#app')

