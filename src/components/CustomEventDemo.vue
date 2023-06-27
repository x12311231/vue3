<template>
    <button @click="$emit('enlarge-size', this)">enlarge font size</button>
    <div>
        <h6>custom event 1</h6>
        <p>this is a paragraph1</p>
    </div>
    <div>
        <h6>custom event 2</h6>
        <p>this is a paragraph2</p>
    </div>
    <div>
        <h6>custom event 3</h6>
        <p>this is a paragraph3</p>
    </div>
</template>

<script>
export default {
    name: "CustomEventDemo",
    emits: ['enlarge-size']
}
</script>

<style scoped>

</style>