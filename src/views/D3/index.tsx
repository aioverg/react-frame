import React from "react"
import styled from 'styled-components'


const D3Css = styled.div`
  width: 100%;
  height: 100%;
`
interface D3Props {
}
function D3(props:D3Props){
  return (
    <D3Css>
      <div>D3内容</div>
    </D3Css>
  )
}

export default D3