// 连接数据库


// 引入 mongoose

var mongoose =require('mongoose')

// 定义连接地址
var url ="mongodb://localhost:27017/express"

// 连接
mongoose
    .connect(url,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("连接数据库成功");
    })
    .catch((error)=>{
            console.log(数据库连接失败);
            console.log(error);
    })


    // 暴露
    module.exports = mongoose