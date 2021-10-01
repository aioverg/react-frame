# 开发独立组件

开发组件时，不将组件引入一般很难查看组件的状态等，使用 `Storybook ` 或 `Styleguidist` 插件可以在不引入组件的情况对组件进行调试查看。

## 使用 `Storybook ` 

1.  `npx -p @storybook/cli sb init` 安装 `Storybook ` 
2. 具体使用方法可以查看插件的官方文档。

## 使用 `Styleguidist`

1. `npm install --save react-styleguidist` 安装  `Styleguidist`

2. 在 `package.json` 文件中的 `scripts` 对象中增加如下配置：

   ```json
   "scripts": {
     "styleguide": "styleguidist server",
     "styleguide:build": "styleguidist build",
   }
   ```

3. 具体使用方法可以查看插件的官方文档。