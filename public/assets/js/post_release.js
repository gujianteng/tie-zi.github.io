$(function(){
    $("#create-post").click(()=>{
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

  