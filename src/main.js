import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/assets/plugins/i18n";
import {createPinia} from "pinia";
const pina = createPinia();
let app = createApp(App);

function Login() {
    const users = [
        {'name': 'daizy', 'age': 18, 'gender': 'female'},
        {'name': 'mike', 'age': 28, 'gender': 'male'},
        {'name': 'rose', 'age': 17, gender: 'female'}
    ]
    if (Math.random() > 0.5) {
        return {'authenticated': users[Math.floor(Math.random() * 3)]}
    }
}
pina.use(Login)
app.use(pina)
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

