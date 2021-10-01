# VScode 中进行debugger调试配置

说明：

1. 在项目根目录中新建 `.vscode` 文件夹，并在文件夹中创建  `launch.json` 文件，文件内容如下：

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Chrome",
         "type": "chrome",
         "request": "launch",
         "url": "http://localhost:3000",
         "webRoot": "${workspaceFolder}/src",
         "sourceMapPathOverrides": {
           "webpack:///src/*": "${webRoot}/*"
         }
       }
     ]
   }
   ```

2. 重新启动项目。

3. 在需要调试的代码行处打 `断点` 。

4. 按 `F5` 或 点击侧边栏的 `运行和调试` 启动调试。