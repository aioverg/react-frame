/**
 * 动态更新
 */
import React, { useRef, useEffect } from 'react'
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


function D3Ex(props: D3ExProps) {
  const svgRef = useRef(null)
  const alphabet = "1234567890".split("")
  const data = [
    {name: '张三', age: 18},
    {name: '李四', age: 20},
    {name: '王五', age: 22}
  ]

  const init = () => {
    
    const x = d3.scaleLinear()
    .domain([0,9])
    .range([18, 360])
    d3.select(svgRef.current).style('width', 600).style('height', 300).append('g')
    .call(d3.axisBottom(x))
    // console.log(313123, x.bandwidth())
  }


  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgRef])

  return (
    <ContentBox>
      <svg ref={svgRef} ></svg>
    </ContentBox>
  )
}

export default D3Ex