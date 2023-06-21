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

<script>
export default {
    name: "WatchDemo",
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)',
            someObject: {
                a: {
                    a1: 1, a2: 2
                },
                b: {
                    b1: 1, b2: 2
                }
            },
            haveNews: this.haveNewsFlag(),
            news: [],
            lastNewsTime: (new Date()).toString()
        }
    },
    watch: {
        // 每当 question 改变时，这个函数就会执行
        question(newQuestion, oldQuestion) {
            if (newQuestion.includes('?')) {
                this.getAnswer()
            }
        },
        someObject: {
            handler(newValue, oldValue) {
                console.log('newValue:', newValue)
                console.log('oldValue:', oldValue)
                console.log('==', newValue === oldValue)
            },
            deep: true
        },
        // haveNews: {
        //     handler(newValue, oldValue) {
        //         // console.log('newValue:', newValue)
        //         // console.log('oldValue:', oldValue)
        //         // console.log('==', newValue === oldValue)
        //         console.log('watch haveNews', newValue)
        //         if (newValue === true) {
        //             this.getNews()
        //         }
        //         this.haveNews = false
        //     },
        //     immediate: true
        // },
        lastNewsTime(newValue, old) {
            console.log('lastNewsTime watch', newValue)
            this.getNews()
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            }
        },
        getLastNewsTime() {
            if (Math.random() * 10 > 3) {
                this.lastNewsTime = (new Date()).toString()
            }
        },
        addData() {
            this.someObject.a.a1++;
        },
        haveNewsFlag() {
            return Math.random() * 10 > 3;
        },
        updateHaveNews() {
            this.haveNews = this.haveNewsFlag()
            console.log('haveNews', this.haveNews)
        },
        timerHaveNews() {
            // setInterval(this.updateHaveNews, 5000)
            setInterval(this.getLastNewsTime, 5000)
        },
        getNews() {
            const author = ['john', 'bob', 'tom', 'fish', 'cat', 'dog'];
            let news;
            news = []
            let j = this.news.length
            for (let i = 0; i < Math.random() * 4 + 1; i++) {
                news.push({id: j++, title:'new:' + new Date(), author: author[Math.floor(Math.random() * 6)]})
            }
            console.log('newss', news)
            for (let n of news) {
                this.news.unshift(n)
            }
        },
        p() {
            console.log('ppppppp')
        }
    },
    mounted() {
        this.p()
        this.timerHaveNews()
    }
}
</script>

<style scoped>

</style>