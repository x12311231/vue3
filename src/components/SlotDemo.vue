<template>
    <div class="alert-box">
        <strong>This is an Error for Demo Purposes</strong>
        <slot :msg="hello" :count="1"/>
    </div>
</template>

<script>
export default {
    name: "SlotDemo",
    data() {
       return {
           hello: "hello Slot"
       }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>