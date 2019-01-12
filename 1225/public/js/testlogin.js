$(function(){

  

// /////////////////////////
  // 发帖测试
  // $(".report").click(function(){
    // console.log(111)
    $.ajax({
      url:"http://127.0.0.1:3002/testlogin",
      type:"get",
      dataType:"json",
      success:function(res){
        // console.log(res);
        if(res.code==0){
          $(".judge").html(res.msg).css("color","red");
          setTimeout(function(){
            $(".judge").html("");
          },2000)
        }else{
          $(".ms").html(res.uname).css("color","#fff");
          $(".tabli>a").attr("href","profile.html");
        }
      }
    })
  // })

// 注销测试

$(".sout").click(function(){
  // console.log(111)
  $.ajax({
    url:"http://127.0.0.1:3002/signout",
    type:"get",
    dataType:"json",
    success:function(res){
      // console.log(res.code);
      if(res.code==0){
        $(".judge2").html(res.msg).css("color","rgb(238, 173, 173)");
        setTimeout(function(){
          $(".judge2").html("");
        },2000)
      }else{
        $(".tabli>a").attr("href","login.html");
        window.location.href="main.html";
        $(".judge2").html(res.msg).css("color","rgb(238, 173, 173)");
        setTimeout(function(){
          $(".judge2").html("");
        },2000)
      }
    }
  })
})

//////////////////











})
  