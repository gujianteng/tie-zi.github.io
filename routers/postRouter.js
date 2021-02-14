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




/**
 * @api {get} http://localhost:3000/posts     获取帖子列表，查询帖子
 * @apiName index
 * @apiGroup post
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 * @apiSuccess {Array}  data  帖子数组.
 */
// 查询帖子 GET   /posts
router.get("/",index)



/**
 * @api {post} http://localhost:3000/posts     创建帖子
 * @apiName create
 * @apiGroup post
 * 
 * @apiParam {String} title  帖子标题
 * @apiParam {String} content  帖子内容
 * 
 * 
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
//创建帖子  POST  /posts
router.post('/',create)


/**
 * @api {put} http://localhost:3000/posts/:id     更新帖子
 * @apiName update
 * @apiGroup post
 * 
 * @apiParam {String} title  帖子标题
 * @apiParam {String} content  帖子内容
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
//更新帖子  PUT   /posts/:id
router.put('/:id',update)



/**
 * @api {delete} http://localhost:3000/posts/:id     删除帖子
 * @apiName remove
 * @apiGroup post
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
//删除帖子  DELETE   /posts/:id
router.delete('/:id',remove)

module.exports=router
