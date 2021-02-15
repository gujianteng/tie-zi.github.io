$(function () {

    var pageNum = 1   //代表当前页
    var pageSize = 3  //每页显示条数
    var totalPage = 1  //总的页数
    var searchTitle='' // 标题搜索关键字

    function getDate() {
        $.get('http://localhost:3001/posts', {
            pageNum: pageNum,
            pageSize: pageSize,
            title:searchTitle
        }, function (res) {
            if (res.code === 0) {
                var html = ''
                res.date.list.forEach((item, index) => {
                    // console.log(item)
                    html += `<li class="list-group-item flex-column align-items-start py-3">
                    <div class="d-flex justify-content-between">
                      <a class="text-dark w-75" href="./show.html?id=${item._id}">
                        <h4>${item.title}</h4>
                      </a>
                      <small class="text-black-50 text-right">${moment(item.updatedAt).format("YYYY-MM-DD hh:mm:ss")}</small>
                    </div>
                    <div class="font-weight-light text-truncate">${item.content}</div>
                  </li>`
                })
                $('.list-group').html(html);


                //分页按钮的数据
                // 将后台返回的 res.date.totalPage赋值给totalPage
                totalPage = res.date.totalPage
                var pageHtml = ""
                // 上一页
                pageHtml += `<li class="page-item"  data-page="${pageNum > 1 ? pageNum - 1 : 1}"><a class="page-link" href="javascript:;">Prev</a></li>`
                // 循环计算出页码 totalPage 是个数字
                for (var i = 0; i < totalPage; i++) {
                    pageHtml += `<li data-page="${i + 1}" class="page-item ${i + 1 == pageNum ? "active" : ""}"><a class="page-link" href="javascript:;">${i + 1}</a></li>`
                }
                // 下一页
                pageHtml += `<li class="page-item"  data-page="${pageNum < totalPage ? pageNum + 1 : totalPage}"><a class="page-link" href="javascript:;">Next</a></li>`
                // 写入页面中
                $(".pagination").html(pageHtml)
            }
        })
    }
    // 默认调用一次，让页面有数据渲染
    getDate()
    // 绑定分页事件
    $('.pagination').on('click', ".page-item", function () {
        var toPage = $(this).data("page")
        if(toPage==pageNum)return
        pageNum = toPage 
        getDate()
    }) 

    // 模糊搜索
    $('#searchBtn').click(function(){
        // 获取关键字
        var value =$('.searchInput').val()

        // 将 value 赋值给 searchTitle
        searchTitle=value
        // 发送ajax请求拿内容
        
        pageNum=1   //重置页数，不然选择第二页搜索没内容
        getDate()
    })

})