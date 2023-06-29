<template>
    <div>
        <label>
            <p>First Name</p>
            <input
                type="text"
                :value="firstName"
                @input="$emit('update:firstName', $event.target.value)"
            />
        </label>
        <label>
            <p>Last Name</p>
            <input
                type="text"
                :value="lastName"
                @input="$emit('update:lastName', $event.target.value)"
            />
        </label>
    </div>
</template>

<script>
// https://cn.vuejs.org/guide/components/v-model.html#multiple-v-model-bindings
export default {
    name: "Input5Demo",
    props: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    },
    emits: ['update:firstName', 'update:lastName']
}
</script>

<style scoped>

</style>