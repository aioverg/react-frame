import React from 'react'
const options = [
  {
    name: '原生API示例2D',
    key: 'Protogenesis2D',
    component: React.lazy(() => import('@src/components/webgl/Protogenesis2D')),
  },
  {
    name: '原生API示例3D',
    key: 'Protogenesis3D',
    component: React.lazy(() => import('@src/components/webgl/Protogenesis3D')),
  },
  {
    name: '原生API示例纹理',
    key: 'ProtogenesisTextures',
    component: React.lazy(() => import('@src/components/webgl/ProtogenesisTextures')),
  },
]

export default options