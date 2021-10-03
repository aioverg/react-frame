import React from 'react'
const router:any = [
  {
    name: '首页',
    path: '/home',
    component: React.lazy(() => import('@src/views/Home/Main')),
  },
  {
    name: 'D3',
    path: '/d3',
    component: React.lazy(() => import('@src/views/D3')),
  }
]

export default router