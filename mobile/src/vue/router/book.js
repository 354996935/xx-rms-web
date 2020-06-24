import asyncLoader from '@/core/async-loader'
let router = [
  {
    path: '/book-detail/:id',
    name: 'bookDetail',
    components: {
      default: asyncLoader('book/detail'),
    },
    meta: {
      keepAlive: true,
      needLogin: true
    }
  }
]
export default router