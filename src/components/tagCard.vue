<template>
    <div class="tag-card">
       <div class="tag-content">
           <div class="title">
               <i class="iconfont icon-Id" style="font-size: 22px;color: #42b983;margin-top: 4px;margin-right: 10px"></i>
               <h4>我的名片</h4>
           </div>
           <div class="content">
               <p>网名：moonshine</p>
               <p>职业：web前端开发工程师</p>
               <p>现居：广东省-广州市</p>
               <p>Email：moonsunshinean@gamail</p>
               <p>QQ：710159940</p>
               <p>微信：Moonshinean</p>
           </div>
       </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: "tag-card",
    setup(){
       const tagType = ref();

       return {
           tagType
       }
    }
})
</script>

<style scoped lang="scss">
    .tag-card {
        width: 20vw;
        border-radius: 6px;
        border: 1px solid #EDF0F6;
        box-shadow: 0 0 14px #EDF0F6;
        .tag-content {
            padding: 1vh 1vw;
            .title {
                display: flex;
                align-items: center;
                text-align: left;
            }
            .content {
                margin-top: 1vh;
                padding: 1vh 0 2vh 0;
                border-top: 1px solid #DADCE0;
                text-align: left;
                p {
                    padding-top: 1vh;
                }
            }
        }

    }
</style>
