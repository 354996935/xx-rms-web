import asyncLoader from '@/core/async-loader'
let Tabbar = () => import('@/components/Tabbar/')
let router = [
  {
    path: '/user',
    name: 'user',
    components: {
      default: asyncLoader('user/user'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true,
      needLogin: true
    }
  }
]
export default router