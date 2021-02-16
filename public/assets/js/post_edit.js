// 帖子编辑和编辑回填数据

$(function(){

    // 获取当前帖子ID
    var href=window.location.href
    var str=href.split("?")[1]  
    // 判断 str 是否存在
    if(!str){
        alert("请注意是否携带有id")
        return
    }
    var arr=str.split("&")
    var result={}
    arr.forEach(item=>{
        var tmp=item.split("=")
        result[tmp[0]]=tmp[1]
    })
    var url=`http://localhost:3001/posts/${result.id}`

    // console.log(result.id);


    // 发送ajax请求获取帖子编辑回填
    $.ajax({
        url:url,
        type:"get",
        success:function(res){
            $("#form-title").val(res.date.title)
            $("#form-content").val(res.date.content) 
        }
    })
  


    // 发送ajax请求获取帖子编辑更新数据
    $("#post-edit").click(()=>{
        $.ajax({
            url:url,
            type:"put",
            dataType:"json",
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify({
                title:$("#form-title").prop("value"),
                content:$("#form-content").val()
            }),
            success:function(res){
                if(res.code===0){
                    window.location.href='./index.html'
                }else{
                    console.log(res)
                }
            }

        })
    })
})