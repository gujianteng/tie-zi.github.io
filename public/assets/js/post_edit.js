// 帖子编辑和编辑回填数据

$(function () {

    // var url = `http://localhost:3001/posts/${result.id}`
    let herfId = getHerfId(window.location.href);
    // console.log(herfId);
    // 发送ajax请求获取帖子编辑回填
    $.ajax({
        url: `/posts/${herfId}`,
        type: "get",
        success: function (res) {
            $("#form-title").val(res.date.title)
            $("#form-content").val(res.date.content)
            // needLogin();
        }
    })
    // 发送ajax请求获取帖子编辑更新数据
    $("#edit-edit").click(async () => {

        $.ajax({
            url: `/posts/${herfId}`,
            type: "put",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                title: $("#form-title").prop("value"),
                content: $("#form-content").val(),
            }),

            headers: {
                Authorization: Cookies.get("token")
            },
            success: function (res) {
                if (res.code === 0) {
                    window.location.href = './index.html'
                } else {
                    console.log(res)
                }
            }
        })
    })
})
