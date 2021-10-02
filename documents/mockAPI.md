# 模拟接口

模拟接口可以方便前端接口调试。

1. 在根目新建 `mock` 文件夹。

2. 在 `mock` 文件中新建 `module` 文件夹，该文件夹中存放接口文件。

3. 在 `module` 文件夹中新建 `login.js` 文件，做为登录接口模块，内容如下：

   ```json
   module.exports = {
     'POST /api/login': (req, res) => {
       const { username,password } = req.body;
       if (username === 'aioverg' && password===123456) {
         return res.json({
           status: 'ok',
           code: 0,
           token: "123456",
           data: {id: 1,username: 'aioverg',}
         })
       } else {
         return res.status(403).json({
           status: 'error',
           code: 403
         });
       }
     },
   }
   ```

4. 在 `mock` 文件夹中新建 `index.js` 文件，该文件整合所有的 `module` 中的文件生成汇总的接口，并将接口导出。

5. 在 `craco.config.js` 文件中配置 `devServer`，内容如下：

   ```json
   module.exports = {
     devServer: {
       before: require('./mock/index')
     }
   }
   ```

6. 安装 `axios` 进行接口调试就可以了。