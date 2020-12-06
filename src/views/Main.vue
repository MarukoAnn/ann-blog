<template>
    <div class="main">
        <div class="left">
            <div class="item" v-for="(item, index) in List" :key="index">
                <anCard></anCard>
            </div>
        </div>
        <div class="right">
            <tagCard></tagCard>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import anCard from "@/components/anCard.vue";
import tagCard from "@/components/tagCard.vue"
export default defineComponent({
    name: "main",
    setup() {
        const List = ref([
            0,1,2,3,4,5
        ])
        return {
            List
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
    margin-top: 4vh;
    .left {
        .item {
            margin-bottom: 2vh;
        }
    }
}
</style>
