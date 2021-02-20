// 用户注册
$(function () {
    $('#user-register').click(() => {
        $.ajax({
            url: `/register`,
            type: 'POST',
            data: {
                email: $("#register-username").val(),
                password: $("#register-password").val(),
                nickname:$('#register-name').val()
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
