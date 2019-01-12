

$(function(){

// 登录验证
$("div.m3 button").click(function(){
  var un=$("div.m1 input").val();
  var up=$("div.m2 input").val();
  // 验证非空再提交
  if(!un){
    $("span.tips").html("账号不能为空！").css("color","red");
    setTimeout(function(){
      $("span.tips").html("");
    },2000)
    return;
  }
  if(!up){
    $("span.tips").html("密码不能为空！").css("color","red");
    setTimeout(function(){
      $("span.tips").html("");
    },2000)
    return;
  }
  // ajax
  $.ajax({
    url:"http://127.0.0.1:3002/login",
    type:"post",
    data:{un,up},
    dataType:"json",
    success: function(res) {
      // console.log(res); 
      if(res.code==1){
        $("span.tips").html(res.msg).css("color","green");
        $("div.m1 input").val("");
        $("div.m2 input").val("");
        setTimeout(function(){
          window.location.href="main.html"
        },1000);

      }else{
        $("span.tips").html(res.msg).css("color","red");
        setTimeout(function(){
          $("span.tips").html("");
        },2000)
      }
    }
  })








})














})