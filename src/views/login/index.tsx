import React, { useEffect, useState } from "react"
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import { setCookie, getCookie } from '@src/utils/cookie'
import Input from '@src/components/Input'
import Button from "@src/components/Button";

const LoginCss = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(243,248,251,.3);
  
  & > div{
    width: 300px;
    height: 300px;
    /* background: pink; */
    display: flex;
    flex-direction: column;
  }
`

function Login({ ...props }) {
  const [form, setForm] = useState({ username: 'aioverg', password: '123456' })

  // 已登录直接跳转首页
  useEffect(() => {
    if (getCookie('token')) {
      props.history.push('/home')
    }
  })

  // 登陆
  const login = () => {
    axios({
      method: 'post',
      url: '/api/login',
      data: { username: 'aioverg', password: 123456 }
    }).then((res: any) => {
      setCookie('token', res.data.data.token)
      props.history.push('/home')
    })
  }

  // 监听输入
  const onChange = (key: string, e: any) => {
    setForm({ ...form, ...{ [key]: e.target.value } })
  }
  return (
    <LoginCss>
      <div>
        <Input defaultValue={form.username} onChange={(e: any) => onChange('username', e)} placeholder='请输入账号' />
        <Input defaultValue={form.password} onChange={(e: any) => onChange('password', e)} placeholder='请输入密码' style={{margin: '20px 0'}} />
        <Button onClick={login}>登录</Button>
      </div>
    </LoginCss>
  )
}

export default withRouter(Login)