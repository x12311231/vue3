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
import {ref} from "vue";
let refMsg = ref("refMsg")
function changeRefMsg() {
    refMsg.value = "refMsg" + (new Date()).toString()
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
        <ref-demo :msg="refMsg" :changeRefMsg="changeRefMsg"/>
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
</style>