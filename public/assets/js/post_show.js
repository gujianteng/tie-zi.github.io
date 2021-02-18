// $(function () {

    // 获取当前帖子ID
    // var href=window.location.href
    // var str=href.split("?")[1]  
    // // 判断 str 是否存在
    // if(!str){
    //     alert("请注意是否携带有id")
    //     return
    // }
    // var arr=str.split("&")
    // var result={}
    // arr.forEach(item=>{
    //     var tmp=item.split("=")
    //     result[tmp[0]]=tmp[1]
    // })

    // console.log(result.id);

    let herfId = getHerfId(window.location.href);


    // 发送ajax请求获取详情数据

    var url=`http://localhost:3001/posts/${herfId}`

    $.get(url, async function(res){

        // console.log(res);
        if(res.code===0){
            var date=res.date
            var html=`
            <h1 class="mb-5">帖子详情</h1>
            <h1 class="mb-5 font-weight-light">${date.title}<p id="only" style="float:right;font-size:15px">${moment(res.date.updatedAt).format("YYYY-MM-DD hh:mm:ss")}</p></h1>
            <div class="py-4">${date.content}</div>
            <div class="border-top py-4 mt-4">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a id="editBtn" href="./edit.html?id=${herfId}" class="nav-link btn btn-link">帖子编辑</a>
                </li>
                <li class="nav-item">
                  <a href="javascript:;" class="nav-link btn btn-link" id="post-remove">帖子删除</a>
                </li>
              </ul>
            </div>`

            $(".container").html(html)
        }
    })
    



// })