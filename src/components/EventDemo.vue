<template>
<div>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
    <button @click="greet">greet</button>
    <button @click="say('hello')">Say hello</button>
    <button @click="say">Say default param</button>
    <button @click="say('bye')">Say bye</button>
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
        warn
    </button>

    <button @click="warn('Form cannot be submitted yet.')">
        warn
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
        warn
    </button>
</div>
</template>

<script>
export default {
    name: "EventDemo",
    data() {
        return {
            count: 0,
            name: "event"
        }
    },
    methods: {
        greet(event) {
            // 方法中的 `this` 指向当前活跃的组件实例
            alert(`Hello ${this.name}!`)
            // `event` 是 DOM 原生事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say(message) {
            alert(message)
        },
        warn(message, event) {
            // 这里可以访问 DOM 原生事件
            if (event) {
                message += ' --- '
                event.preventDefault()
            }
            alert(message)
        }
    }
}
</script>

<style scoped>

</style>