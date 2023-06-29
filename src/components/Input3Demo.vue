<template>
    <div>
        <label :for="name">
            {{label}}
            <input :name="name" :placeholder="placeholder" :type="type" v-model="value" />
            <!--        <input :name="name" :placeholder="placeholder" :type="type">-->
            <!--        <input :name="name" :placeholder="placeholder" v-model="value" :type="type">-->
        </label>
    </div>
</template>

<script>
export default {
    name: "Input3Demo",
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
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
