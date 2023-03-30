module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
         // 解决 eslint 和 prettier 的冲突 , 此项配置必须在最后
         'prettier',
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json', // + 新增 parserOptions 配置
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        // 关闭 对文件扩展名的 校验
        'import/extensions': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        //  允许 在ts、tsx 中书写 jsx
        'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ], 
        // 修改 对于 函数式组件 声明方式(箭头函数 or 函数声明)的 校验
       'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: ['arrow-function'],
        },
      ], 
    }
}
