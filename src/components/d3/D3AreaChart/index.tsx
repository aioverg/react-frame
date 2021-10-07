/**
 * 面积图
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface D3AreaChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
}

const D3AreaChart = (props: D3AreaChartProps) => {
  const width = 500
  const height = 500
  const refSvg = useRef(null)

  const draw = () => {
    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(50,50)`)

    d3.dsv(',', '/data/d3_area.csv', (d) => {
      const res = (d as unknown) as any
      const date = d3.timeParse('%Y-%m-%d')(res.date)
      return {
        date,
        value: res.value,
      }
    }).then(function results(data) {
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, (d) => {
            return d.date
          }) as [Date, Date]
        )
        .range([0, width])

      svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return +d.value
          }),
        ] as number[])
        .range([height, 0])
      svg.append('g').call(d3.axisLeft(y))

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'green')
        .attr('stroke', 'black')
        .attr('stroke-width', 1.6)
        .attr(
          'd',
          // @ts-ignore
          d3
            .area()
            .curve(d3.curveLinear)
            .x((d) => {
              return x(((d as unknown) as { date: number }).date)
            })
            .y0(y(0))
            .y1((d) => {
              return y(((d as unknown) as {
                date: string
                value: number
              }).value)
            })
        )
    })
  }

  useEffect(() => {
    if (refSvg) {
      draw()
    }
  })

  return <svg ref={refSvg} />
}



export default D3AreaChart
