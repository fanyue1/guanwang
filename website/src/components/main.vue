<template>
    <div>
       <!--北京惠颐科技有限公司---头部-->
       <header>
           <div class="logo-title">

               <!-- 公司logo -->
               <div class="logo">
                    <span class="cp-logo">
                        <img src="../../static/image/logo.png" alt="">
                    </span>
                    <span class="cp-name">惠颐科技</span>
               </div>
               <!-- ------------------------------------------------- -->
               <div class="logo-nav">
                 <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#151E26"
                    text-color="#fff"
                    active-text-color="#3289F4">
                    <el-menu-item index="1" @click="home">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">核心技术</template>
                        <el-menu-item index="2-1" @click="face">人脸识别</el-menu-item>
                        <el-menu-item index="2-2" @click="ocr">OCR识别</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">产品服务</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">新闻中心</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">关于惠颐</template>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                        <el-menu-item index="5-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title" @click="join">加入惠颐</template>
                        <el-menu-item index="6-1" @click="join">招聘</el-menu-item>
                        <el-menu-item index="6-2">选项2</el-menu-item>
                        <el-menu-item index="6-3">选项3</el-menu-item>
                    </el-submenu>
                  </el-menu>
                <!-- -------------------------- -->
                </div>
           </div>
       </header>

        <!-- 加载中间显示内容 -->
        <router-view></router-view>

       <!--北京惠颐科技有限公司---脚部 -->
       <footer>
           <!-- 人脸识别 -->
            <div class="f-face">
                 <p>人脸识别</p>
                <div>
                 <ul>
                       <li>人脸检测</li>
                       <li>活体检测</li>
                       <li>关键点检测</li>
                       <li>人脸跟踪</li>
                 </ul>
                   <ul>
                       <li>人脸对比</li>
                       <li>人脸搜索</li>
                       <li>人脸聚焦</li>
                   </ul>
                </div>
            </div>
            <!-- OCR识别 -->
            
               <div class="f-ocr">
                   <p>OCR识别</p>
                   <div>
                        <ul>
                            <li>身份证识别</li>
                            <li>社办卡识别</li>
                            <li>驾驶证识别</li>
                            <li>行驶证识别</li>
                        </ul>
                        <ul>
                            <li>车牌号识别</li>
                            <li>护照识别</li>
                            <li>票据识别</li>
                            <li>银行卡识别</li>
                        </ul>
                        <ul>
                            <li>通用文字</li>
                            <li>定制模板识别</li>
                        </ul>
                   </div>
               </div>
            
           <!-- 联系我们 -->
           
               <div class="f-phone">
                   <p>联系我们</p>
                   <ul>
                       <li>全国服务热线：62616550</li>
                       <li>在线客服1：492010189</li>
                       <li>在线客服2：1351002199</li>
                   </ul>
               </div>
            
            <!-- 微信公众号 -->
            <div class="f-cate">
               <p>微信公众号</p>
               <div class="f-cated">
                   <img src="../../static/image/code.png" alt="">
               </div>
            </div>
       </footer>
       <div class="footer-title">
           Copyright 2015 北京惠颐科技有限公司 huiyi detection technology company limited
       </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      face(){
          this.$router.push("/main/face")
      },
      ocr(){
          this.$router.push("/main/ocr")
      },
      home(){
          this.$router.push("/main/home")
      },
      join(){
          this.$router.push("/main/join")
      }
    }
}
</script>

<style>
.logo-title{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    background: #151E26;
}
.logo{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-left: 20%;
}
.logo-title span{
    display:inline-block;
}
.cp-logo{
    width: 36px;
    height: 31px;
    margin-top: 16px;
    margin-bottom: 16px;
}
.cp-logo img{
    width: 100%;
}
.cp-name{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 400;
    color: rgb(228, 230,235,1);
    margin-left: 12px;
    
}
.logo-nav{
    margin-left: 25%;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
    border-bottom:none;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom:none;
}
.el-menu--horizontal>.el-menu-item.is-active{
     border-bottom:none;
}
.el-menu.el-menu--horizontal{
    border-bottom:none;
}
/* 脚步排版 */
footer{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 57px 18%;
    background: #151E26;
}
.f-face p{
    font-size: 18px;
    font-size: 18px;
    color: #E9E9E9;
    margin-left: 60px;
}
.f-face div{
    display: flex;
    color: #E9E9E9;
}
.f-face ul,.f-ocr ul,.f-phone ul{
    list-style: none;
}
.f-face ul li,.f-ocr ul li,.f-phone ul li{
    line-height: 32px;
    color:#A8AABA;
    font-size: 14px;
}
.f-ocr p{
    font-size: 18px;
    color: #E9E9E9;
    margin-left: 27%;
}
.f-ocr div{
    display: flex;
    margin-left: 50px;
    color: #E9E9E9;
}
.f-phone p{
    font-size: 18px;
    color: #E9E9E9;
    margin-left: 59%;
}
.f-phone ul{
    margin-left: 153px;
    color: #E9E9E9;
}
.f-cate p{
    font-size: 18px;
    color: #E9E9E9;
    margin-left: 54%;
}
.f-cate .f-cated{
    width: 96px;
    height: 96px;
    margin-left: 112px;
    border:dashed 1px white;
}
.f-cate .f-cated img{
    width: 100%;
}
.footer-title{
    text-align: center;
    color: #A8AABA;
    font-size: 12px;
    padding: 10px 0px;
    background: #151E26;
    border-top: solid 1px #FFFFFF;
} 
</style>