<template>
    <div>
        <label id="label-ref" for="refTest" @click="changeRefMsg">ref test</label>
        <input ref="input" :ref="(el) => {
            console.log('el', el)
        }" :value="msg" />
    </div>
</template>

<script>
export default {
    name: "RefDemo",
    props: {
        changeRefMsg: {},
        msg: {}
    },
    mounted() {
        this.$refs.input.value = 'ref test'
        this.$refs.input.focus()
    }
}
</script>

<style scoped>

</style>