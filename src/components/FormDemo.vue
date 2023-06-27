<template>
<div>
    <form :action="method">
<!--        <input-demo label="user name" name="username" :value="username" @input-change="usernameChange"/>-->
        <input-demo label="user name" name="username" :value="username" @input-change="event => username = event.$refs.input.value"/>
        <input-demo label="password" name="password" type="password" @input-change="event => password = event.$refs.input.value"/>
        <div>
            <label for="email">
                email
                <input type="text" name="email" v-model="email">
            </label>
        </div>
        <div>
            <label for="company">
                company
                <input type="text" name="company" :value="company" @input="(event) => {
                    console.log('company event', event, event.target.value)
                    company = event.target.value
                }">
            </label>
        </div>
        <button type="submit">submit</button>
    </form>
</div>
</template>

<script>
import InputDemo from "@/components/InputDemo.vue";

export default {
    name: "FormDemo",
    components: {InputDemo},
    props: {
        method: {type: String, required: true, in:['get', 'post']}
    },
    data() {
        return {
            username: 'x12311231',
            password: '',
            email: '',
            company: ''
        }
    },
    methods: {
        usernameChange(e) {
            console.log('username event trigger', e.$refs.input)
            this.username = e.$refs.input.value
        }
    }
}
</script>

<style scoped>

</style>