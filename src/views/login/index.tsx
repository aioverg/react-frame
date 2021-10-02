import React from "react"
import axios from 'axios';

function Login(){
  const login = () => {
    axios({
      method: 'post',
      url: '/api/login',
      data: { username: 'aioverg', password: 123456 }
    }).then(function (response) {
    }).catch(error => console.log('error', error))
  }
  return (
    <div onClick={login}>登录</div>
  )
}

export default Login