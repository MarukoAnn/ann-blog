<template>
  <div class="home">
    <an-header></an-header>
    <div class="body">
      <router-view></router-view>
    </div>
    <music style="position: fixed;bottom: 0;background: #FFFFFF"></music>
  </div>
</template>

<script lang="ts">
import music from "@/components/music.vue";
import anHeader from "@/components/anHeader.vue";

import { defineComponent } from 'vue';
export default defineComponent({
  name:'home',
  setup(){
     console.log('初始化')
  },
  components:{
    music,
    anHeader,
  }
})
</script>
<style lang="scss" scoped>
  .home {
    .body {
      padding: 0 18vw;
      /*padding: 4vh 20vw 0 20vw*/
    }
  }
</style>
