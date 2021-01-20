<template>
    <div class="tag-card">
        <div class="tag-content">
            <div class="title">
                <i :class="['iconfont', tagData.data.class]"
                   :style="{'font-size': '22px','color': tagData.data.color,'margin-top': '4px','margin-right': '10px'}"></i>
                <h4>{{tagData.data.label}}</h4>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

interface TagTitle {
    label: string;
    color: string;
    class: string;
}
interface TagInfo {
    tagList: TagTitle[];
    data: TagTitle;
}

export default defineComponent({
    name: "tag-card",
    props: {
        tagType: {
            type: String,
            defalut: '0'
        }
    },
    setup(props) {
        const tagData: TagInfo = reactive({
            tagList:  [
                {label: '我的名片', color: '#42b983', class: 'icon-Id'},
                {label: '最热文章', color: '#E13455', class: 'icon-zuire'},
                {label: '标签', color: '#437DFF', class: 'icon-biaoqian'},
            ],
            data: {label: '', class: '', color: ''}

        })
        if (props.tagType) {
            tagData.data.class = tagData.tagList[Number(props.tagType)].class
            tagData.data.color = tagData.tagList[Number(props.tagType)].color
            tagData.data.label = tagData.tagList[Number(props.tagType)].label
        }
        console.log(tagData.data)
        return {
            tagData
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
    background: rgba(255, 255, 255, 0.8);
    margin-bottom: 2vh;

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
