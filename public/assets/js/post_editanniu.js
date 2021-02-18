
// 编辑按钮
    $(".container").on('click', '#post-edit', function () {
        // 判断是否有登录
        if (!isLogined()) {
            // 没有登录
            alert("请登录");
            window.location.href = "/login.html";
            return;
        }

    })



