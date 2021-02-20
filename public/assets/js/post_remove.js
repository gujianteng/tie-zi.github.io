
// 删除功能
// $(function () {
$(".container").on('click', '#post-remove', function () {

    $.ajax({
        url: `/gujianteng`,
        type: 'post',
        data: {
            author: $('#emailgu').text()
        },
        // 请求头中需要添加 Ausadfasdf
        headers: {
            Authorization: Cookies.get("token")
        }
        ,
        success: function (ress) { 
            if (ress.data.nickname == $('#emailgu').text()) {
                // window.location.href=`./edit.html?id=${herfId}` 
                delEdit()


            } else {

                alert('你不可以修改其他作者内容噢')
                return
                // window.location.href=`./index.html?id=${herfId}`


            }
        }
    })

        // 判断是否有登录
        if (!isLogined()) {
            // 没有登录
            alert("请登录");
            window.location.href = "/login.html";
            return;
        }
    function delEdit() {

        // 二次确认是否删除呢
        if (!confirm("你确认要删除么？")) {
            // 点击取消，那就不删除
            return;
        }
        let url = `/posts/${herfId}`;
        $.ajax({
            url,
            type: "delete",
            headers: {
                Authorization: Cookies.get("token")
            },
            success: function (res) {
                if (res.code === 0) {
                    alert("删除成功");
                    window.location.href = "./index.html";
                } else {
                    console.log(res);
                }
            }
        });
    }

})




// })
