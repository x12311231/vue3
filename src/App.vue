<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import HelloDemo from "@/components/HelloDemo.vue";
import SpriteDrink from "@/components/SpriteDrink.vue";
import IfDemo from "@/components/IfDemo.vue";
import ForDemo from "@/components/ForDemo.vue";
import EventDemo from "@/components/EventDemo.vue";
import WatchDemo from "@/components/WatchDemo.vue";
import WatchSetupDemo from "@/components/WatchSetupDemo.vue";
import RefDemo from "@/components/RefDemo.vue";
import {createApp, onMounted, ref} from "vue";
import RefSetupDemo from "@/components/RefSetupDemo.vue";
import CustomEventDemo from "@/components/CustomEventDemo.vue";
import SlotDemo from "@/components/SlotDemo.vue";
import NamedSlotDemo from "@/components/NamedSlotDemo.vue";
import DynamicNamedSlotDemo from "@/components/DynamicNamedSlotDemo.vue";
import FancyListDemo from "@/components/FancyListDemo.vue";
import FormDemo from "@/components/FormDemo.vue";
import AttributeDemo from "@/components/AttributeDemo.vue";
import MouseDemo from "@/components/MouseDemo.vue";
import CustomDirectiveDemo from "@/components/CustomDirectiveDemo.vue";
let refMsg = ref("refMsg")
function changeRefMsg() {
    refMsg.value = "refMsg" + (new Date()).toString()
}

let ref_demo = ref(null)
onMounted(() => {
    console.log('refDemo ref', ref_demo.value)
    console.log('refDemo ref', ref_demo.value.items)
})

let fontSize = ref(1)
function enlargeFontSize(event) {
    console.log('enlarge font size event', event)
    fontSize.value += 0.1
}
let dynamicSlot = ref("top")
function changeDynamicSlot() {
    dynamicSlot.value = dynamicSlot.value === "top" ? "bottom" : "top"
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <HelloDemo msg="this is a demo component" />
        <sprite-drink name="雪碧" price="3￥"/>
        <if-demo/>
        <for-demo/>
        <event-demo/>
<!--        <watch-demo/>-->
<!--        <watch-setup-demo/>-->
<!--        <ref-demo :msg="refMsg" :changeRefMsg="changeRefMsg" ref="ref_demo"/>-->
        <ref-setup-demo :msg="refMsg" :changeRefMsg="changeRefMsg" ref="ref_demo"/>
        <div :style="{ fontSize: fontSize + 'em' }">
            <custom-event-demo @enlarge-size="enlargeFontSize"/>
<!--            <custom-event-demo @enlarge-size="fontSize += 0.1"/>-->
            <SlotDemo v-slot="subProp">
                <div>msg: {{ subProp.msg }} </div>
                <div class="danger">Something bad happened</div>
            </SlotDemo>
        </div>
        <named-slot-demo>
            <template #header="headerProp">
                {{ headerProp }}
                <h1>Here might be a page title</h1>
            </template>

<!--            <template #default>-->
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
<!--            </template>-->
            <div>main</div>

            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </named-slot-demo>
        <dynamic-named-slot-demo :changeDynamicSlot="changeDynamicSlot">
            <template #[dynamicSlot]>
                I AM DYNAMIC SLOT
            </template>
        </dynamic-named-slot-demo>
        <fancy-list-demo :limit="5" url="some-api">
            <template #item="{ title, author }">
                <div>
                    <p>{{ title }}</p>
                    <p>{{ author }}</p>
                </div>
            </template>
        </fancy-list-demo>
        <fancy-list-demo :limit="5" url="some-api">
            <template #item="v">
                <div>
                    {{ v }}
                </div>
            </template>
        </fancy-list-demo>
        <form-demo method="get"/>
        <attribute-demo class="danger"/>
      <mouse-demo />
      <custom-directive-demo />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
      flex-direction: column;
  }
}
</style>
<style>
.text-bold {
    font-weight: bold;
}
.danger {
    color: darkred;
}
.v-border {
    border: #282828 1px solid;
}
</style>