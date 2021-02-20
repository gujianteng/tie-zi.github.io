var express = require('express')
//引入 dotenv 并配置
require("dotenv").config()
// 引入统一处理错误的包,不需要拿变量来接收
require('express-async-errors')
var app = express()
// 引入抽离出去的路由文件
var postRouter = require('./routers/postRouter')
var userRouter = require('./routers/userRouter')
//  req.body 中间件处理
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// 用一个全局中间件统一处理端口跨域问题
app.use((req, res, next) => {
  res.set({
    // 处理端口不同
    'Access-Control-Allow-Origin': '*',
    // 设置允许前端传递的一些请求头
    'Access-Control-Allow-Headers': 'abc,def',
    //    设置允许的请求方式
    'Access-Control-Allow-Methods': 'PUT,GET,POST,PATCH,DELETE'
  })
  next()
})
// 引入静态资源文件
app.use(express.static('./public/'))
// 使用use方法调用路由文件，并设置好前缀
app.use('/posts', postRouter)
app.use(userRouter) 


// 统一处理错误信息
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err.message)
})


app.listen(4000, function () {
  console.log('服务启动成功');
})