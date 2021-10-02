# 使用路径别名

使用路径别名可以在导入文件的时候更方便。

1. 在 `craco.config.js` 中配置路径别名，如下：

   ```js
   const path = require('path')
   module.exports = {
     webpack: {
       alias: {
         '@src': path.resolve(__dirname,'./src/'),
       },
     }
   }
   ```

2. 在 `tsconfig.json` 中配置，如下：

   ```json
   {
       "compilerOptions": {
           "baseUrl": "src",
           "paths": {"@/*": ["*"]}
       }
   }
   ```

3. 有的脚手架会重新修改 `tsconfig.json` 文件，这时候需要在根目录下新建一个 `tsconfig.extend.json` 文件，文件内容如下：

   ```json
   {
     "compilerOptions": {
       "baseUrl": "src",
       "paths": {
         "@src/*": ["*"]
       }
     }
   }
   ```

   然后在 `tsconfig.json` 中引入 `tsconfig.extend.json` 文件，如下：

   ```json
   {
     "extends": "./tsconfig.extend.json",
   }
   ```

   