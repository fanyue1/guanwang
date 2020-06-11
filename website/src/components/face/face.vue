<template>
  <div>
      <!-- face页面 -->

        <!-- 人脸识别banner -->
        <div class="face-banner">
            <p class="ban-tit1">人脸识别</p>
            <p class="ban-tit2">人脸识别，是基于人的脸部特征信息进行身份识别的一种生物识别技术。
                用摄像 机或摄像头采集含有人脸的图像或视频流，进而对检测到的人</p>
            <button class="ban-tit3">联系我们</button>
        </div>

        <!-- 功能介绍 -->
        <div class="face-content">
            功能介绍
        </div>
        <div class="face-border"></div>
        <!-- 人脸对比---人脸跟踪 -->
        <!-- <div class="face-nav">
            <ul class="face-navul">
                <li @click="flag='contrast'" v-on:click="addclass(1,$event)">人脸比对</li>
                <li @click="flag='exam'" v-on:click="addclass(2,$event)">活体检测</li>
                <li @click="flag='seek'" v-on:click="addclass(3,$event)">人脸搜索</li>
                <li @click="flag='key'" v-on:click="addclass(4,$event)">关键点检测</li>
                <li @click="flag='cluster'" v-on:click="addclass(5,$event)">人脸聚类</li>
                <li @click="flag='tail'" v-on:click="addclass(6,$event)">人脸跟踪</li>
            </ul>

            <div class="insert">
                <component :is="flag"></component>
            </div>
        </div> -->
        
        <!-- --------------------------------------------------------------- -->
        <el-tabs type="border-card">
            <el-tab-pane label="人脸比对">
                <!-- 活体检测描述 -->
                <div class="contrast">
                    <!-- 人脸检测文字描述 -->
                    <div class="contrast-left">
                        <div>人脸检测</div>
                        <div></div>
                        <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                            其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                            于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                    </div>
                    <!-- 图片 -->
                    <div class="contrast-right"></div>
                </div>
                <!-- <div class="contrast-left">
                    <div>人脸比对</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <div class="contrast-right"></div> -->
            </el-tab-pane>
            <el-tab-pane label="活体检测">
                <!-- 活体检测描述 -->
                <div class="contrast-left">
                    <div>活体检测</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <!-- 图片 -->
                <div class="contrast-right"></div>
            </el-tab-pane>
            <el-tab-pane label="人脸搜索">
                <!-- 活体检测描述 -->
                <div class="contrast-left">
                    <div>人脸搜索</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <!-- 图片 -->
                <div class="contrast-right"></div>
            </el-tab-pane>
            <el-tab-pane label="关键点检测">
                <!-- 活体检测描述 -->
                <div class="contrast-left">
                    <div>关键点检测</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <!-- 图片 -->
                <div class="contrast-right"></div>
            </el-tab-pane>
            <el-tab-pane label="人脸聚类">
                <!-- 活体检测描述 -->
                <div class="contrast-left">
                    <div>人脸聚类</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <!-- 图片 -->
                <div class="contrast-right"></div>
            </el-tab-pane>
            <el-tab-pane label="人脸跟踪">
                <!-- 活体检测描述 -->
                <div class="contrast-left">
                    <div>人脸跟踪</div>
                    <div></div>
                    <div>人脸检测是指对于任意一幅给定的图像，采用一定的策略对其进行搜索以确定
                        其中 是否含有人脸，如果是则返回一脸的位置、大小和姿态。人脸检测是指对
                        于任意 一幅给定的图像，采用一定的策略对其进行搜索以确定其中</div>
                </div>
                <!-- 图片 -->
                <div class="contrast-right"></div>
            </el-tab-pane>
        </el-tabs>
        <!-- ---------------------------------------------------------------- -->
        <!-- 技术特色 -->
        <div class="face-art">
            <div class="face-content">
               技术特色
            </div>
            <div class="face-border"></div>
            <div class="face-artcon">
                <div class="art-main face-seat">
                   <div><img src="../../../static/image/1.png" alt=""></div>
                   <div>不限人脸数量</div> 
                   <div>数量不限人脸数量不 量不限人脸数量不限人脸数量不限人</div>
                </div>

                <div class="art-main">
                   <div><img src="../../../static/image/1.png" alt=""></div>
                   <div>不限人脸数量</div> 
                   <div>数量不限人脸数量不 量不限人脸数量不限人脸数量不限人</div>
                </div>

                <div class="art-main">
                   <div><img src="../../../static/image/1.png" alt=""></div>
                   <div>不限人脸数量</div> 
                   <div>数量不限人脸数量不 量不限人脸数量不限人脸数量不限人</div>
                </div>

                <div class="art-main">
                   <div><img src="../../../static/image/1.png" alt=""></div>
                   <div>不限人脸数量</div> 
                   <div>数量不限人脸数量不 量不限人脸数量不限人脸数量不限人</div>
                </div>
            </div>
        </div>

        <!-- 应用场景 -->
        <div class="face-content">
            应用场景
        </div>
        <div class="face-border"></div>
        <div class="use">
            <figure>
                <img src="../../../static/image/yingyong1.png" alt="">
                <figcaption>街区人流统计</figcaption>
            </figure>

            <figure>
                <img src="../../../static/image/yingyong2.png" alt="">
                <figcaption>商场客流分析</figcaption>
            </figure>

            <figure>
                <img src="../../../static/image/adhibition1.png" alt="">
                <figcaption>群体照人脸标记</figcaption>
            </figure>
        </div>
  </div>
</template>

<script>

// import contrast from '@/components/face/contrast.vue'
// import exam from '@/components/face/exam.vue'
// import seek from '@/components/face/seek.vue'
// import key from '@/components/face/key.vue'
// import cluster from '@/components/face/cluster.vue'
// import tail from '@/components/face/tail.vue'

export default {
    data(){
        return{
            // flag:"contrast",
            
        }
        
    },
    components:{
        // contrast,
        // exam,
        // seek,
        // key,
        // cluster,
        // tail,
        
    },
}
</script>

<style>
.face-banner{
    width: 100%;
    height:422px;
    box-sizing: border-box;
    background: url('../../../static/image/bg1_02.jpg');
    border: dashed 1px gray;
}
/* 人脸识别 */
.ban-tit1{
    font-size:36px;
    color:rgba(255,255,255,1);
    margin-top: 94px;
    margin-left: 19%;
}
.ban-tit2{
    font-size:16px;
    width:560px;
    line-height: 25px;
    color:rgba(255,255,255,1); 
    margin-top: 32px;
    margin-left: 19%;
}
.ban-tit3{
    width:150px;
    line-height: 50px;
    color:#D2ECFF;
    background:#2790EA;
    text-align: center;
    border: none;
    margin-top: 30px;
    margin-left: 19%;
    border-radius:5px 5px 5px 5px;
}
/* 功能介绍 */
.face-content{
    width:100%;
    font-size:36px;
    color:#41484E;
    text-align: center;
    padding-top:60px;
}
.face-border{
    width: 44px;
    border-top: solid 3px #2790EA;
    margin: 0 auto;
    margin-top: 16px;
}
/* .face-nav{
    width: 100%;
    box-sizing: border-box;
}
.face-navul{
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    display: flex;
}
.face-navul li{
    width:150px ;
    height:55px ;
    text-align: center;
    line-height: 55px;
    font-size:18px;
    color:#6F7076;
} */
/* .face-navul li:hover{
    background:#2790EA;
    border-radius:5px 5px 5px 5px;
    color: #ffffff;
    cursor: pointer;
} */
/* .a{
    background:#2790EA;
    border-radius:5px 5px 5px 5px;
    color: #ffffff;
    cursor: pointer;
}
.face-navul li:first-child{
    margin-left: 462px;
    
} */
/* 技术特色 */
.face-art{
    width: 100%;
    box-sizing: border-box;
    background: #E9F2FC;
    margin-top: 66px;
}
.face-artcon{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    margin-top: 65px;
    padding: 0px 20% 70px 20%;
}
.art-main{
    width: 300px;
    height: 300px;
    box-sizing: border-box;
}
.art-main div:nth-child(1){
    width: 65px;
    height:65px;
    margin: 0px auto;
    margin-top: 52px;
    box-sizing: border-box;
}
.art-main div:nth-child(1) img{
    width: 100%;
}
.art-main div:nth-child(2){
    color: #73747B;
    font-size: 18px;
    text-align: center;
    margin-top: 27px;
    box-sizing: border-box;
}
.art-main div:nth-child(3){
    width: 224px;
    height: 39px;
    color: #9A9B9E;
    font-size: 14px;
    margin: 0px auto;
    text-align: center;
    margin-top: 27px;
    box-sizing: border-box;
}
.art-main:hover{
    background: #ffffff;
    box-shadow: 0px 0px 6px #5394CF;
}
/* 应用场景 */
.use{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin-top: 37px;
    padding: 0px 5%;
    justify-content: space-around;
}
.use figure{
    width: 400px;
    height:337px;
}
.use figure img{
    width: 400px;
    height: 290px;
}
.use figcaption{
    text-align: center;
    padding-top: 15px;
}
/* --------------------------------------------------------------- */
.el-tabs__nav-scroll{
    background: white;
} 
.el-tabs--border-card{
    border: none;
    box-shadow:none;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    background:#2790EA;
    border-radius:5px 5px 5px 5px;
    color: #ffffff;
    cursor: pointer;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
    margin-top: 65px;
}
.el-tabs__nav{
    width: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
}
.el-tabs__item{
    font-size: 16px;
    width: 120px;
    height: 52px;
    line-height: 52px;
    text-align: center;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    border: 1px;

}
/* 内容样式 */
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
    margin-top: 53px;
}
.contrast-left{
    width: 650px;
    height:340px;
    left: 357px;
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 0px 6px #5394CF;
    top: 118px;
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