// 用户注册
$(function () {
    $('#user-register').click(() => {
        $.ajax({
            url: `http://localhost:3001/register`,
            type: 'POST',
            data: {
                email: $("#register-username").val(),
                password: $("#register-password").val()
            },
            success: function (res) {
                if (res.code === 0) {
                    window.location.href = './login.html'
                } else {
                    alert(res.msg)
                }
            }
        })
    })
})
