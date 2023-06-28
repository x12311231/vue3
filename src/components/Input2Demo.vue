<template>
    <div>
        <label :for="name">
            {{label}}
            <input :name="name" :placeholder="placeholder" :value="modelValue" :type="type" @input="$emit('update:modelValue', $event.target.value)" />
            <!--        <input :name="name" :placeholder="placeholder" :type="type">-->
            <!--        <input :name="name" :placeholder="placeholder" v-model="value" :type="type">-->
        </label>
    </div>
</template>

<script>
export default {
    name: "Input2Demo",
    data() {
        return {
            // value: ''
        }
    },
    // props: ['name', 'placeholder', 'value', 'label']
    props: {
        name: {type: String, required: true},
        placeholder: {},
        modelValue: {},
        label: {type: String, required: true},
        type: {type: String, default: "text"}
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>

</style>
