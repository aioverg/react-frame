import React, { useEffect } from "react"
import { withRouter } from 'react-router-dom'
import {getCookie} from '@src/utils/cookie'

function Home({...props}){
  useEffect(() => { // 如果没有登录, 去到登录页
    if(!getCookie('token')){
      props.history.push('/login')
    }
  })
  return (
    <>
    <div>首页</div>
    </>
  )
}

export default withRouter(Home)