<template>
<div>
    <input type="text" :value="modelValue" @input="emitValue" />
</div>
</template>

<script>
// https://cn.vuejs.org/guide/components/v-model.html#handling-v-model-modifiers
export default {
    name: "ModelModifiersCustomDemo",
    props: {
        modelValue: String,
        modelModifiers: {
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    methods: {
        emitValue(e) {
            let value = ''
            let value1 = e.target.value
            // if (this.modelModifiers.capitalize) {
            //     value = value.charAt(0).toUpperCase() + value.slice(1)
            // }
            // if parent use this with v-model:title="someVariables", this should be titleModifiers
            if (this.modelModifiers.card) {
                value1 = ''
                for (let i = 0; i < e.target.value.length; i++) {
                    let number = e.target.value.charAt(i);
                    if (Number.isInteger(parseInt(number))) {
                        // console.log('number', number)
                        value += number
                    }
                }
                // console.log('value', value)
                for (let i = 0; i < value.length; i++) {
                    if (i !== 0 && i % 4 === 0) {
                        value1 += '-'
                    }
                    value1 += value.charAt(i)
                }
                e.target.value = value1
            }
            this.$emit('update:modelValue', value1)
        }
    }
}
</script>

<style scoped>

</style>