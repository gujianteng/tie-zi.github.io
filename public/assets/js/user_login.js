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
                }
            }
        })
    })
})
