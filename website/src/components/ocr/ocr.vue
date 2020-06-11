<template>
  <div>
      <!-- face页面 -->

        <!-- ocr识别banner -->
        <div class="ocr-banner">
            <p class="ocr-tit1">ocr识别</p>
            <p class="ocr-tit2">OCR文字识别软件，指利用OCR （Optical Character Recognition，光学字符识别）技
                术，将图片、照片上的文字内容，直接转换为可编辑文本的软件。软件可以把图片转换成可以编辑的文字。支
                持JPG、PNG、GIF、BMP、DOC等图片格式。</p>
            <button class="ocr-tit3">联系我们</button>
        </div>

        <!-- 功能介绍 -->
        <div class="face-content">
            功能介绍
        </div>
        <div class="face-border"></div>
        <!-- 身份证识别---定制模板识别 -->
        <!-- <div class="ocr-nav">
            <ul class="ocr-navul">
                <li @click="flag='IDcard'" v-on:click="a($event)">身份证识别</li>
                <li @click="flag='social'" v-on:click="a($event)">社保卡识别</li>
                <li @click="flag='drive'" v-on:click="a($event)">驾驶证识别</li>
                <li @click="flag='steer'" v-on:click="a($event)">行驶证识别</li>
                <li @click="flag='license'" v-on:click="a($event)">车牌号识别</li>
                <li @click="flag='passport'" v-on:click="a($event)">护照识别</li>
                <li @click="flag='bill'" v-on:click="a($event)">票据识别</li>
                <li @click="flag='bank'" v-on:click="a($event)">银行卡识别</li>
                <li @click="flag='word'" v-on:click="a($event)">通用文字识别</li>
                <li @click="flag='board'" v-on:click="a($event)">定制模板识别</li>
            </ul>

            <div class="insert">
                <component :is="flag"></component>
            </div>
        </div> -->
        <!-- ---------------------------------------------------- -->
        <el-tabs type="border-card">
            <el-tab-pane label="身份证识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            识别结果
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="社保卡识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            社保卡识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="驾驶证识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            驾驶证识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="行驶证识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            行驶证识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="车牌号识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                           车牌号识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="护照识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            护照识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="票据识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            票据识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="银行卡识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            银行卡识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="通用文字识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            通用文字识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="定制模板识别">
                <div class="IDcard">
                    <!-- 身份证 -->
                    <div class="IDcard-left">
                        <div class="IDcard-left-image">
                            <img src="../../../static/image/idcard.png" alt="">
                        </div>
                    </div>
                    <!-- 内容描述 -->
                    <div class="IDcard-rigth">
                        <div class="IDcard-title">
                            定制模板识别
                        </div>
                        <div class="IDcard-content">
                            <p>姓名：代用名</p>
                            <p>性别：男</p>
                            <p>名族：汉</p>
                            <p>出生：1988年8月28日</p>
                            <p>住址：福建省龙岩市东城东宝路336号</p>
                            <p>公民身份证号码：350802198808285516</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <!------------------------------------------------------- -->
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
// import IDcard from '@/components/ocr/IDcard.vue'
// import social from '@/components/ocr/social.vue'
// import drive from '@/components/ocr/drive.vue'
// import steer from '@/components/ocr/steer.vue'
// import license from '@/components/ocr/license.vue'
// import passport from '@/components/ocr/passport.vue'
// import bill from '@/components/ocr/bill.vue'
// import bank from '@/components/ocr/bank.vue'
// import word from '@/components/ocr/word.vue'
// import board from '@/components/ocr/board.vue'
export default {
    data(){
        return{
            // flag:"IDcard",
        }
        
    },
    components:{
        //    IDcard,
        //    social,
        //    drive,
        //    steer,
        //    license,
        //    passport,
        //    bill,
        //    bank,
        //    word,
        //    board
    },
    
}
</script>

<style>
.ocr-banner{
    width: 100%;
    height:422px;
    box-sizing: border-box;
    background: url('../../../static/image/bg2_02.jpg');
    border: dashed 1px gray;
}
/* ocr识别 */
.ocr-tit1{
    font-size:36px;
    color:rgba(255,255,255,1);
    margin-top: 77px;
    margin-left: 19%;
}
.ocr-tit2{
    font-size:16px;
    width:680px;
    height: 73px;
    line-height: 25px;
    color:rgba(255,255,255,1); 
    margin-top: 32px;
    margin-left: 19%;
}
.ocr-tit3{
    width:150px;
    line-height: 50px;
    color:#D2ECFF;
    background:#2790EA;
    text-align: center;
    border: none;
    margin-top: 25px;
    margin-left: 19%;
    border-radius:5px 5px 5px 5px;
}
/* 功能介绍及下划线共用人脸识别的功能介绍 */
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
/* ocr-功能切换 */
/* .ocr-nav{
    width: 100%;
    box-sizing: border-box;
}
.ocr-navul{
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    display: flex;
}
.ocr-navul li{
    width:120px ;
    height:52px ;
    text-align: center;
    line-height: 52px;
    font-size:16px;
    color:#6F7076;
}
.ocr-navul li:first-child{
    margin-left: 310px;
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
    padding-bottom: 70px;
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
/* -------------------内容样式------------------------------------- */
.IDcard{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin-top:53px;
}
.IDcard-left{
     width: 660px;
     height: 438px;
     background: #F0F6FD;
     margin-left: 330px;
}
.IDcard-left-image{
     width: 533px;
     height: 345px;
     margin: 46px auto;
     border: dashed 1px gray;
}
.IDcard-rigth{
     width: 541px;
     height: 438px;
     border: solid 1px #E7EBF0;
     box-sizing: border-box;
}
.IDcard-title{
    width: 541px;
    color: #2790EA ;
    font-size: 18px;
    box-sizing: border-box;
    padding: 17px 0px 15px 42px;
    border-bottom: solid 1px  #E7EBF0;
}
.IDcard-content{
    color: #6F7076;
    box-sizing: border-box;
    padding: 34px 0px 0px 42px;
    line-height: 25px;
}
/* ------------------------------------------------------------------- */
/* .ac{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    position: relative;
}
.b{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    position: absolute;
    left: 50%;
    margin-left:-100px;
}
.b p{
    list-style: none;
    padding: 5px 15px;
} */
</style>