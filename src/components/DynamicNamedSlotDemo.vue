<template>
<div>
    <h5>dynamic named slot</h5>
    <button class="v-btn" @click="changeDynamicSlot">change</button>
    <div>
        <slot name="top">i am top</slot>
    </div>
    <div>
        <slot name="bottom">i am bottom</slot>
    </div>
</div>
</template>

<script>
export default {
    name: "DynamicNamedSlotDemo",
    props : {changeDynamicSlot: {}}
}
</script>

<style scoped>

</style>