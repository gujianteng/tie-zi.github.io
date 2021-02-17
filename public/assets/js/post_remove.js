
// 删除功能
// $(function () {
    $(".container").on('click', '#post-remove', function () {
        // 判断是否有登录
        if (!isLogined()) {
            // 没有登录
            alert("请登录");
            window.location.href = "/login.html";
            return;
        }

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
    })




// })
