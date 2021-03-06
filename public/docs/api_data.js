define({ "api": [
  {
    "type": "get",
    "url": "http://localhost:3001/posts/:id",
    "title": "帖子详情/编辑回填数据",
    "group": "post",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>帖子详情（数据库单条数据）.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post",
    "name": "GetHttpLocalhost3001PostsId"
  },
  {
    "type": "post",
    "url": "http://localhost:3001/posts",
    "title": "发布帖子",
    "name": "create",
    "group": "post",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>帖子作者</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "http://localhost:3001/posts",
    "title": "查询帖子与搜索",
    "name": "index",
    "group": "post",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "defaultValue": "1",
            "description": "<p>页码&lt;可选&gt;</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "defaultValue": "2",
            "description": "<p>每页显示条数&lt;可选&gt;</p>"
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>搜索关键字&lt;可选&gt;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data[list]",
            "description": "<p>帖子数组.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data[totalPage]",
            "description": "<p>总页数.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post"
  },
  {
    "type": "delete",
    "url": "http://localhost:3001/posts/:id",
    "title": "删除帖子",
    "name": "remove",
    "group": "post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post"
  },
  {
    "type": "put",
    "url": "http://localhost:3001/posts/:id",
    "title": "编辑更新帖子",
    "name": "update",
    "group": "post",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>更新之后的帖子信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post"
  },
  {
    "type": "get",
    "url": "http://localhost:3001/getInfo",
    "title": "获取当前登录用户的基本信息",
    "group": "用户",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "GetHttpLocalhost3001Getinfo"
  },
  {
    "type": "get",
    "url": "http://localhost:3001/updatePassword",
    "title": "修改当前登录用户的密码",
    "group": "用户",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "newpassword",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "GetHttpLocalhost3001Updatepassword"
  },
  {
    "type": "post",
    "url": "http://localhost:3001/gujianteng",
    "title": "设置修改权限",
    "group": "用户",
    "parameter": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>用户作者</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostHttpLocalhost3001Gujianteng"
  },
  {
    "type": "post",
    "url": "http://localhost:3001/login",
    "title": "用户登入",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostHttpLocalhost3001Login"
  },
  {
    "type": "post",
    "url": "http://localhost:3001/register",
    "title": "用户注册",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户昵称&lt;可选&gt;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误/成功 状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误/成功 信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostHttpLocalhost3001Register"
  },
  {
    "type": "put",
    "url": "http://localhost:3000/users/update",
    "title": "修改当前用户的基本信息",
    "group": "用户",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Object",
            "optional": false,
            "field": "avatar",
            "description": "<p>要修改的头像</p>"
          }
        ],
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>修改之后的当前用户基本信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PutHttpLocalhost3000UsersUpdate"
  }
] });
