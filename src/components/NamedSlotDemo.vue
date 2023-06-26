<template>
    <div class="container">
        <header>
            <slot name="header" :msg="hello"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "NamedSlotDemo",
    data() {
        return {
            hello: "named slot demo"
        }
    }
}
</script>

<style scoped>

</style>