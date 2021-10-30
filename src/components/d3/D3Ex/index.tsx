/**
 * 动态更新
 */
import React, { useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import { useState } from 'react'


const ContentBox = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   background: #FFFFFF;
   padding: 16px;
 `

interface D3ExProps {

}

interface ddProps {
}

function Dd(props: ddProps){
  const [render, setRender] = useState(0)
  const noRender = useMemo(() => {
    return {
      title: 0
    }
  }, [])
  // const noRender = useMemo(fx, [])
  const onClick1 = () => {
    setRender(render + 1)
    noRender.title += 1
    console.log('onClick1', noRender)
  }
  const onClick2 = () => {
    console.log('onClick2', noRender)
  }
  const onClick3 = () => {
    noRender.title += 1
  }
  return (
    <>
    <button onClick={onClick1}>点击{render}</button>
    <button onClick={onClick2}>点击{noRender.title}</button>
    <button onClick={onClick3}>之间修改</button>
    </>
  )
}

function D3Ex(props: D3ExProps) {
  const svgRef = useRef(null)
  const divRef = useRef(null)
  // const alphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ".split("")
  const alphabet = "ABCD".split("")
  const data = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '王五', age: 22 }
  ]

  const init = () => {
    const x = d3.scaleLinear()
    .domain([0, 9])
    .range([18, 360])
    d3.select(svgRef.current)
    .append('g')
    .call(d3.axisBottom(x))
  }


  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgRef])

  const enter = () => {
    const color = ['red', 'black', 'yellow', 'blue']
    let index = 0
    let timer:any = null
    const div = d3.select(divRef.current)
    timer = d3.interval(
      () => {
        div.style('background', color[index])
        index += 1
        console.log(99999999999)
        if(index === 4 ){
          timer.stop()
        }
      }, 1000)
  }

  return (
    <ContentBox>
      <button onClick={enter}>enter</button>
      <svg ref={svgRef}></svg>
      <div ref={divRef} style={{width: '100px', height: '100px'}}>
      <Dd />
      <Dd />
      </div>
    </ContentBox>
  )
}

export default D3Ex