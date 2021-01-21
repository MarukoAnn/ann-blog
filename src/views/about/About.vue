<template>
    <div class="about" id="about">
        <!--        <h2>关于我</h2>-->
        <div class="item" v-for="(item, index) in itemList" :key="index">
            <h3>{{ item.label }}: </h3><span>{{ item.value }}</span>
        </div>
        <hr style="margin-top: 4vh"/>
        <h2 style="margin-top: 4vh">网站搭建</h2>
        <div v-for="(r_item, r_index) in riList" :key="r_index">
            <p style="padding-top: 2vh;margin-left: 1em"> {{ r_item.label }}</p>
            <p style="padding-top: 2vh;margin-left: 2em" v-for="(li_item, li_index) in r_item.list" :key="li_index">
                {{ li_item }}</p>
        </div>


    </div>
</template>
<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: "about",
    setup() {
        const itemList = ref([
            {label: '网名', value: 'Moonshine'},
            {label: '职位', value: '前端开发工程师'},
            {label: '就读大学', value: '贵州师范大学 计算机学院 数字媒体技术专业'},
            {label: '工作单位', value: '广州乐牛科技有限公司'},
            {
                label: '擅长技术',
                value: '擅长vue、angular、react等前端技术栈开发，熟悉nodejs、express、koa开发后端、熟悉java、springboot、android开发、熟悉flutter、reactnative、taro、小程序等移动端开发，' +
                    '熟悉python网络爬虫'
            },
            {label: '个人简介', value: '一个95后的前端程序员，19年入行，一直潜心研究前端技术，努力学习、努力工作，争取以后分享一些个人心得和技术文章，希望大家一起学习'},
        ])
        const riList = ref([
            {label: '2021年1月20日 21:45', list: ['1、搭建静态博客', '2、编写音乐组件', '3、编写关于我的信息模块']},
            {label: '2021年1月20日 23:16', list: ['1、添加了卡片组件', '2、添加了第一条技术分享，关于this指向问题的说明', '3、下雪动画的添加']},
        ])
        return {
            itemList,
            riList
        }
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";

.about {
    height: 88%;
    text-align: left;
    @include con-body
    .item {
        display: flex;
        padding-top: 3vh;
        h3 {
            flex: 2;
        }
        span {
            margin-left: 1vw;
            flex-wrap: wrap;
            flex: 24;

        }
    }
}
</style>
