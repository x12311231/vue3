<template>
<div>
    <form :action="method">
<!--        <input-demo label="user name" name="username" :value="username" @input-change="usernameChange"/>-->
        <input-demo label="user name" name="username" :value="username" @input-change="event => username = event.$refs.input.value"/>
        <input-demo label="password" name="password" type="password" @input-change="event => password = event.$refs.input.value"/>
<!--        <input1-demo label="address" name="address" @input-change="$event => address = $event.target.value"></input1-demo>-->
        <input1-demo label="address" name="address" @input-change="event => address = event.target.value"></input1-demo>
        <input2-demo label="city" name="city" v-model="city"/>
        <input3-demo label="wechat" name="wechat" v-model="wechat" />
        <input4-demo label="qq" name="qq" v-model:custom-value="qq" />
        <p>first name: {{ firstName }} last name: {{ lastName }}</p>
        <input5-demo v-model:last-name="lastName" v-model:first-name="firstName" />
        <p>band card: {{ bankCard }}</p>
        <model-modifiers-custom-demo v-model.card="bankCard" />
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
import Input1Demo from "@/components/Input1Demo.vue";
import Input2Demo from "@/components/Input2Demo.vue";
import Input3Demo from "@/components/Input3Demo.vue";
import Input4Demo from "@/components/Input4Demo.vue";
import Input5Demo from "@/components/Input5Demo.vue";
import ModelModifiersCustomDemo from "@/components/ModelModifiersCustomDemo.vue";

export default {
    name: "FormDemo",
    components: {ModelModifiersCustomDemo, Input5Demo, Input4Demo, Input3Demo, Input2Demo, Input1Demo, InputDemo},
    props: {
        method: {type: String, required: true, validator(v) {
            return ['post', 'get'].includes(v)
            }}
    },
    data() {
        return {
            username: 'x12311231',
            password: '',
            email: '',
            company: '',
            address: '',
            city: '',
            wechat: '',
            qq: '',
            firstName: '',
            lastName: '',
            bankCard: ''
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