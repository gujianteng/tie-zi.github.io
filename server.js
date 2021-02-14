var express=require('express')
// 引入抽离出去的路由文件
var  postRouter =require('./routers/postRouter')
var app=express()


//  req.body 中间件处理
app.use(express.json())
app.use(express.urlencoded({ extended:true }))


// 静态资源托管

app.use(express.static('./public'))
// 使用use方法调用路由文件，并设置好前缀
app.use('/posts',postRouter)


app.listen(3000,function(){
    console.log('服务启动成功');
})