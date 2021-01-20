<template>
    <div class="card">
        <div class="title">
           <h1>javascript中this指向探索</h1>
        </div>
        <div class="label">
            <span><i style="font-size: 12px;margin-right: 4px" class="iconfont icon-ren"></i>作者 Moonshine </span>
            <span> <i style="font-size: 12px;margin-right: 4px" class="iconfont icon-shijian"></i>发表与 2021-01-20 20:46:27</span>
            <span><i style="font-size: 12px;margin-right: 4px"  class="iconfont icon-fenlei"></i> javascript |</span>
            <span><i style="font-size: 12px;margin-right: 4px"  class="iconfont icon-yuedu"></i>563 |</span>
            <span><i style="font-size: 12px;margin-right: 4px" class="iconfont icon-pinglun"></i>123</span>
        </div>
        <div class="sub">
           在javascript中，this的指向一直是一个比较模糊的点，每对具体的指向都是模棱两可，不能准确的把握javascript的this的指向，对此，在此文章中做一个说明补充...
        </div>
        <div class="tag">
           <span>javascript</span>
           <span>this</span>
           <span>指向</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "card"
}
</script>

<style scoped lang="scss">
.card{
    width: 38vw;
    padding: 2vh 2vw;
    text-align: left;
    border: 1px solid #EDF0F6;
    box-shadow: 0 0 10px #F2F2F2;
    border-radius: 4px;
    background: rgba(255,255,255,0.9);
    .title {
        padding: 1vh 0 2vh 0;
        color: #707276;
    }
    .label {
        font-size: 12px;
        color: #B4B4B4;
        span {
            display: inline-block;
            margin: 0 4px;
        }
    }
    .sub {
        margin-top: 20px;
        line-height: 3vh;
        font-size: 16px;
        color: #666666;
    }
    .tag {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
            background: #EFF6ED;
            color: #7FCC5A;
            font-size: 12px;
            border: 1px solid #E4F4DC;
            display: inline-block;
            margin-left: 10px;
            padding: 2px 4px;
            border-radius: 4px;
        }
    }
}
</style>
