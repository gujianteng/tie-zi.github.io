function getHerfId(href) {
  var href = href;
  var str = href.split("?")[1];
  // 判断 str 是否存在
  if (!str) {
    alert("请注意查看是否携带有id");
    return;
  }
  var arr = str.split("&");
  var result = {};
  arr.forEach(item => {
    var tmp = item.split("=");
    result[tmp[0]] = tmp[1];
  });

  // console.log(result.id);
  return result.id;
}

/**
 * 判断是否有登录
 */
function isLogined() {
  return Cookies.get("token");
}

/**
 * 页面权限
 * 页面中调用这个方法，如果没有登录，就弹窗提示，并跳转回登录页面
 *                   如果有登录，就不做额外操作
 */
function needLogin() {
  if (!isLogined()) {
    // 没有登录
    // $('#editBtn').
    alert("需要登录哦亲~");
    window.location.href = "/login.html";
  }
}

/**
 * 获取当前登录用户的基本信息
 */
function getUserInfo() {
  return new Promise((resolve, reject) => {
    // process.env.BASEURL 只能用在 nodejs
    $.ajax({
      url: "/getInfo",
      type: "GET",
      headers: {
        Authorization: Cookies.get("token")
      },
      success: function(res) {
        resolve(res);
      }
    });
  });
}

/**
 * 渲染右侧 navbar 的
 */
async function renderNavbar() {
  // 判断是否有登录状态，去控制 navbar 的右侧显示
  // 登录成功之后我会将 token 信息写入到 Cookie 中，所以这块就从 Cookie 中获取 token 来判断是否登录了。
  // 操作 Cookie 懒得自己去封装 Cookie 的函数。这边直接采用 js-cookie 这个插件
  //
  var html = "";
  if (Cookies.get("token")) {
    // 存在

    // 获取用户的基本信息，这个操作可能在前端会多次使用，所以不要再这里直接写死，而是去抽离一个公共方法
    const res = await getUserInfo();
console.log(res);
    // 渲染
    html = `
    <li style="line-height:46px;margin-right:200px">欢迎你：${res.data.nickname}</li>
    <li class="nav-item">
      <a href="/post/release.html" class="nav-link">
        <i class="fas fa-plus">发布</i>
      </a>
    </li>
    <li class="nav-item dropdown">
      <a href="javascript:;" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
        <img src="${res.data.avatar}" class="rounded" width="30" height="30" alt="" />
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="/user/settings/profile/edit.html">更换头像</a>
        <a class="dropdown-item" href="/user/settings/password/edit.html">修改密码</a>
        <div class="dropdown-divider"></div>
        <button id="logout-btn" class="dropdown-item" type="submit">退出</button>
      </div>
    </li>
    <li style="line-height:46px">已登入</li>

    `;
  } else {
    // 不存在
    html =  `
    <li class="nav-item">
      <a href="/post/release.html" class="nav-link">
        <i class="fas fa-plus">发布</i>
      </a>
    </li>

    <li class="nav-item dropdown">
      <a href="javascript:;" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
        <img src="/assets/images/kongbai.png" class="rounded" width="30" height="30" alt="" />
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="/user/settings/profile/edit.html">更换头像</a>
        <a class="dropdown-item" href="/user/settings/password/edit.html">修改密码</a>
        <a class="dropdown-item" href="http://localhost:3001/login.html">登陆</a>
        <div class="dropdown-divider"></div>
      </div>
    </li>
    <li style="line-height:46px">请登入</li>

    `;
  }
  $("#navbar-nav-right").html(html);
  // 退出登录的事件绑定
  $("#navbar-nav-right").on("click", "#logout-btn", function() {
    // 1. 删除 Cookie 中 token
    // 2. 去首页

    Cookies.remove("token");
    window.location.href = "/post/index.html";
  });
}

$(function() {
  // 默认调用一次
  renderNavbar();
});

