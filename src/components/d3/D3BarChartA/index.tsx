/**
 * 柱状图
 */
import React, { useEffect, useMemo, useRef } from 'react'
import * as d3 from 'd3'


interface D3BarChartAProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
}

const D3BarChartA = (props: D3BarChartAProps) => {
  const data = useMemo(() => [
    { label: 'A', num: 0.08167 },
    { label: 'B', num: 0.01492 },
    { label: 'C', num: 0.02782 },
    { label: 'D', num: 0.04253 },
    { label: 'E', num: 0.12702 },
    { label: 'F', num: 0.02288 },
    { label: 'G', num: 0.02015 },
    { label: 'H', num: 0.06094 },
    { label: 'I', num: 0.06966 },
    { label: 'J', num: 0.00153 },
    { label: 'K', num: 0.00772 },
    { label: 'L', num: 0.04025 },
    { label: 'M', num: 0.02406 },
    { label: 'N', num: 0.06749 },
    { label: 'O', num: 0.07507 },
    { label: 'P', num: 0.01929 },
    { label: 'Q', num: 0.00095 },
    { label: 'R', num: 0.05987 },
    { label: 'S', num: 0.06327 },
    { label: 'T', num: 0.09056 },
    { label: 'U', num: 0.02758 },
    { label: 'V', num: 0.00978 },
    { label: 'W', num: 0.02361 },
    { label: 'X', num: 0.00151 },
    { label: 'Y', num: 0.01974 },
    { label: 'Z', num: 0.00074 },
  ], [])
  const width = 500
  const height = 500
  const refSvg = useRef(null)

  const draw = ({
    xDomain = '',
    yDomain = undefined
  }={}) => {
    const X = data.map(item => item.label)
    const Y = data.map(item => item.num)
    if(xDomain === '') xDomain = 'X'
    console.log(9999999, xDomain)
    
    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(50,50)`)
    const x = d3.scaleBand().range([0, width]).padding(0.1)
    const y = d3.scaleLinear().range([height, 0])

    d3.dsv(',', '/data/d3_bar.csv', (d) => {
      return (d as unknown) as {
        framework: string
        value: number
      }
    }).then((data) => {
      // Scale the range of the Data in the domains
      x.domain(
        data.map((d) => {
          return d.framework
        })
      )
      y.domain([
        0,
        d3.max(data, (d) => {
          return Math.max(...data.map((dt) => (dt as {
            framework: string
            value: number
          }).value), 0)
        }),
      ] as number[])

      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('fill', 'green')
        .attr('class', 'bar')
        .attr('x', (d) => {
          return x(d.framework) || 0
        })
        .attr('width', x.bandwidth())
        .attr('y', (d) => {
          return y(d.value)
        })
        .attr('height', (d) => {
          return height - y(d.value)
        })

      // add the x Axis
      svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

      // add the y Axis
      svg.append('g').call(d3.axisLeft(y))
    })
  }
  useEffect(() => {
    if (refSvg) {
      draw()
    }
  })

  return <svg ref={refSvg} />
}


export default D3BarChartA