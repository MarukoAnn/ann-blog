<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <music></music>
  </div>
</template>

<script lang="ts">
import music from "@/components/music.vue";
import { defineComponent } from 'vue';
export default defineComponent({
  name:'home',
  setup(){
     console.log('初始化')
  },
  components:{
    music
  }
})
</script>
