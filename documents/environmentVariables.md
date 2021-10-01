# 环境变量

## 定义临时环境变量

1.  在 `Windows(cmd.exe)` 中运行服务器时定义临时环境变量 `REACT_APP_NOT_SECRET_CODE=123456` 命令：

   ```
   set "REACT_APP_NOT_SECRET_CODE=123456" && npm start
   ```

2. 在 `Windows(Powershell)` 中运行服务器时定义临时环境变量 `REACT_APP_NOT_SECRET_CODE=123456` 命令：

   ```
   ($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
   ```

3. 在 `Linux`、` macOS (Bash)` 中运行服务器时定义临时环境变量 `REACT_APP_NOT_SECRET_CODE=123456` 命令：

   ```
   REACT_APP_NOT_SECRET_CODE=abcdef npm start
   ```

## 在 `.env` 文件中定义环境变量

1. 在根目录创建一个 `.env` 文件（该文件中的变量会被注入到各个环境的环境变量中去）。

2. 在 `.env`  文件中写入变量，变量名必须以 `REACT_APP_` 开头，否则将会被忽略。如：

   ```
   REACT_APP_ALL=ALL
   ```

3. 重新启动服务。

各种 `.env` 文件

1. `.env` ：变量会被注入到各个环境的环境变量中去，变量名必须以 `REACT_APP_` 开头，否则将会被忽略。
2. `.env.development` 、`.env.test` 、`.env.production`：变量会被注入到 `development` 、`test` 、`production` 环境中。
3. `.env.local` ：变量会注入到除了 `test` 环境外的所有其他环境中。
4. `.env.development.local` 、`.env.test.local` 、 `.env.production.local`：变量会被注入到 `development` 、`test` 、`production` 环境中，当重名时会覆盖原始变量。

注意，文件的优先级从上到下一次递增，即当变量重复时，优先级高的会覆盖优先级低的。

## 使用环境变量

1. 在 `src` 文件夹中 `process.env` 指向当前的环境变量集合。如：

   ```react
   <h1>{process.env.NODE_ENV}</h1>
   ```

2. 在 `public` 文件夹中使用 `%变量名%` 来使用环境变量。如：

   ```
   <h1>%REACT_APP_WEBSITE_NAME%</h1>
   ```