# back-end

## 介绍
> 使用Node实现后端框架
> 使用到的技术栈：

----------
 1. express        -----------------------------  后端框架
 2. ES6 -----------------------------  语言

## **代码提交说明**

> 1. 每位开发人员在本地与远程分别创建属于自己的分支
> 2. 自己负责的模块确定无误后合并到dev分支
> 3. 团队测试通过后才将dev分支合并到master分支
> 4. 每天离开实验室前提交代码到自己的分支

## 目录结构
```shell
├── config                       // 配置
├── controller                   // 控制层
│   ├── module                   // 模块管理
│   ├── user                     // 用户管理
├── routes                       // 路由
│   ├── index.js                 // 配置所有路由对应的路由文件
│   ├── module.js                // 配置模块的路由(调用controller层进行处理)
├── app.js                       // 启动文件
├── package.json                 // package.json
```

## 构建
### 推荐使用yarn
> yarn安装依赖速度快于npm
``` bash
# install dependencies
yarn/npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```