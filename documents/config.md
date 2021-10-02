# 配置文件

由于 `create-react-app` 将配置文件封在 `react-scripts` 中了，而使用 `react-scripts eject` 暴露 `webpack` 又是一次性的，这样会导致以后无法跟随 `create-react-app` 的官方升级项目，所以使用插件 `craco` 在不使用 `react-scripts eject` 的情况下对 `webpack` 进行配置。

1. `npm install @craco/craco --save` 安装插件。

2. 在根目录下创建 `craco.config.js` 文件。

3. 修改 `package.json` 中 `scripts` 对象中的命令，将 `react-scripts XX` 改为 `craco XX`。如

   ```json
   "scripts": {
   -   "start": "react-scripts start",
   +   "start": "craco start",
   -   "build": "react-scripts build",
   +   "build": "craco build"
   -   "test": "react-scripts test",
   +   "test": "craco test"
   }
   ```

4. 在 `craco.config.js` 文件中写入配置就行了。