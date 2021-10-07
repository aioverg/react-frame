/**
 * 折线图
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface D3LineChartProps {

}

function D3LineChart(props: D3LineChartProps) {
  const width = 500
  const height = 500
  const refSvg = useRef(null)
  const draw = () => {
    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(50,50)`)
    d3.dsv(',', '/data/d3_line.csv', (d) => {
      const res = (d as unknown) as any
      const date = d3.timeParse('%Y-%m-%d')(res.date)
      return {
        date,
        value: res.value,
      }
    }).then((data: Array<any>) => {
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, (d:any) => {
            return d.date
          }) as [any, any]
        )
        .range([0, width])

      svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return Math.max(...data.map((dt:any) => ((dt as unknown) as {
              date: string
              value: number
            }).value), 0)
          }),
        ] as number[])
        .range([height, 0])
      svg.append('g').call(d3.axisLeft(y))

      // // Add the line
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 1.6)
        .attr(
          'd',
          d3
            .line()
            .x((d) => {
              return x(((d as unknown) as { date: number }).date)
            })
            .y((d) => {
              return y(((d as unknown) as {
                date: string
                value: number
              }).value)
            })
        )
    })
  }

  useEffect(() => {
    if(refSvg){
      draw()
    }
  })
  return (
    <svg ref={refSvg} />
  )
}

export default D3LineChart