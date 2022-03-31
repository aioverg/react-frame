import React from 'react'
const options = [
  {
    name: '原生API示例2D',
    key: 'Protogenesis2D',
    component: React.lazy(() => import('@src/components/webgl/Protogenesis2D')),
  },
]

export default options