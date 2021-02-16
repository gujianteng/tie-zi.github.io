
// 删除功能
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
    
        // console.log(result.id);
    
    
        // 发送ajax请求获取详情数据
    
        var url=`http://localhost:3001/posts/${result.id}`
        $(".container").on('click','#post-remove',function(){
            $.ajax({
                url,
                type:'delete',
                success:function(res){
                    if(res.code===0){
                        window.location.href="./index.html"
                    }else{
                        console.log(res);
                    }
                }
            })
        })




})