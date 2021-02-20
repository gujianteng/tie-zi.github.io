//引入userModel
const UserModel = require("../models/userModel")
const fs = require("fs");
const path = require("path");
var bcryptjs=require('bcryptjs')

//使用token先要引入jsonwebtoken
var jsonwebtoken = require('jsonwebtoken')

// 用户注册
exports.register = async (req, res) => {
    // 获取email
    var { email } = req.body
    // 判断是否已经注册过，做一个查询操作
    var date = await UserModel.findOne({ email })
    if (date) {
        // 存在，不允许注册
        res.send({ code: -1, msg: '该邮箱已注册' })
    } else {
        //不存在，允许注册
        await UserModel.create(req.body)
        res.send({ code: 0, msg: '注册成功' })
    }
}
//用户登入
exports.login = async (req, res) => {
    // res.send('用户登入')
    //获取前端传递过来的email  与password
    var { email, password } = req.body
    // 根据Email 去查询数据库
    var date = await UserModel.findOne({ email })
    // 判断 date是否有值
    if (!date) {
        res.send({ code: -1, msg: '邮箱或密码不正确' })
        return
    }
    // 校验密码是否正确 bcryptjs
    if (!date.comparePassword(password)) {
        // 校验不通过
        res.send({ code: -1, msg: '邮箱或密码不正确' })
        return
    }
    //登入之前生成一个token给前端
    var token = jsonwebtoken.sign(
        {
            userId: date._id,
            nickname: date.nickname,
            auto:date.nickname
        },
        "gujianteng",     //定义一个密钥
        {
            expiresIn: '2h'    //设置过期时间
        }
    )
    res.send({ code: 0, msg: '登入成功', token })


}

// 获取用户信息
exports.getInfo = async (req, res) => {
    // 1. 获取用户 id，通过 req.auth
    const { userId } = req.auth;
    // 2. 查询数据库即可
    // { passwod: 0 } 是讲 password 字段在返回中剔除掉
    const data = await UserModel.findOne({ _id: userId }, { password: 0 });
    // 3. 响应
    res.send({
        code: 0,
        msg: "OK",
        data
    });
};


// 修改用户信息
exports.update = async (req, res) => {
    // 1. 获取用户Id
    const { userId } = req.auth;
    // 定义一个后续有来修改的对象
    let updateData = {};
    // 2. 判断是否有传递头像过来
    if (req.file.path) {
      // 2.1 定义 newFilename 与 newFilepath
      const newFilename = `${req.file.filename}-${req.file.originalname}`;
      const newFilepath = path.resolve(__dirname, "../public", newFilename);
  
      // 2.2 读文件
      const fileData = fs.readFileSync(req.file.path);
  
      // 2.3 写文件
      fs.writeFileSync(newFilepath, fileData);
  
      // 2.4 给 updateData 中设置 avatar
      updateData.avatar = `${process.env.BASEURL}/${newFilename}`;  
    }
    // 3. 修改数据库
    await UserModel.updateOne({ _id: userId }, updateData);
    const data = await UserModel.findOne({ _id: userId }, { password: 0 });
    // 4. 响应给前端 
    res.send({
      code: 0,
      msg: "修改成功",
      data
    });
  };



//修改用户密码
exports.updatePassword = async (req, res) => { 
    // 1. 获取用户Id
    const { userId } = req.auth;
    var {password,newpassword}=req.body  
    // 3. 修改数据库
    const data = await UserModel.findOne({ _id: userId }); 
    // 校验密码是否正确 bcryptjs
    if (!data.comparePassword(password)) {
        // 校验不通过
        res.send({ code: -1, msg: '密码不正确' })
        return
    }
    //先加密
    newpasswordn=bcryptjs.hashSync(newpassword,10)  
    //再把加密的密码存入数据库
    await UserModel.updateOne({ _id: userId },{password:newpasswordn})
    // 4. 响应给前端
    res.send({
      code: 0,
      msg: "修改成功",
      data
    });
  };



  // 作者修改权限
exports.gujianteng = async (req, res) => {
    // 1. 获取用户Id
    const { userId } = req.auth;
    // 3. 修改数据库
    console.log(req.body);
    const data = await UserModel.findOne({ _id: userId }, { password: 0 });
    // 4. 响应给前端
    res.send({
      code: 0,
      msg: "修改成功",
      data
    });
  };  