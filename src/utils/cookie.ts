/**
 * 获取指定 name 的 cookie 的值
 * @param name  => cookie 的名称
 * @returns
 */
export function getCookie(name: string) {
  const cookies = decodeURIComponent(document.cookie).split(';')
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].trim().substring(0, name.length) === name) {
      return cookies[i].trim().split('=')[1]
    }
  }
  return ''
}

/**
 * 设置 cookie 的值
 * @param name     => cookie 的名称
 * @param value    => cookie 的值
 * @param extime   => cookie 的过期时间, 以分钟为单位
 * @param domain   => cookie 的路径
 */
export function setCookie(name: string, value: any, extime: number = 1440, domain?: string) {
  const nowTime = new Date()
  nowTime.setTime(nowTime.getTime() + (extime * 60 * 1000));
  const expires = "expires=" + nowTime.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/" + (domain ? ";domain=" + domain : "");
}

/**
 * 
 * @param name 删除 cookie
 */
export function delCookie(name: string) {
  setCookie(name, "", -1, "")
}