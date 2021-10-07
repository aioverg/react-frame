/**
 * 环形图
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { PieArcDatum } from 'd3-shape' // yarn add d3-shape
import { Types } from './types'

interface D3DonutChartProps {
}
const data = [{ name: 'Yes', value: 80 }, { name: 'No', value: 20 },]
const color = ['#068606', '#C1C0C0']
const D3DonutChart = (props: D3DonutChartProps) => {
  const refSvg = useRef(null)
  const draw = () => {
    const svg = d3.select(refSvg.current).style('width', 600).style('height', 600).append('g').attr('transform', `translate(300,300)`)

    const donut = d3
      .pie<Types.Data>()
      .sort(null)
      .value((record) => record.value)
    const path = d3.arc<PieArcDatum<Types.Data>>().innerRadius(50).outerRadius(200)

    const donutData = donut(data)

    const arch = svg
      .selectAll('.arc')
      .data(donutData)
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('fill', (d, i) => {
        return color[i] as string
      })

    arch.append('path').attr('d', path)
  }
  useEffect(() => {
    if (refSvg) {
      draw()
    }
  })

  return <svg ref={refSvg} />
}

export default D3DonutChart
