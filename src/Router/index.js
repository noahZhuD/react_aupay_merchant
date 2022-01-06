import Login from '@/Pages/Login'
import Layout from '@/Pages/Layout'
import Home from '@/Pages/Home'
import About from '@/Pages/About'
import Error from '@/Pages/404'

const routers = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/layout',
    component: Layout,
    redirect: ['/layout', '/layout/home'],
    children: [
      {
        path: '/layout/home',
        exact: true,
        component: Home,
      },
      {
        path: '/layout/about',
        exact: true,
        component: About,
      }
    ]
  },
  {
    path: '*',
    component: Error
  }
]
export default routers