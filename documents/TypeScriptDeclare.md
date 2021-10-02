# 安装包的 `TypeScript` 声明文件

当安装包的包没有 `TypeScript` 声明时，引入会报错，这时需要手动写入声明文件。以引入 `react-router-dom` 为例。

1. 在根目录下新建 `types` 文件夹。

2. 在文件夹新建 `react-router-dom.d.ts` 文件，文件内容如下：

   ```typescript
   declare module 'react-router-dom'
   ```

3. 在 `tsconfig.json` 文件的 `include` 中加入 `types` 文件夹，如下：

   ```json
   "include": [
       "types"
   ]
   ```

4. 这是就可以正常使用 `react-router-dom` 了。