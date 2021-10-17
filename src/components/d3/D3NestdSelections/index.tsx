/**
 * 嵌套选择
 * select('tbody tr').selectAll("td"))  =>  这时每一个 tr 作为一个分组 (共有4个 tr)，选择的 td 会在4个分组里面
 * select('tbody').selectAll("td"))  =>     这时每一个 tbody 作为一个分组(共有1个 tbody)，选择的 td 会在1个分组里面
 *
 */
import React, { useRef } from 'react'
import * as d3 from 'd3'


function D3NestdSelections() {
  const ref = useRef(null)
  // 一个分组
  const one = () => {
    console.log('一个分组', d3.select(ref.current).select('tbody').selectAll("td"))
  }
  // 四个分组
  const fou = () => {
    console.log('四个分组', d3.select(ref.current).select('tbody').selectAll('tr').selectAll("td"))
  }
  // 一个分组
  const sixteen = () => {
    console.log('十六个分组', d3.select(ref.current).select('tbody').selectAll('tr').selectAll("td").selectAll('span'))
  }

  return (
    <>
      <button onClick={one}>一个分组</button>
      <button onClick={fou}>四个分组</button>
      <button onClick={sixteen}>十六个分组</button>
      <table ref={ref}>
        <thead>
          <tr>
            <th><span>A</span></th>
            <th><span>B</span></th>
            <th><span>C</span></th>
            <th><span>D</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>11</span></td>
            <td><span>12</span></td>
            <td><span>13</span></td>
            <td><span>14</span></td>
          </tr>
          <tr>
            <td><span>21</span></td>
            <td><span>22</span></td>
            <td><span>23</span></td>
            <td><span>24</span></td>
          </tr>
          <tr>
            <td><span>31</span></td>
            <td><span>32</span></td>
            <td><span>33</span></td>
            <td><span>34</span></td>
          </tr>
          <tr>
            <td><span>41</span></td>
            <td><span>42</span></td>
            <td><span>43</span></td>
            <td><span>44</span></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default D3NestdSelections