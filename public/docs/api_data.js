define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3000/posts",
    "title": "创建帖子",
    "name": "create",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "Parameter",
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
    "url": "http://localhost:3000/posts",
    "title": "获取帖子列表，查询帖子",
    "name": "index",
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
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>帖子数组.</p>"
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
    "url": "http://localhost:3000/posts/:id",
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
    "url": "http://localhost:3000/posts/:id",
    "title": "更新帖子",
    "name": "update",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子标题</p>"
          },
          {
            "group": "Parameter",
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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/postRouter.js",
    "groupTitle": "post"
  }
] });
