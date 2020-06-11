<template>
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
</template>

<script>
export default {

}
</script>

<style>
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
     margin-left: 359px;
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
</style>