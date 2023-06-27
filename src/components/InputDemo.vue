<template>
<div>
    <label :for="name">
        {{label}}
        <input :name="name" :placeholder="placeholder" :value="value" :type="type" ref="input" @input="$emit('input-change', this)" />
<!--        <input :name="name" :placeholder="placeholder" :type="type">-->
<!--        <input :name="name" :placeholder="placeholder" v-model="value" :type="type">-->
    </label>
</div>
</template>

<script>
export default {
    name: "InputDemo",
    data() {
        return {
            // value: ''
        }
    },
    // props: ['name', 'placeholder', 'value', 'label']
    props: {
        name: {type: String, required: true},
        placeholder: {},
        value: {},
        label: {type: String, required: true},
        type: {type: String, default: "text"}
    },
    emits: ['input-change']
}
</script>

<style scoped>

</style>