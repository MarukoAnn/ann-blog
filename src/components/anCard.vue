<template>
    <div class="card">
        <div class="title">
           <h1>Django启动mencache等</h1>
        </div>
        <div class="label">
            <span><i style="font-size: 12px;margin-right: 4px" class="iconfont icon-ren"></i>作者 Mr.Yong </span>
            <span> <i style="font-size: 12px;margin-right: 4px" class="iconfont icon-shijian"></i>发表与 2020-10-23 11:17:27</span>
            <span><i style="font-size: 12px;margin-right: 4px"  class="iconfont icon-fenlei"></i> python |</span>
            <span><i style="font-size: 12px;margin-right: 4px"  class="iconfont icon-yuedu"></i>563 |</span>
            <span><i style="font-size: 12px;margin-right: 4px" class="iconfont icon-pinglun"></i>123</span>
        </div>
        <div class="sub">
            在动态网站中,用户所有的请求,服务器都会去数据库中进行相应的增,删,查,改,渲染模板,执行业务逻辑,最后生成用户看到的页面.当一个
        </div>
        <div class="tag">
           <span>Django</span>
           <span>Python</span>
           <span>缓存</span>
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
    box-shadow: 2px 2px 10px #F2F2F2;
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
