/**
 * 散点图
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Types } from './types'

interface D3ScatterChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
}

const D3ScatterChart = (props: D3ScatterChartProps) => {
  const width = 500
  const height = 500
  const refSvg = useRef(null)

  const draw = () => {
    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(50,50)`)

    d3.dsv(',', '/data/d3_scatter.csv', (d) => {
      return {
        price: d.price,
        carat: d.carat,
      }
    }).then((data) => {

      const maxPrice = Math.max(...data.map((dt) => (dt as unknown as Types.Data).price), 0)
      const maxCarat = Math.max(...data.map((dt) => (dt as unknown as Types.Data).carat), 0)

      const x = d3.scaleLinear().domain([0, maxPrice]).range([0, width])
      svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

      const y = d3.scaleLinear().domain([0, maxCarat]).range([height, 0])
      svg.append('g').call(d3.axisLeft(y))

      svg
        .append('g')
        .selectAll('dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => {
          return x(((d as unknown) as Types.Data).price)
        })
        .attr('cy', (d) => {
          return y(((d as unknown) as Types.Data).carat)
        })
        .attr('r', 0.8)
        .style('fill', props.fill)
    })
  }

  useEffect(() => {
    if(refSvg){
      draw()
    }
  })
  return <svg ref={refSvg} />
}


export default D3ScatterChart
