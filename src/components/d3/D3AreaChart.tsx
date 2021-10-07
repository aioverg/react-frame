import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface D3AreaChartProps{

}

function D3AreaChart(props: D3AreaChartProps){

  const refSvg = useRef(null)
  const init = () => {
    const svg = d3.select(refSvg.current).style('width', 600).style('height',600)
    d3.dsv(',', '/data/d3_line.csv', (d) => {
      const res = (d as unknown) as any
      
      const date = d3.timeParse('%Y-%m-%d')(res.date)
      console.log(111111111, date)
      return {
        date,
        value: res.value,
      }
    })
  }

  useEffect(init)
  return(
    <svg ref={refSvg} />
  )
}

export default D3AreaChart