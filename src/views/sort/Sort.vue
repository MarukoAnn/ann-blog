<template>
    <div class="sort" id="sort">

    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "sort",
    setup(){
        return{}
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mixin";
.sort {
    @include con-body;
    height: 88%;
}
</style>
