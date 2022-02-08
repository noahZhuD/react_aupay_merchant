import Layout from '@/Pages/Layout'

const routers = [
  {
    path: '/',
    redirect: ['/property', '/property/overview'],
  },
  {
    path: '/index/property',
    icon: 'aaaa',
    meta: { title: '资产概览' },
    children: [
      {
        path: '/index/property/overview',
        meta: { title: '资产总览' }
      },
      {
        path: '/index/property/currencyAssets',
        meta: { title: '币种资产列表' }
      }
    ]
  },
  {
    path: '/index/record',
    meta: { title: '记录中心' },
    children: [
      {
        path: '/index/record/bill',
        meta: { title: '账单记录' },
      },
      {
        path: '/index/record/deposit',
        meta: { title: '充值记录' },
      }
    ]
  },
  {
    path: '/index/rate',
    meta: { title: '充提服务费率' },
  }
  
]
// const routers = [
//   {
//     path: '/',
//     component: Layout,
//     redirect: ['/index', '/index/home'],
//     children: [
//       {
//         path: '/index/home',
//         exact: true,
//         component: Home,
//       },
//       {
//         path: '/index/about',
//         exact: true,
//         component: About,
//       }
//     ]
//   }
// ]
export default routers