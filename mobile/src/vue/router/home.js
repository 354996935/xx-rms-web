import asyncLoader from '@/core/async-loader'
let Tabbar = () => import('@/components/Tabbar/')
let router = [
  {
    path: '/',
    name: 'home',
    components: {
      default: asyncLoader('home/index'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true,
      needLogin: true
    }
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]
export default router