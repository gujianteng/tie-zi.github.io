// post 路由文件

var express =require('express')
// 生成express.Router的实例
var router=express.Router()
// 引入controllers 文件，结构赋值的方式拿出里面的方法

const { 
    index,
    create,
    update,
    remove
 } = require('../controllers/postController')
// 定义帖子相关的路由
// GET   /posts
router.get("/",index)

//  POST  /posts
router.post('/',create)
//  PUT   /posts/:id
router.put('/:id',update)


//  DELETE   /posts/:id
router.delete('/:id',remove)

module.exports=router
