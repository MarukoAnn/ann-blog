<template>
 <div class="tag" id="tag">
    <div>
        <h1>所有标签</h1>
        <div class="content">
            <el-tag
                v-for="item in items"
                :key="item.label"
                :color="item.color"
                :hit="false"
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
            margin: 0 10px;
        }
    }
}
</style>
