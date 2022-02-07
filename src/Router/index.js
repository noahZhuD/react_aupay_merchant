import Layout from '@/Pages/Layout'
import Home from '@/Pages/Home'
import About from '@/Pages/About'
import Error from '@/Pages/404'

const routers = [
  {
    path: '/index',
    component: Layout,
    redirect: ['/index', '/index/home'],
    children: [
      {
        path: '/index/home',
        exact: true,
        component: Home,
      },
      {
        path: '/index/about',
        exact: true,
        component: About,
      }
    ]
  },
  // {
  //   path: '*',
  //   component: Error
  // }
]
export default routers