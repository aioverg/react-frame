# 配置文件

由于 `create-react-app` 将配置文件封在 `react-scripts` 中了，而使用 `react-scripts eject` 暴露 `webpack` 又是一次性的，这样会导致以后无法跟随 `create-react-app` 的官方升级项目，所以使用插件 `craco` 在不使用 `react-scripts eject` 的情况下对 `webpack` 进行配置。

1. `npm install @craco/craco --save` 安装插件。
2. 在根目录下创建 `craco.config.js` 文件。