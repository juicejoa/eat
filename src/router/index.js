import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import About from '@/components/About.vue'
import Params from '@/components/Params.vue'
import Main from '@/components/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login', // url에 나오는 주소
      component: Login // 어떤 컴포넌트로 연결할 건지(위에 임포트한 컴포넌트들 중 하나)
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/params',
      component: Params,
      name: 'Params',
      props: true
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
