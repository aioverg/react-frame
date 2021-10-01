# ESLint 配置

1. 在 `package.json` 中的 `eslintConfig` 中增加 `rules` 对象，在 `rules` 对象中配置需要新增的规则。

2. 当使用 `TypeScript` 时，可以增加 `overrides` 对象，在 `overrides` 中配置只对 `ts` 文件生效的规则。

3. 实例：

   ```json
   "eslintConfig": {
     "extends": [
       "react-app",
       "react-app/jest"
     ],
     "rules": {
     },
     "overrides": [
       {
         "files": ["**/*.ts?(x)"],
         "rules": {
         }
       }
     ]
   }
   ```

   