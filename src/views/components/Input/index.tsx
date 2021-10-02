import React, { useState } from "react"
import styled from 'styled-components'

const InputCss = styled.input`

`
interface InputProps {
  defaultValue: number | string,
  onChange?: Function,
  style?: object
  placeholder?: string,
}
function Input(props: InputProps) {
  const [value, setValue] = useState(props.defaultValue)
  const onChange = (e: any) => {
    setValue(e.target.value)
    props.onChange && props.onChange(e)
  }
  return <InputCss
    value={value}
    onChange={onChange}
    style={props.style || {}}
    placeholder={props.placeholder || ''}
  />
}

export default Input