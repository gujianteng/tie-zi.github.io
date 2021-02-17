// 发布帖子


$(function () {

    // 判断是否有登录，没有登录需要去登录页面
    // 使用写在 common.js 中的判断方法
    needLogin();


    $("#create-post").click(() => {
        if (($("#form-title").val() == '') || ($("#form-content").val() == '')) {
            alert('帖子标题或内容不能为空')
            return
        }
        $.ajax({
            url: `http://localhost:3001/posts`,
            type: "POST",
            data: {
                title: $("#form-title").val(),
                content: $("#form-content").val()
            },
            // 请求头中需要添加 Ausadfasdf
            headers: {
                Authorization: Cookies.get("token")
            },
            success: function (res) {
                if (res.code === 0) {
                    window.location.href = "./index.html"
                } else {
                    console.log(res);
                }
            }
        })
    })
})

