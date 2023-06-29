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
// https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments
export default {
    name: "Input4Demo",
    data() {
        return {
            // value: ''
        }
    },
    // props: ['name', 'placeholder', 'value', 'label']
    props: {
        name: {type: String, required: true},
        placeholder: {},
        customValue: {},
        label: {type: String, required: true},
        type: {type: String, default: "text"}
    },
    emits: ['update:customValue'],
    computed: {
        value: {
            get() {
                return this.customValue
            },
            set(value) {
                this.$emit('update:customValue', value)
            }
        }
    }
}
</script>

<style scoped>

</style>
