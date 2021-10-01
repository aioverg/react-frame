# 查看打包的各 `bundle` 文件的大小

查看各打包文件的大小可以有助于分析打包文件的大小，进而对打包文件进行优化。

1. `npm install --save source-map-explorer` 安装 `source-map-explorer` 插件。

2. 在 `package.json` 文件中的 `scripts` 对象中增加如下配置：

   ```json
   "scripts": {
       "analyze": "source-map-explorer 'build/static/js/*.js'"
   }
   ```

3. `npm run build` 构建打包文件。

4. `npm run analyze` 运行 `source-map-explorer` 对打包的文件进行分析。