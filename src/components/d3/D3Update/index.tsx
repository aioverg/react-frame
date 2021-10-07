/**
 * 动态更新
 */
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import { useState } from 'react'

const SvgBox = styled.svg`
text {
  font: bold 48px monospace;
}

.enter {
  fill: green;
}

.update {
  fill: blue;
}
.exit {
  fill: yellow;
}
`

interface D3NestdSelectionsProps {

}


function D3Update (props: D3NestdSelectionsProps) {
  const svgRef = useRef(null)
  const [timer, setTimer] = useState<any>(null)
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")


  const init = () => {
    d3.select(svgRef.current).style('width', 600).style('height', 600).append('g')
  }

  const draw = (data:any) => {
    // 定义一个 750 毫秒的转换
    const t:any = d3.transition()
      .duration(750)

    // 将新数据 data 与旧元素 text 连接在一起, 并为元素绑定 class 属性
    const text = d3.select(svgRef.current).select('g').selectAll('text').data(data, (d:any) => d).attr("class", "update")

    // 将新数据 data 中不存在的旧 text 元素去除
    text.exit()
      .attr("class", "exit")
      .transition(t)
      .attr("y", 200)
      .style("fill-opacity", 1e-6)
      .remove()

    // 更新新数据中的旧元素
    text.attr("class", "update")
      .attr("y", 60)
      .style("fill-opacity", 1)
      .transition(t)
      .attr("x", function (d, i) { return i * 32; });

    // 更新新数据中的新元素
    text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .attr("y", -60)
      .attr("x", function (d, i) { return i * 32; })
      .style("fill-opacity", 1e-6)
      .text((d:any) => d)
      .transition(t)
      .attr("y", 60)
      .style("fill-opacity", 1);
  }

  // 自动
  const auto = () => {
    const id = d3.interval(function () {
      draw(d3.shuffle(alphabet)
        .slice(0, Math.floor(Math.random() * 26))
        .sort());
    }, 800)
    setTimer(id)

  }
  // 手动
  const mach = () => {
    if (timer) {
      timer.stop() // 停止计时器
    }
    draw(d3.shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
  }

  useEffect(() => {
    init();
    mach();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgRef])

  return (
    <>
      <button onClick={mach}>手动</button>
      <button onClick={auto}>循环</button>
      < SvgBox ref={svgRef} ></SvgBox>
    </>
  )
}

export default D3Update