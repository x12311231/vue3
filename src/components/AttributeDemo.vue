<template>
<div class="v-border">
    hello attribute
    <div v-bind="$attrs" class="v-border">hi attribute</div>
</div>
    <div class="v-border">
        attribute
    </div>
</template>

<script>
export default {
    name: "AttributeDemo",
    inheritAttrs: false,
    methods: {
        showAttr() {
            console.log('attr', this.$attrs)
        }
    },
    mounted() {
        this.showAttr()
    }
}
</script>

<style scoped>

</style>