//  帖子的控制器，暴露一系列中间件方法让路由去使用
/**
 * 获取帖子列表
 * 
 */

exports.index = (req,res)=>{
    res.send("获取帖子列表")
}
exports.create = (req,res)=>{
    res.send("创建帖子")
}
exports.update = (req,res)=>{
    res.send("更新帖子")
}
exports.remove = (req,res)=>{
    res.send("删除帖子")
}