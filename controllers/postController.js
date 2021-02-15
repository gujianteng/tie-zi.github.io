//  帖子的控制器，暴露一系列中间件方法让路由去使用
/**
 * 获取帖子列表
 * 
 */



//  引入数计库模型
var PostModel = require("../models/postModel")

// 查询帖子，获取帖子列表
exports.index = async (req, res) => {
    //  获取前端传递过来的分页的数据 pageSize ,pageNum,query
    var pageNum = parseInt(req.query.pageNum) || 1     //页码
    var pageSize = parseInt(req.query.pageSize) || 2   //每页显示条数
    // 获取前端传递过来的搜索数据 
    var title =req.query.title 
    // 操作数据库分页公式：Model.find().skip((pageNum - 1) * pageSize ).limit( pageSize )
    var date = await PostModel.find({ title: new RegExp(title) }).skip((pageNum - 1) * pageSize).limit(pageSize)

    //前端还需要知道一共有多少页，需要后台告诉他
    // totalPage=Math.ceil(总条数/每页显示条数)=Math.ceil(总条数/pageSize) 
    // 先算出总条数 tatal  
    var total = await PostModel.find({title: new RegExp(title)}).countDocuments()
    // 再计算出totalPage,也就是总页数
    var totalPage = Math.ceil(total / pageSize)

    // 响应
    res.send({
        code: 0,
        msg: "ok",
        date: {
            list: date,
            totalPage: totalPage
        }
    })
}


// 创建帖子
exports.create = async (req, res) => {
    //  获取前端传递过来的参数
    var { title, content } = req.body
    //  使用 async await  创建帖子
    await PostModel.create({ title, content })
    // 成功
    res.send({ code: 0, msg: "成功" })

}


// 更新帖子
exports.update = async (req, res) => {
    // 要更新的帖子的id,前端传过来动态的id
    var { id } = req.params
    // 更新的内容 req.body
    // var { title,content }= req.body
    // 使用数计库的 Model.updateOne方法操作
    // await PostModel.updateOne({ _id: id }, {title:title,content:content})
    await PostModel.updateOne({ _id: id }, req.body)
    // 成功
    res.send({ code: 0, msg: "成功" })
}


// 删除帖子
exports.remove = async (req, res) => {

    // 获取id
    var { id } = req.params
    // 使用数计库的 Model.deleteOne方法操作
    await PostModel.deleteOne({ _id: id })
    // 成功
    res.send({ code: 0, msg: "成功", })
}