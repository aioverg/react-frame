/**
 * 动画转场效果
 */
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import { useState } from 'react'

const SvgBox = styled.svg`
  `

const hexadecimal = '0123456789ABCDEF'

// 随机生成颜色
const randomColor = () => {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hexadecimal[d3.randomInt(hexadecimal.length - 1)()]
  }
  return color
}


interface D3AnimatedTransitionsProps {

}

function D3AnimatedTransitions(props: D3AnimatedTransitionsProps) {
  const ref = useRef(null)
  const [timer, setTimer] = useState<any>(null)

  // 初始化
  const init = () => {
    d3.select(ref.current).style('width', 600).style('height', 600)
      .append('g')
      .selectAll('text').data(hexadecimal.split(''))
      .enter()
      .append('text')
      .style('fill', randomColor())
      .style('font-size', 40)
      .style('font-weight', 'bold')
      .attr('y', 200)
      .attr('x', (d, i) => i * 30)
      .text(d => d)
  }
  useEffect(() => {
    init()
  }, [ref])

  // 修改颜色
  const draw = () => {
    d3.select(ref.current).select('g')
      .selectAll('text')
      .style('font-size', d3.randomInt(16, 45)) // 这一行放到 transition() 下面为什么没有生效？
      .transition()
      .style('fill', randomColor)
  }

  // 自动
  const auto = () => {
    const id = d3.interval(draw, 500)
    setTimer(id)
  }

  // 手动
  const mach = () => {
    if (timer) {
      timer.stop() // 停止计时器
    }
    draw()
  }

  return (
    <>
      <button onClick={mach}>手动</button>
      <button onClick={auto}>自动</button>
      <SvgBox ref={ref} ></SvgBox>
    </>
  )
}

export default D3AnimatedTransitions