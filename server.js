var express=require('express')
// 引入抽离出去的路由文件
var  postRouter =require('./routers/postRouter')
var app=express()

// 使用use方法调用路由文件，并设置好前缀

app.use('/posts',postRouter)


app.listen(3000,function(){
    console.log('服务启动成功');
})