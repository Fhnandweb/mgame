$(function () {
  var lid = location.search.split("=")[1];
  // console.log(lid);
  $.ajax({
    url: "http://127.0.0.1:3002/comment",
    type: "get",
    data: {
      lid
    },
    dataType: "json",
    success: function (res) {
      // console.log(res);
      var t = res[0].rtime.split("T")[0];
      var html = "";
      html += `<div class="land-left p-3">
        <p>作者：${res[0].uname}</p>
        <p><img class="head-frame" src="img/b.png" alt=""></p>
        <p>
        <span>帖子:10</span>
        <span>主题:游戏</span>
        <span>积分:50</span>
        </p>
      </div>
      <div class="land-right p-3">
       <p class="c-title">${res[0].title}</p>
        <p>${res[0].content}</p>
        
      </div>
    `
    // <p>${t}</p>
      $("#landlord").html(html);
    }
  })

// 参与评论
$("div.c-content>p>button.show-c").click(function(){
  if($(this).html()=="参与评论"){
    $("div.comm-d").removeClass("comm-d");
    $(this).html("关闭评论");
  }else{
    $("div.comm-a").addClass("comm-d");
    $(this).html("参与评论");
  }
  
})

// 
function getmore(){
  $.ajax({
    url:"http://127.0.0.1:3002/showcomment",
    type:"get",
    data:{lid},
    dataType:"json",
    success:function(res){
      // console.log(res);
      var len=res.length;
      var html="";
      // for(var item of res){
        for(var i=0;i<len;i++){
          var t = res[i].rtime.split("T")[0];
          html+=` <div class="pop">
                    <div class="pop-a">
                    <span><b>侠客</b>--${res[i].un}</span>
                    <span>第${i+1}楼</span>
                    <span>${t}</span>
                    </div>
                    <div class="pop-c">${res[i].content}</div>
                </div>`
        } 
      $("#floor").html(html);
    }
  })
  
}
// 展示评论
$.ajax({
  url:"http://127.0.0.1:3002/showcomment",
  type:"get",
  data:{lid},
  dataType:"json",
  success:function(res){
    //  console.log(res);
    //  console.log(res.length);
    var len=res.length;
    var html="";
    // for(var item of res){
    for(var i=0;i<len;i++){
      var t = res[i].rtime.split("T")[0];
      html+=` <div class="pop">
                <div class="pop-a">
                <span><b>侠客</b>--${res[i].un}</span>
                <span>第${i+1}楼</span>
                <span>${t}</span>
                </div>
                <div class="pop-c">${res[i].content}</div>
            </div>`
    }  
    $("#floor").html(html);
    
  }
})
// 楼层

$(".pub").click(function(){
  var c=$(".comm-a textarea").val();
  var un=$(".comm-a input").val();
  // var lid=location.search.split("=")[1];;
  if(!un){
    un="不留名大侠";
  }
  $.ajax({
    url:"http://127.0.0.1:3002/incom",
    type:"post",
    data:{un,c,lid},
    dataType:"json",
    success:function(res){
      // console.log(res);
      
        $("span.ms").html(res.msg);
      setTimeout(function(){
        $("span.ms").html("");
      },5000)
      getmore();
    }
  })
  $(".comm-a textarea").val("");
  $(".comm-a input").val("");
})

























  // /////////////////
})