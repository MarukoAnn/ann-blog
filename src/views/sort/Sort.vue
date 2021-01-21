<template>
    <div class="sort" id="sort">
        <div class="left">
           <div :class="{'sort-item': true, 'sort-active': item.active}" v-for="(item, index) in typeList" :key="index" @click="sortTypeClick(index)">
              <span>{{item.label}}</span>
           </div>
        </div>
        <div class="right">
            <div class="item" v-for="(item, index) in List" :key="index" @click="itemClick">
                <anCard></anCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import anCard from "@/components/anCard.vue";
import {useRouter} from "vue-router";
export default defineComponent({
    name: "sort",
    components: {
        anCard
    },
    setup(){
        const router = useRouter();
        const typeList = ref([
            {label: '全部', id: '0', active: true},
            {label: '前端', id: '1', active: false},
            {label: '后台', id: '2', active: false},
            {label: 'javascript', id: '3', active: false},
            {label: 'vue', id: '4', active: false},
            {label: 'Webpack', id: '5', active: false},
            {label: 'Nginx', id: '6', active: false},
        ])
        const List = ref([
            0,1,2,3,4,5
        ])
        const sortTypeClick = (index: number): void => {
            typeList.value.forEach(val => {
                val.active = false
            })
            typeList.value[index].active = true;
        }
        const itemClick = (): void => {
            router.push('/home/article')
        }
        return{
            typeList,
            List,
            itemClick,
            sortTypeClick
        }
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";
.sort {
    @include con-body;
    min-height: 88%;
    //display: flex;
    //justify-content: flex-end;
    .left{
        display: flex;
        position: fixed;
        flex-direction: column;
        color: #707276;
        margin-left: 2vw;
        .sort-item{
            margin: 2vh 2vh;
            span{
                cursor: pointer;
                font-weight: bold;
                font-size: 18px;
            }
            &:hover{
                color: #409EFD;
            }
        }
    }
    .right{
        margin-left: 12vw;
        .item{
            padding-bottom: 2vh;
            .card{
                background: rgba(255,255,255,0.2);
                box-shadow: 0 0 12px #ccc;
                border: 0;
            }
        }
    }
    .sort-active{
        color: #409EFD;
    }
}
</style>
