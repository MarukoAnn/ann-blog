<template>
    <div id="course" class="course">
        <h1>历程</h1>
        <div class="fragment">
            <div class="title">
                <h2>2021</h2>
                <hr/>
            </div>
            <el-timeline style="margin-top: 2vh">
                <el-timeline-item v-for="(item, t_index) in corList" :key="t_index" :timestamp="item.time"
                                  :color="item.color" placement="top">
                    <div>
                        <h4>{{ item.label }}</h4>
                        <p>{{ item.sub }}</p>
                    </div>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: "course",
    setup() {
        const corList = ref([
            {time: '2021-01-20', color: '#D99F69', label: '模块添加', sub: '下雪动画、详情数据添加 提交于2021/01/20 21:46'},
            {time: '2021-01-21', color: '#D99F69', label: '模块更新', sub: '更新 分类、标签、历程等模块 提交于2021/01/21 22:06'},
        ])
        return {
            corList
        }
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";

.course {
    @include con-body;
    text-align: left;
    height: 88%;
    //background: rgba(255, 255, 255, 0.8);
    //margin-top: 4vh;
    //padding: 4vh 4vw;
    //border-radius: 10px;
    .fragment{
        margin-top: 2vh;
        .title{
            margin: 1vh;
            h2{
                padding: 1vh 0;
            }
        }
        /deep/ .el-timeline-item__tail {
            border-color: #ccc !important;
        }

    }

}
</style>
