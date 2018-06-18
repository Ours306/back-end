# back-end

## 介绍
> 使用Node实现后端框架
> 使用到的技术栈：

----------
 1. express        -----------------------------  后端框架
 2. ES6            -----------------------------  语言
 3. Sequelize      -----------------------------  OR框架

## **代码提交说明**

> 1. 每位开发人员在本地与远程分别创建属于自己的分支
> 2. 自己负责的模块确定无误后合并到dev分支
> 3. 团队测试通过后才将dev分支合并到master分支
> 4. 每天离开实验室前提交代码到自己的分支

## 目录结构
```shell
├── config                       // 配置
│   ├── database.json            // 数据库连接
│   ├── default.js               // 配置启动端口
│   ├── oldDb.js                 // 旧版mysql操作数据库
│   ├── newDb.js                 // sequelize操作数据库
├── controller                   // 控制层
│   ├── admin                    // 开发者模块
│       ├── module				 // 模块管理
│       ├── user				 // 用户管理
│   ├── business                 // 业务逻辑
│       ├── student			     //	学生管理(例子)
├── core	                     // 中间件
├── model                        // 模型层(实体层)
│   ├── admin                    // 开发者模块
│       ├── module				 // 模块实体
│       ├── user				 // 用户实体
│   ├── business                 // 业务逻辑实体
│       ├── student			     //	学生实体(例子)
├── routes                       // 路由
│   ├── index.js                 // 配置所有路由对应的路由文件
│   ├── admin                    // 开发者模块
│       ├── module				 // 模块api
│       ├── user				 // 用户api
│   ├── business                 // 业务逻辑
│       ├── student			     //	学生api(例子)
├── sql                          // sql文件
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