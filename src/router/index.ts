import React from 'react'
const router:any = [
  {
    name: '首页',
    path: '/home',
    component: React.lazy(() => import('@src/views/home/main')),
  },
  {
    name: 'D3',
    path: '/d3',
    component: React.lazy(() => import('@src/views/d3')),
  },
  {
    name: 'WebGL',
    path: '/webgl',
    component: React.lazy(() => import('@src/views/webgl')),
  }
]

export default router