import React, { useState } from "react"
import styled from 'styled-components'
import options from "./options";


const D3Css = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .left {
    width: 150px;
    background: #FFFFFF;
    padding: 5px 15px 0 15px;
    & > div {
      cursor: pointer;
      margin-bottom: 8px;
      
    }
  }
  .right {
    flex: 1;
  }
`
interface D3Props {
}
function D3(props: D3Props) {
  const [curName, setCurName] = useState('D3AnimatedTransitions')
  return (
    <D3Css>
      <div className='left'>
        {options.map((item: any) => {
          return (
            <div
            key={item.key}
            onClick={() => setCurName(item.key)}
            style={{color: curName === item.key ? '#597ef7' : ''}}
            >{item.name}</div>
          )
        })}
      </div>
      <div className='right'>
        {options.map((item: any) => {
          return (curName === item.key ? <item.component key={item.key} /> : null)
        })}
      </div>
    </D3Css>
  )
}

export default D3