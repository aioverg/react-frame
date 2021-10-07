/**
 * 饼图
 */

 import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { PieArcDatum } from 'd3-shape' // yarn add d3-shape

interface D3PieChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
}


const D3PieChart = (props: D3PieChartProps) => {
  const width = 500
  const height = 500
  const refSvg = useRef(null)

  const draw = () => {
    const radius = Math.min(width, height) / 2

    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(300,300)`)

    d3.dsv(',', '/data/d3_pie.csv', (d) => {
      const res = (d as unknown) as {
        name: string
        value: number
      }
      return {
        name: res.name,
        value: res.value,
      }
    }).then((data) => {
      const color = d3
        .scaleOrdinal()
        .domain(
          (d3.extent(data, (d) => {
            return d.name
          }) as unknown) as string
        )
        .range(d3.schemeCategory10)

      const pie = d3
        .pie<{
          name: string
          value: number
        }>()
        .sort(null)
        .value((record) => record.value)

      const path = d3.arc<PieArcDatum<{
        name: string
        value: number
      }>>().innerRadius(0).outerRadius(radius)

      const pieData = pie(data)

      const arch = svg
        .selectAll('.arc')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('fill', (d) => {
          return color(d.data.name) as string
        })

      arch.append('path').attr('d', path)
    })
  }

  useEffect(() => {
    if(refSvg){
      draw()
    }
  })

  return <svg ref={refSvg} />
}

export default D3PieChart
