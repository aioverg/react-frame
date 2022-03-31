import React from 'react'
const options = [
  {
    name: '实验页面',
    key: 'D3Ex',
    component: React.lazy(() => import('@src/components/d3/D3Ex')),
  },
  {
    name: '动画过渡',
    key: 'D3AnimatedTransitions',
    component: React.lazy(() => import('@src/components/d3/D3AnimatedTransitions')),
  },
  {
    name: '选择示例',
    key: 'D3NestdSelections',
    component: React.lazy(() => import('@src/components/d3/D3NestdSelections')),
  },
  {
    name: '更新示例',
    key: 'D3Update',
    component: React.lazy(() => import('@src/components/d3/D3Update')),
  },
  {
    name: '折线图',
    key: 'D3LineChart',
    component: React.lazy(() => import('@src/components/d3/D3LineChart')),
  },
  {
    name: '面积图',
    key: 'D3AreaChart',
    component: React.lazy(() => import('@src/components/d3/D3AreaChart')),
  },
  {
    name: '柱形图',
    key: 'D3BarChart',
    component: React.lazy(() => import('@src/components/d3/D3BarChart')),
  },
  {
    name: '柱形图1',
    key: 'D3BarChartA',
    component: React.lazy(() => import('@src/components/d3/D3BarChartA')),
  },
  {
    name: '饼图',
    key: 'D3PieChart',
    component: React.lazy(() => import('@src/components/d3/D3PieChart')),
  },
  {
    name: '散点图',
    key: 'D3ScatterChart',
    component: React.lazy(() => import('@src/components/d3/D3ScatterChart')),
  },
  {
    name: '环形图',
    key: 'D3DonutChart',
    component: React.lazy(() => import('@src/components/d3/D3DonutChart')),
  },
]

export default options