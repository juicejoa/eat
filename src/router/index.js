import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import About from '@/components/About.vue'
import Params from '@/components/Params.vue'
import Main from '@/components/Main.vue'
import NestedComponent from '@/views/NestedComponent.vue'
import Parent from '@/views/ParentComponent.vue'
import Parent2 from '@/views/ParentComponent2.vue'
import Parent3 from '@/views/ParentComponent3.vue'
import Parent4 from '@/views/ParentComponent4.vue'
import Parent5 from '@/views/ParentComponent5.vue'
import KakaoLogin from '@/views/KakaoLogin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login', // url에 나오는 주소
      component: Login // 어떤 컴포넌트로 연결할 건지(위에 임포트한 컴포넌트들 중 하나)
    },
    {
      path: '/kakaologin', // url에 나오는 주소
      component: KakaoLogin // 어떤 컴포넌트로 연결할 건지(위에 임포트한 컴포넌트들 중 하나)
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
      path: '/nested',
      component: NestedComponent
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/parent',
      component: Parent
    },
    {
      path: '/parent2',
      component: Parent2
    },
    {
      path: '/parent3',
      component: Parent3
    },
    {
      path: '/parent4',
      component: Parent4
    },
    {
      path: '/parent5',
      component: Parent5
    }
  ]
})
