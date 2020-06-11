<template>
    <div class="contrast">
        <!-- 人脸检测文字描述 -->
        <div class="contrast-left">
            <div>人脸搜索</div>
            <div></div>
            <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
        </div>
        <!-- 图片 -->
        <div class="contrast-right"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.contrast{
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
}
.contrast-right{
    width: 660px;
    height:439px;
    background: url(../../../static/image/detection.png);
    background-size: 660px 439px;
    margin-left: 900px;
}
.contrast-left{
    width: 650px;
    height:340px;
    /* border: solid 1px red; */
    left: 357px;
    position: absolute;
    background: #ffffff;
    /* box-shadow: 0px 0px 3px 0px #5394CF inset; */
    box-shadow: 0px 0px 6px #5394CF;
}
.contrast-left div:first-child{
    margin-top: 79px;
    margin-left: 38px;
    font-size: 20px;
    color: #333333;
}
.contrast-left div:nth-child(2){
    width: 44px;
    border-top: solid 3px #2790EA;
    margin-top: 8px;
    margin-left: 38px;
}
.contrast-left div:nth-child(3){
    width: 575px;
    height: 73px;
    margin-top: 24px;
    margin-left: 38px;
    color: #6F7076;
    font-size: 16px;
}
</style>