import React from "react"
import styled from 'styled-components'

const ButtonCss = styled.button`

`
interface ButtonProps {
  children?: any,
  onClick: Function,
  style?: object
}
function Button(props: ButtonProps) {
  return <ButtonCss
    onClick={props.onClick}
    style={props.style || {}}
  >{props.children}</ButtonCss>
}

export default Button