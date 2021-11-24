import React from 'react'
const router:any = [
  {
    name: '首页',
    path: '/home',
    component: React.lazy(() => import('@src/views/home/Main')),
  },
  {
    name: 'D3',
    path: '/d3',
    component: React.lazy(() => import('@src/views/d3')),
  }
]

export default router