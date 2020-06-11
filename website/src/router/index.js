import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
// 倒入首页组件
import homepage from '@/components/homepage/homepage'
// 导入人脸识别组件
import face from '@/components/face/face'
// 导入ocr识别组件
import ocr from '@/components/ocr/ocr'
// 导入加入惠颐（招聘）
import join from '@/components/join/join'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/main/home"
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path:'/main/home',
          name:'home',
          component:homepage
        },{
          path:'/main/face',
          name:'face',
          component:face
        },{
          path:'/main/ocr',
          name:'ocr',
          component:ocr
        },{
          path:'/main/join',
          name:'join',
          component:join
        }
      ]
    }
  ]
})
