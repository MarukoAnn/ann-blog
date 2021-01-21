<template>
  <div id="course" class="course">
      <el-timeline >
        <el-timeline-item v-for="(item, t_index) in corList" :key="t_index" :timestamp="item.time" :color="item.color" placement="top">
          <div>
            <h4>{{ item.label }}</h4>
            <p>{{ item.sub }}</p>
          </div>
        </el-timeline-item>
      </el-timeline>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: "course",
  setup(){
    const corList = ref([
        {time: '2021-01-21', color: '#D99F69', label: '更新 Github 模板', sub: '王小虎 提交于2018/4/12 20:46'},
        {time: '2021-01-21', color: '#D99F69', label: '更新 Github 模板', sub: '王小虎 提交于2018/4/12 20:46'},
        {time: '2021-01-21', color: '#D99F69', label: '更新 Github 模板', sub: '王小虎 提交于2018/4/12 20:46'},
    ])
    return{
        corList
    }
  }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";
.course{
    @include con-body;
    text-align: left;
    height: 88%;
    //background: rgba(255, 255, 255, 0.8);
    //margin-top: 4vh;
    //padding: 4vh 4vw;
    //border-radius: 10px;
    /deep/ .el-timeline-item__tail{
        border-color: #ccc !important;
    }
}
</style>
