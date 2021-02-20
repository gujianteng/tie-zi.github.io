$('#update-password').on('click', function () {


    // 判断是否有登录
    if (!isLogined()) {
        // 没有登录
        alert("请登录");
        window.location.href = "/login.html";
        return;
    }
   var  password=$('#my-oldpassword').val()
   var newpassword=$('#my-newpassword').val() 
   console.log(password);
    $.ajax({
        url: "/updatePassword",
        type: "post",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            password: password,
            newpassword: newpassword
        }),
    
        headers: {
            Authorization: Cookies.get("token")
        },
        success: function (res) {
            if(res.code===0){
                alert('密码修改成功')
                window.location.href = "../../../index.html"  
            }else{
                alert('密码不正确')
            }
        }
    
    })
})



