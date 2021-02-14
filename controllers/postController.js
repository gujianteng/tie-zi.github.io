//  帖子的控制器，暴露一系列中间件方法让路由去使用
/**
 * 获取帖子列表
 * 
 */


//  引入数计库模型
var PostModel = require("../models/postModel")

// 查询帖子，获取帖子列表
exports.index = async (req, res) => {

var date = await PostModel.find()
// 成功
res.send({code: 0, msg: "成功", date: date})
}


// 创建帖子
exports.create = async (req, res) => {
    //  获取前端传递过来的参数
    var { title, content } = req.body
    //  使用 async await  创建帖子
    await PostModel.create({title,content})
    // 成功
    res.send({code: 0,msg: "成功"})

}


// 更新帖子
exports.update = async(req, res) => {
    // 要更新的帖子的id,前端传过来动态的id
    var { id } = req.params
    // 更新的内容 req.body
    // var { title,content }= req.body
    // 使用数计库的 Model.updateOne方法操作
    // await PostModel.updateOne({ _id: id }, {title:title,content:content})
    await PostModel.updateOne({ _id: id }, req.body)
    // 成功
    res.send({code: 0,msg: "成功"})
}


// 删除帖子
exports.remove = async(req, res) => {

    // 获取id
    var {id}= req.params
    // 使用数计库的 Model.deleteOne方法操作
    await PostModel.deleteOne({_id:id})
            // 成功
    res.send({code: 0,msg: "成功",})
}