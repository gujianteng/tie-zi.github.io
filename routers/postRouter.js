// post 路由文件

var express =require('express')
// 生成express.Router的实例
var router=express.Router()
// 引入controllers 文件，结构赋值的方式拿出里面的方法





const { 
    index,
    create,
    update,
    remove,
    show
 } = require('../controllers/postController')
// 定义帖子相关的路由


/**
 * @api {get} http://localhost:3001/posts     查询帖子(帖子列表)
 * @apiName index
 * @apiGroup post
 * @apiParam  (query) {String} pageNum=1  页码<可选> 
 * @apiParam  (query) {String} pageSize=2  每页显示条数<可选>
 * @apiParam  (query) {String} title  搜索关键字<可选>
 * 
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 * @apiSuccess {Object}  data  数据.
 * @apiSuccess {Array}  data[list]  帖子数组.
 * @apiSuccess {Number}  data[totalPage]  总页数.
 */
// 查询帖子 GET   /posts
router.get("/",index)



/**
 * @api {post} http://localhost:3001/posts     发布帖子
 * @apiName create
 * @apiGroup post
 * 
 * @apiParam {String} title  帖子标题
 * @apiParam {String} content  帖子内容
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
//发布帖子  POST  /posts
router.post('/',create)


/**
 * @api {put} http://localhost:3001/posts/:id     编辑帖子
 * @apiName update
 * @apiGroup post
 * @apiParam {String} title  帖子标题
 * @apiParam {String} content  帖子内容
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 * 
 */
//编辑帖子  PUT   /posts/:id
router.put('/:id',update)



/**
 * @api {delete} http://localhost:3001/posts/:id     删除帖子
 * @apiName remove
 * @apiGroup post
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
//删除帖子  DELETE   /posts/:id
router.delete('/:id',remove)


/**
 * @api {get} http://localhost:3001/posts/:id     帖子详情
 * @apiGroup post
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 * @apiSuccess {String} data  帖子详情（数据库单条数据）.
 * 
 */
//帖子详情  get   /posts/:id
router.get('/:id',show)

module.exports=router
