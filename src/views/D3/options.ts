import D3AnimatedTransitions from '@src/views/components/d3/D3AnimatedTransitions'
import D3NestdSelections from '@src/views/components/d3/D3NestdSelections'
import D3Update from '@src/views/components/d3/D3Update'
const options = [
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
]

export default options