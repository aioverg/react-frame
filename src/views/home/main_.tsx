import React from "react"
import styled from 'styled-components'


const D3Css = styled.div`
  width: 100%;
  height: 100%;
`
interface MainProps {
}
function Main(props:MainProps){
  return (
    <D3Css>
      <div>主页内容荣荣</div>
    </D3Css>
  )
}

export default Main