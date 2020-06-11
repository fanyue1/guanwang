<template>
    <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="val in banner" :key="val.id">
                <div>
                    <router-link>
                        <img :src="val.img" alt=""/>
                    </router-link>
                </div>
            <h3>{{val.title}}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="div">
            首页内容
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            banner:[
                {"id":"1","img":"https://i02piccdn.sogoucdn.com/ca4e204d8996e403","title":"图片1"},
                {"id":"2","img":"https://i01piccdn.sogoucdn.com/28eb9f393907cdd2","title":"图片2"},
                {"id":"3","img":"https://i02piccdn.sogoucdn.com/f612cc7c6d42ac03","title":"图片3"},
                {"id":"4","img":"https://img01.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-6fe60afa2548e8e3573a641bc8a1d61d.jpg","title":"图片4"},
                {"id":"5","img":"https://img02.sogoucdn.com/app/a/100520093/30c40e020f63f81f-85679ec6a342f6f1-852857942ff2617a603a1dfe05738c96.jpg","title":"图片5"},
                {"id":"6","img":"https://i03piccdn.sogoucdn.com/6756d55c98e339f0","title":"图片6"},
                {"id":"8","img":"https://i04piccdn.sogoucdn.com/316f63374e825f88","title":"图片8"}
            ]
        }
    }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align:center;
  }
  .el-carousel__item div{
      width: 80%;
      margin: 0 auto;
  }
  .el-carousel__item div img{
      width: 100%;
      height: 300px;
  }
  .el-carousel__item:nth-child(n) {
    background-color: #e6efff;
  }
 .div{
     text-align: center;
     color: red;
 }
</style>