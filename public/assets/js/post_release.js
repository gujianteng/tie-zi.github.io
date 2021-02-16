// 发布帖子


$(function(){
    $("#create-post").click(()=>{
        if(($("#form-title").val()=='') || ($("#form-content").val()=='')){
            alert('帖子标题或内容不能为空')
            return
        }
        $.ajax({
            url:`http://localhost:3001/posts`,
            type:"POST",
            data:{
                title:$("#form-title").val(),
                content:$("#form-content").val()
            },
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

  