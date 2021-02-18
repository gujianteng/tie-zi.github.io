//   帖子模型文件


//  引入已经连接到数据库  的 mongoose

var mongoose = require("../config/db")


// 定义 schem

var postSchema = new mongoose.Schema(
    {
        /**
         *    titie:帖子标题
         *       type : String    类型
         *       required: true   必填项
         */

        title: { type: String, required: true },
        content: { type: String},
        author:{
            type:String,
            default:"匿名"
        }
    },
    {
        // timestamps: true, 设置这个后，在数据库会多出两个时间，createAt    updateAt
        timestamps: true
    }
)

// 创建模型  参数post就是集合名字，创建后会以复数形式posts
var PostModel=mongoose.model("post",postSchema)


// 暴露模型
module.exports=PostModel