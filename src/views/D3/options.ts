import D3Ex from '@src/components/d3/D3Ex'

import D3AnimatedTransitions from '@src/components/d3/D3AnimatedTransitions'
import D3NestdSelections from '@src/components/d3/D3NestdSelections'
import D3Update from '@src/components/d3/D3Update'
import D3LineChart from '@src/components/d3/D3LineChart'
import D3AreaChart from '@src/components/d3/D3AreaChart'
import D3BarChart from'@src/components/d3/D3BarChart'
import D3PieChart from '@src/components/d3/D3PieChart'
import D3ScatterChart from '@src/components/d3/D3ScatterChart'
import D3DonutChart from '@src/components/d3/D3DonutChart'
const options = [
  {
    name: '实验页面',
    key: 'D3Ex',
    component: D3Ex,
  },
  {
    name: '动画过渡',
    key: 'D3AnimatedTransitions',
    component: D3AnimatedTransitions,
  },
  {
    name: '选择示例',
    key: 'D3NestdSelections',
    component: D3NestdSelections,
  },
  {
    name: '更新示例',
    key: 'D3Update',
    component: D3Update,
  },
  {
    name: '折线图',
    key: 'D3LineChart',
    component: D3LineChart,
  },
  {
    name: '面积图',
    key: 'D3AreaChart',
    component: D3AreaChart,
  },
  {
    name: '柱形图',
    key: 'D3BarChart',
    component: D3BarChart,
  },
  {
    name: '饼图',
    key: 'D3PieChart',
    component: D3PieChart,
  },
  {
    name: '散点图',
    key: 'D3ScatterChart',
    component: D3ScatterChart,
  },
  {
    name: '环形图',
    key: 'D3DonutChart',
    component: D3DonutChart,
  },
]

export default options