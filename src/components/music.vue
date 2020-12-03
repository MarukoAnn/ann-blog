<template>
    <div class="music">
        <div class="left-img">
            <img src="../assets/image/wu.jpg" alt="">
        </div>
        <div class="right-content">
            <div>正在播放: {{audioLists[index].label}}</div>
            <div>

            </div>
            <button @click="playAudio">播放</button>
            <button @click="pauseAudio">暂停</button>
            <button @click="nextAudio('next')">下一曲</button>
            <button @click="nextAudio('upper')">上一曲</button>
        </div>
    </div>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent} from 'vue';

export default defineComponent({
     name: 'music',
     setup() {
         console.log('初始化')
         const index = ref(0)
         const duration = ref(0)
         const audioLists = ref([
             {label: '朔', url: require('../assets/audio/溯.mp3')},
             {label: '莫问归期', url: require('../assets/audio/蒋雪儿-莫问归期.mp3')},
             {label: '无人之岛', url: require('../assets/audio/任然-无人之岛.mp3')},
             {label: '你走', url: require('../assets/audio/松紧先生（李宗锦）-你走.mp3')},
             {label: '芒种', url: require('../assets/audio/音阙诗听_赵方婧-芒种.mp3')},
             {label: '电台情歌', url: require('../assets/audio/莫文蔚-电台情歌.mp3')},
             {label: '像鱼', url: require('../assets/audio/王贰浪-像鱼.mp3')},
             {label: '夜的第七章', url: require('../assets/audio/周杰伦_潘儿-夜的第七章.mp3')},
         ])
         const audio = ref(new Audio(audioLists.value[index.value].url));
         // 开始调用
         const canPlay = (): void => {
             duration.value = audio.value?.duration;
             console.log(duration.value)
         }
         // 结束调用
         const endPlayed = (): void => {
             console.log('播放完毕')
             nextAudio('next');
         }
         const addLinstener = (): void => {
             audio.value.addEventListener("canplay", canPlay);
             audio.value.addEventListener('ended', endPlayed, false);
         }
         const removeLinstener = (): void => {
             audio.value.removeEventListener('canplay', canPlay);
             audio.value.removeEventListener('ended', endPlayed);
         }
         // 下一曲
         const nextAudio = (flag: string): void => {
             audio.value.pause();
             if (flag === 'next') {
                 index.value += 1;
                 if (index.value > audioLists.value.length - 1) {
                     index.value = 0;
                 }
             } else {
                 index.value -= 1;
                 if (index.value < 0) {
                     index.value = audioLists.value.length - 1;
                 }
             }
             audio.value = new Audio(audioLists.value[index.value].url);
             removeLinstener()
             audio.value.load();
             audio.value.play();
             addLinstener()
         }
         // 开始播放
         const playAudio = (): void => {
             audio.value.play();
         }
         // 暂停播放
         const pauseAudio = (): void => {
             audio.value.pause();
         }
         onMounted(() => {
             console.log('开始播放');
             playAudio();
             addLinstener();
         })
         return {
             index,
             audioLists,
             playAudio,
             pauseAudio,
             nextAudio
         }
     }
 })
</script>

<style scoped lang="scss">
.music {
  display: flex;
}
</style>
