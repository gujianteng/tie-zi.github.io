var express = require('express')

var router = express.Router()

var {register,login}=require('../controllers/userController')



/**
 * @api {post} http://localhost:3001/register    用户注册
 * @apiGroup 用户
 * @apiParam  (body) {String} email  用户邮箱
 * @apiParam  (body) {String} password 用户密码
 * @apiParam  (body) {String} nickname  用户昵称<可选>
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 */
router.post('/register',register)


/**
 * @api {post} http://localhost:3001/login    用户登入
 * @apiGroup 用户
 * @apiParam  (body) {String} email  用户邮箱
 * @apiParam  (body) {String} password 用户密码
 * @apiSuccess {Number} code 错误/成功 状态码.
 * @apiSuccess {String} msg   错误/成功 信息.
 * @apiSuccess {String} token   token.
 */
router.post('/login',login)

module.exports = router      