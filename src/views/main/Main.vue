<template>
    <div class="main">
        <div class="left">
            <div class="item" v-for="(item, index) in List" :key="index" @click="itemClick">
                <anCard></anCard>
            </div>
        </div>
        <div class="right">
            <tagCard tag-type="0">
                <template v-slot:content>
                    <p>网名：moonshine</p>
                    <p>职业：web前端开发工程师</p>
                    <p>现居：广东省-广州市</p>
                    <p>Email：moonsunshinean@gamail</p>
                    <p>QQ：710159940</p>
                    <p>微信：Moonshinean</p>
                    <p>
                       <i class="iconfont icon-logo-wechat"></i>
                       <i class="iconfont icon-qq"></i>
                       <i class="iconfont icon-github"></i>
                    </p>
                </template>
            </tagCard>
            <tagCard  :tag-type="1">
                <template v-slot:content>
                    <p>网名：moonshine</p>
                    <p>职业：web前端开发工程师</p>
                    <p>现居：广东省-广州市</p>
                    <p>Email：moonsunshinean@gamail</p>
                    <p>QQ：710159940</p>
                    <p>微信：Moonshinean</p>
                </template>
            </tagCard>
            <tagCard  :tag-type="2">
                <template v-slot:content>
                    <p>网名：moonshine</p>
                    <p>职业：web前端开发工程师</p>
                    <p>现居：广东省-广州市</p>
                    <p>Email：moonsunshinean@gamail</p>
                    <p>QQ：710159940</p>
                    <p>微信：Moonshinean</p>
                </template>
            </tagCard>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import { useRouter } from 'vue-router'
import anCard from "@/components/anCard.vue";
import tagCard from "@/components/tagCard.vue"
export default defineComponent({
    name: "main",
    setup() {
        const router = useRouter();
        const List = ref([
            0,1,2,3,4,5
        ])
        const itemClick = (): void => {
            router.push('/home/article')
        }
        return {
            List,
            itemClick
        }
    },
    components: {
        anCard,
        tagCard
    }
})
</script>

<style scoped lang="scss">
.main{
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;

    .left {
        .item {
            margin-bottom: 2vh;
        }
    }
    .right {
        p{
            padding-bottom: 1vh;
        }
    }
}
</style>
