//引入userModel
// var UserModel=require('../models/userModel')
// //引入已经下载好的加密工具 bcryptjs
// // var bcryptjs=require('bcryptjs')

const UserModel = require("../models/userModel")
//使用token先要引入jsonwebtoken
var jsonwebtoken=require('jsonwebtoken')

// exports.register= async(req,res)=>{
//     // 要获取前端传递过来的用户信息 body

//     //第一种
//     // var {email,password,nickname}=req.body
//     //把前端传过来的数据写入数据库中
//     //把前端传过来的密码加密
//     // 1.await UserModel.create(
//     //     Object.assign({},req.body,{
//     //         password:bcryptjs.hashSync(req.body.password,10)
//     //     })
//     // )
//     //第二种：去userSchema文件里面提供一个钩子函数，实现加密功能
//     await UserModel.create(req.body)
//     //响应
//     res.send({
//         code:0,
//         msg:'注册成功'  
//     })

// }



exports.register=async (req,res)=>{
    // 获取email
    var {email} = req.body
    // 判断是否已经注册过，做一个查询操作
    var date=await UserModel.findOne({email})
    if(date){
        // 存在，不允许注册
        res.send({code:-1,msg:'该邮箱已注册'})
    }else{
        //不存在，允许注册
        await UserModel.create(req.body)
        res.send({code:0,msg:'注册成功'})
    }
}

exports.login= async(req,res)=>{
    // res.send('用户登入')
    //获取前端传递过来的email  与password
    var {email,password}=req.body
    // 根据Email 去查询数据库
    var date=await UserModel.findOne({email})
    // 判断 date是否有值
    if(!date){
        res.send({code:-1,msg:'邮箱不正确'})
        return
    }

    // 校验密码是否正确 bcryptjs
    if(!date.comparePassword(password)){
        // 校验不通过
        res.send({code:-1,msg:'密码不正确'})
        return
    }


    //登入之前生成一个token给前端

    var token=jsonwebtoken.sign(
        {
            userId:date._id,
            nickname:date.nickname
        },
        "gujianteng",     //定义一个密钥
        {
            expiresIn:'2h'    //设置过期时间
        }
    )
    res.send({code:0,msg:'登入成功',token})


} 