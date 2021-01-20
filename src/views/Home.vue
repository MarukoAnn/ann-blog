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
  components:{
    music,
    anHeader,
  }
})
</script>
<style lang="scss" scoped>
  .home {
    max-height: 100vh;
    overflow: scroll;
    .body {
        padding: 8vh 18vw 0 18vw;
        height: 92vh;
        //width: 100vw;
      /*padding: 4vh 20vw 0 20vw*/
    }
  }
</style>
