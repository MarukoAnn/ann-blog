<template>
    <div class="music">
        <div  v-if="openMusic">
            <div class="music-list" v-if="showAudio">
                <div class="music-item"
                     v-for="(item, index) in audioLists" :key="index" @click="playAudioToIndex(index)">
                    <div>
                        <span style="display: inline-block;margin-right: 12px">{{index + 1}}</span>
                        <span>{{item.label}}</span>
                    </div>
                    <div>
                        <span>{{item.autor}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="music-content">
            <div class="left-img">
                <img src="../assets/image/wu.jpg" alt="">
            </div>
            <div class="right-content" v-if="openMusic">
                <div  style="padding: 10px 0;display: flex;justify-content: space-around">
                    <div style="width: 70%;text-align: left">
                        {{audioLists[index].label}}-
                        <span style="font-size: 12px">{{audioLists[index].autor}}</span>
                    </div>
                    <div style="font-size: 16px;display: flex;justify-content: space-around">
                        <i class="iconfont icon-yduishangyiqu" style="font-size: 20px;margin-right: 5px"  @click="nextAudio('upper')"></i>
                        <i v-if="isPlay" class="iconfont icon-bofang" style="font-size: 20px;margin-right: 5px"  @click="pauseAudio"></i>
                        <i v-if="!isPlay" class="iconfont icon-iconset0481" style="font-size: 20px;margin-right: 5px"  @click="playAudio"></i>
                        <i class="iconfont icon-yduixiayiqu" style="font-size: 20px;margin-right: 5px"  @click="nextAudio('next')"></i>
                        <i class="iconfont icon-liebiao" style="font-size: 20px"  @click="showAudioList"></i>
                    </div>

                </div>
                <div>
                    <div style="display: flex;align-items: center">
                        <div class="outpross">
                            <div class="inierpross" :style="{'width': prossWidth + '%'}"></div>
                        </div>
                        <span style="font-size: 12px;margin-left: 10px">{{(timeder/60).toFixed(0) >10 ? (timeder/60).toFixed(0): '0'+ (timeder/60).toFixed(0) }}:
                        {{(timeder%60).toFixed(0) >10 ? (timeder%60).toFixed(0): '0'+ (timeder%60).toFixed(0) }}/
                        {{(duration/60).toFixed(0) >10 ? (duration/60).toFixed(0): '0'+ (duration/60).toFixed(0) }}:
                        {{(duration%60).toFixed(0) >10 ? (duration%60).toFixed(0): '0'+ (duration%60).toFixed(0) }}</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="right-icon" @click="openMusiContent">
            <i v-if="!openMusic" class="iconfont icon-youbian"></i>
            <i v-if="openMusic" class="iconfont icon-zuobian"></i>
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
            const prossWidth = ref(0); // 进度条长度
            const isPlay = ref(false)
            const openMusic = ref(true)
            const setAudioTimer = ref(0)
            const showAudio = ref(false)
            const timeder = ref(1)
            const audioLists = ref([
                {label: '朔', url: require('../assets/audio/溯.mp3'), autor: '马吟吟'},
                {label: '莫问归期', url: require('../assets/audio/蒋雪儿-莫问归期.mp3'), autor: '蒋雪儿'},
                {label: '无人之岛', url: require('../assets/audio/任然-无人之岛.mp3'), autor: '任然'},
                {label: '你走', url: require('../assets/audio/松紧先生（李宗锦）-你走.mp3'), autor: '松紧先生（李宗锦）'},
                {label: '芒种', url: require('../assets/audio/音阙诗听_赵方婧-芒种.mp3'), autor: '音阙诗听_赵方婧'},
                {label: '电台情歌', url: require('../assets/audio/莫文蔚-电台情歌.mp3'), autor: '莫文蔚'},
                {label: '像鱼', url: require('../assets/audio/王贰浪-像鱼.mp3'), autor: '王贰浪'},
                {label: '夜的第七章', url: require('../assets/audio/周杰伦_潘儿-夜的第七章.mp3'), autor: '周杰伦_潘儿'},
            ])
            const audio = ref(new Audio(audioLists.value[index.value].url));
            // 开始调用
            const canPlay = (): void => {
                console.log('开始调用')
                duration.value = Math.ceil(audio.value?.duration)
                prossWidth.value = (timeder.value / audio.value?.duration) * 100
                console.log(duration.value)

            }
            // 结束调用
            const endPlayed = (): void => {
                console.log('播放完毕')
                clearInterval(setAudioTimer.value);
                nextAudio('next');
            }
            const showAudioList = (): void => {
                showAudio.value = !showAudio.value
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
                timeder.value = 1;
                clearInterval(setAudioTimer.value);
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
                addPross();
            }
            const playAudioToIndex = (num: number): void => {
                timeder.value = 1;
                clearInterval(setAudioTimer.value);
                audio.value.pause();
                audio.value = new Audio(audioLists.value[num].url);
                index.value = num;
                removeLinstener()
                audio.value.load();
                audio.value.play();
                addLinstener()
                isPlay.value = true;
                addPross();
            }
            // 添加播放长度
            const addPross = (): void => {
                setAudioTimer.value = setInterval(() => {
                    timeder.value += 1;
                    prossWidth.value = (timeder.value / audio.value?.duration) * 100
                }, 1000)
            }
            // 开始播放
            const playAudio = (): void => {
                isPlay.value = true;
                audio.value.play();
                // addLinstener();
                addPross();

            }
            // 暂停播放
            const pauseAudio = (): void => {
                clearInterval(setAudioTimer.value);
                isPlay.value = false;
                audio.value.pause();
            }
            const openMusiContent = (): void => {
                openMusic.value = !openMusic.value;
            }
            onMounted(() => {
                console.log('开始播放');
                // playAudio();
                addLinstener();
            })
            return {
                index,
                audioLists,
                isPlay,
                prossWidth,
                timeder,
                duration,
                showAudio,
                openMusic,
                playAudio,
                pauseAudio,
                nextAudio,
                openMusiContent,
                showAudioList,
                playAudioToIndex
            }
        }
    })
</script>

<style scoped lang="scss">
    .music {
        display: flex;
        height: 8vh;
        position: relative;
        .music-content {
            display: flex;
            border: 1px solid #E6E6E6;
            box-sizing: border-box;
            .left-img{
                img {
                    width:4vw;
                    height: 100%;
                }
            }
            .right-content {
                flex: 1;
                padding-left: 4px;
                width: 25vw;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                box-sizing: border-box;
                .outpross {
                    width:70%;
                    height: 2px;
                    background: gray;
                    border-radius: 10px;
                    position: relative;

                    .inierpross {
                        height: 2px;
                        background: #42b983;
                        border-radius: 10px;
                        position: absolute
                    }
                }
            }
        }
        .right-icon {
            width: 1vw;
            height: 100%;
            /*border-top: 1px solid gray;*/
            /*border-right: 1px solid gray;*/
            /*border-bottom: 1px solid gray;*/
            display: flex;
            justify-content: center;
            align-items: center;
            background: #E6E6E6;
        }
        .music-list {
            width: 30vw;
            position: absolute;
            height: 18vh;
            top: -18vh;
            overflow: scroll;
            border-left: 1px solid #EEEEEE;
            border-right: 1px solid #EEEEEE;
            .music-item{
                display: flex;
                background: #fff;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #EEEEEE;
                padding: 10px 8px;
                cursor: pointer;
            }
            :hover{
                background: #EFEFEF;
            }
        }

    }
</style>
