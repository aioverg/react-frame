import React, { useEffect, Suspense } from "react"
import { withRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import { getCookie, delCookie } from '@src/utils/cookie'
import router from "@src/router"


const HomeCss = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    box-shadow: 0 0 5px 0 rgb(44 64 95 / 15%);
    & > div:first-child > span {
      display: inline-block;
      margin: 0 10px;
    }
  }
  .content {
    flex: 1;
    overflow: auto;
    background-color: #f0f2f5;
  }
`
interface HomeProps {
  history: any
}
function Home(props: HomeProps) {
  // 如果没有登录, 去到登录页
  useEffect(() => {
    if (!getCookie('token')) {
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
      <div className='header'>
        <div>
          {router.map((item: any) => {
            return (
              <span key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </span>
            )
          })}
        </div>
        <div onClick={logout} style={{cursor: 'pointer'}}>退出</div>
      </div>
      <div className='content'>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {router.map((item: any) => {
              return (
                <Route path={item.path} key={item.path}>
                  <item.component />
                </Route>
              )
            })}
          </Switch>
        </Suspense>
      </div>
    </HomeCss>
  )
}

export default withRouter(Home)