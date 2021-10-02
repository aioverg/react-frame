import React, { useEffect } from "react"
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import {getCookie, delCookie} from '@src/utils/cookie'


const HomeCss = styled.div`
  width: 100%;
  height: 100%;
`
interface HomeProps {
  history: any
}
function Home(props:HomeProps){
   // 如果没有登录, 去到登录页
  useEffect(() => {
    if(!getCookie('token')){
      props.history.push('/login')
    }
  })

  // 退出登录
  const logout = () => {
    delCookie('token')
    props.history.push('/login')
  }
  return (
    <HomeCss>
      <div onClick={logout}>退出登录</div>
    </HomeCss>
  )
}

export default withRouter(Home)