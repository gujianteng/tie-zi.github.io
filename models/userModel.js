var mongoose = require('../config/db')
// 引入下载的密码加密的工具
var bcryptjs=require('bcryptjs')
var userSchema = new mongoose.Schema(
    {
        /**
         * 电子邮箱
         */
        email: {
            type: String,
            require: true,
            //自定义校验 
            validate: {
                // 校验的函数，接受的v是前端写的邮箱内容
                validator: function (v) {
                    // 需要返回，返回为true，校验通过
                    // 返回为 false ，校验不通过
                    return  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(v);
                },
                // 校验失败时输出的错误信息
                message: '请输入正确的邮箱地址'  
            }

        },
        /**
         * 用户密码
         */
        password: {
            type: String,
            require: true
        },
        /**
         * 用户昵称
         */
        nickname: {
            type: String,  
            default: ''
        },
        /**
         * 用户头像信息，一个完整的url地址
         */
        avatar:{
            type:String,
            default:'http://localhost:3001/assets/images/kongbai.png'
        }

    },  
    /**
     * 在数据库加个时间
     */
    {
        timestamps: true
    }
)


//可以提供一些钩子函数来处理数据库创建数据完成的操作
// 下面这个代码会在Model.create() 也就是新创建一个UserModel实例的时候执行
// callback不要写成箭头函数，不然this指向会出问题
// callback 会接受到一个next函数，调用这个函数让代码往下执行
// callback 中的this 指向你创建完成时的内容，数据库中的你创建的一条数据
userSchema.pre('save',function(next){
    // console.log(this);
    this.password=bcryptjs.hashSync(this.password,10)      
    next()

}) 


/**
 * 校验密码
 * 在userSchema.methods的原型上加一个方法comparePassword，让UserModel.findOne()的实例date去调用
 * UserModel.findOne()的实例date调用时可以拿到comparePassword方法里面的值
 */ 
userSchema.methods.comparePassword=function(password){
    // this就是数据库中的数据，里面的密码就是加密过的密码
    //bcryptjs.compareSync是bcryptjs校验密码的一种方法，返回一个布尔值
    return bcryptjs.compareSync(password,this.password)
}


var UserModel = mongoose.model('user', userSchema)

module.exports = UserModel     