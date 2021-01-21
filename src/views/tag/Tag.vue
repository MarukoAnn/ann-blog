<template>
 <div class="tag" id="tag">
    <div>
<!--        <h1>所有标签</h1>-->
        <h2 style="margin-top: 1vh">目前总计{{items.length}}个标签</h2>
        <div class="content">
            <el-tag
                v-for="item in items"
                :key="item.label"
                :color="item.color"
                :hit="false"
                size=""
                >
                <span style="color: #fff">{{ item.label }}</span>
            </el-tag>
        </div>
    </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name: "Tag",
    setup(){
        const items = ref([
            {label: 'JavaScript', color: '#F69880'},
            {label: 'Vue', color: '#E77C83'},
            {label: 'jquery', color: '#9DAF9F'},
            {label: 'nodejs', color: '#41B9D7'},
            {label: 'Koa', color: '#E77C83'},
            {label: 'Nginx', color: '#41B9D7'},
            {label: 'Webpack', color: '#574B43'},
            {label: '前端', color: '#9DAF9F'},
            {label: 'css', color: '#41B9D7'},
            {label: '后端', color: '#9DAF9F'},
            {label: 'Python', color: '#F69880'},
            {label: 'Express', color: '#9DAF9F'},
            {label: 'Java', color: '#E77C83'},
            {label: 'SpringBoot', color: '#9DAF9F'},
            {label: 'Spring', color: '#F69880'},
            {label: 'SpringMVC', color: '#9DAF9F'},
            {label: 'Mybatis', color: '#41B883'},
            {label: '前端工程化', color: '#41B9D7'},
        ])
        return{
            items
        }
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";
.tag {
    @include con-body;
    height: 87%;
    .content{
        margin-top: 2vh;
        /deep/ .el-tag{
            margin: 2vh 1vw;
            padding:0 1vw;
        }
    }
}
</style>
