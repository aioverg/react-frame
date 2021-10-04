/**
 * 嵌套选择
 * select('tbody tr').selectAll("td"))  =>  这时每一个 tr 作为一个分组 (共有4个 tr)，选择的 td 会在4个分组里面
 * select('tbody').selectAll("td"))  =>     这时每一个 tbody 作为一个分组(共有1个 tbody)，选择的 td 会在1个分组里面
 *
 */
import React, { useRef } from 'react'
import * as d3 from 'd3'


function D3NestdSelections () {
  const ref = useRef(null)
  // 一个分组
  const one = () => {
    console.log('一个分组', d3.select(ref.current).select('tbody').selectAll("td"))
  }
  // 四个分组
  const fou = () => {
    console.log('四个分组', d3.select(ref.current).select('tbody tr').selectAll("td"))
  }

  return (
    <>
      <button onClick={one}>一个分组</button>
      <button onClick={fou}>四个分组</button>
      <table ref={ref}>
        <thead>
          <tr><td>  A</td><td>  B</td><td>  C</td><td>  D</td></tr>
        </thead>
        <tbody>
          <tr><td>  0</td><td>  1</td><td>  2</td><td>  3</td></tr>
          <tr><td>  4</td><td>  5</td><td>  6</td><td>  7</td></tr>
          <tr><td>  8</td><td>  9</td><td> 10</td><td> 11</td></tr>
          <tr><td> 12</td><td> 13</td><td> 14</td><td> 15</td></tr>
        </tbody>
      </table>
    </>
  )
}

export default D3NestdSelections