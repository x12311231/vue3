<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
        <div>
            <button @click="addData">add</button>
            <div>{{ JSON.stringify(someObject) }}</div>
        </div>
        <div>
            <span>message</span>
            <ul>
                <li v-for="n in news" :key="n.id">{{ n.id }} {{ n.title }} {{ n.author }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {h, onMounted, reactive, ref, watch} from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

let news = reactive([])
let hasNews = ref(false)
let lastNewsTime = ref((new Date()).toString())

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        }
    }
})

// watch(hasNews, async (newHasNews, oldHasNews) => {
//     console.log('watch hasNews', newHasNews)
//     if (newHasNews === true) {
//         getNews()
//     }
//     hasNews = false
// })
watch(lastNewsTime,  (newValue, oldValue) => {
    console.log('lastNewsTime watch', newValue)
    getNews()
}, {immediate: true})

let someObject = reactive({
    a: {
        a1: 1, a2: 2
    },
    b: {
        b1: 1, b2: 2
    }
})

function addData() {
    someObject.a.a1++
}
function haveNewsFlag() {
    return Math.random() * 10 > 3;
}
function getLastNewsTime() {
    if (Math.random() * 10 > 3) {
        lastNewsTime = (new Date()).toString()
        console.log('lastNewsTime', lastNewsTime)
    }
}
function timerHasNews() {
    // hasNews = haveNewsFlag()
    // console.log('hasNews', hasNews)
    getLastNewsTime()
}
function getNews() {
    const author = ['john', 'bob', 'tom', 'fish', 'cat', 'dog'];
    let _news;
    _news = []
    let j = news.length
    for (let i = 0; i < Math.random() * 4 + 1; i++) {
        _news.push({id: j++, title:'new:' + new Date(), author: author[Math.floor(Math.random() * 6)]})
    }
    console.log('newss', _news)
    for (let n of _news) {
        news.unshift(n)
    }
}
onMounted(() => {
    setInterval(timerHasNews, 5000)
})
</script>

<style scoped>

</style>