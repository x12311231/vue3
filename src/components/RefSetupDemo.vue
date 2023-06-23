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
<script setup>
import {onMounted, reactive, ref} from "vue";

defineProps({changeRefMsg: {}, 'msg': {}})
// defineProps(['changeRefMsg', 'msg'])

let items = reactive([
    {name: "php"},
    {name: "java"},
    {name: "c"}
])
function addItem() {
    let item = ["python", "javascript", "golang", "rust", "ruby", "c++", "nodejs"]
    items.push({name: item[Math.floor(Math.random() * item.length)]})
}
const input = ref(null)
onMounted(() => {
    input.value.value = 'ref test'
    input.value.focus()
})
</script>

<style scoped>

</style>