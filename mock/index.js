const fs = require('fs')
const path = require('path')
const express = require('express')

/*
通过递归函数,遍历所有mock文件夹下的文件,汇总所有的路径和响应,形成一个如下形式的对象mockData
{
  'GET /api/user/:id': { id: 1, name: 'aioverg' },
  'POST /api/login': (req, res) => {res.json({ id: 1, name: 'aioverg' })}),
}
key值为请求方法和路径,value值是json数据或者响应回调函数
*/
let mockData = {}
function readMockDir(dir) {
  let dirs = fs.readdirSync(dir)

  dirs.forEach(file => {
    if(file === 'date'){return}
    let _path = path.join(dir, file)
    let isDirectory = fs.statSync(_path).isDirectory()
    if (isDirectory) {
      readMockDir(_path)
    }
    else {
      Object.assign(mockData, require(_path))
    }
  })
}
readMockDir(path.join(__dirname, './module/'))

/*
导出一个如下形式的函数
function(app){ 
  app.get('path',(req,res)=>{})
  app.get('path',(req,res)=>{})
  ...
} 
*/
module.exports = function (app) {
  // 将请求中的json解析出来，这样才能在 req.body 中拿到参数
  app.use(express.json())

  //遍历上一步代码中生产的mockData对象,将每一个键值对转换成app.get('path',(req,res)=>{})这样的形式
  for (let key in mockData) {
    //解析请求方法和路径
    let _key = key.replace(/(^\s*)|(\s*$)/g, '')
    let _method = 'get'
    let _url = _key.replace(/^(get|post|put|delete)\s*/i, function (rs, $1) {
      _method = $1.toLowerCase();
      return ''
    })

    //解析响应是json形式,还是回调形式
    if (typeof mockData[key] != 'function') { //如果是json形式,就拼装一个(req,res)=>{}回调函数,并设置一个随机的延迟时间,来模拟网络延迟
      app[_method](_url, (req, res) => {
        let timeout = (Math.random() * 2800) + 200
        //console.log(timeout);
        setTimeout(() => {
          res.json(mockData[key])
        }, timeout);

      })
    } else { //如果回调形式
      app[_method](_url, mockData[key])
    }
  }
}