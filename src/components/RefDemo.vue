<template>
    <div>
        <div>
            <label id="label-ref" for="refTest" @click="changeRefMsg">ref test</label>
            <input ref="input" :ref="(el) => {
                console.log('el', el)
            }" :value="msg" />
        </div>
        <div>
            <button @click="addItem">add item</button>
            <ul :ref="(el) => {console.log('ul ref', el)}">
                <li v-for="item of items" :ref="(el) => {
                    console.log('el', el.outerText)
                }">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "RefDemo",
    props: {
        changeRefMsg: {},
        msg: {}
    },
    data() {
        return {
            items: [
                {name: "php"},
                {name: "java"},
                {name: "c"}
            ]
        }
    },
    methods: {
        addItem() {
            let item = ["python", "javascript", "golang", "rust", "ruby", "c++", "nodejs"]
            this.items.push({name: item[Math.floor(Math.random() * item.length)]})
        }
    },
    mounted() {
        this.$refs.input.value = 'ref test'
        this.$refs.input.focus()
    }
}
</script>

<style scoped>

</style>