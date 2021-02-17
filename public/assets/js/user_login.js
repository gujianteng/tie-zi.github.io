// 用户注册
$(function () {
    $('#user-login').click(() => {
        $.ajax({
            url: `http://localhost:3001/login`,
            type: 'POST',
            data: {
                email: $("#login-username").val(),
                password: $("#login-password").val()
            },
            success: function (res) {
                if (res.code === 0) {
                    window.location.href = './index.html'
                } else {
                    alert(res.msg)
                    return
                }

                // 登录成功
                // 1. 将 token 信息写入到 Cookie 中
                // 2. 跳转到首页帖子列表页
                Cookies.set("token", res.token);

                window.location.href = "/post/index.html";
            }
        })
    })
})
