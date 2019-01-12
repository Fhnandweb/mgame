$(function () {
  $.ajax({
    url: "head.html",
    success: function (res) {
      // console.log(res);
      $("header").html(res);
      // 注销测试
      $(".sou").click(function () {
        // console.log(111)
        $.ajax({
          url: "http://127.0.0.1:3002/signout",
          type: "get",
          dataType: "json",
          success: function (res) {
            // console.log(res.code);
            if (res.code == 0) {
              $(".judge2").html(res.msg).css("color", "rgb(238, 173, 173)");
              setTimeout(function () {
                $(".judge2").html("");
              }, 2000)
            } else {
              $(".tabli2>a").attr("href", "login.html");
              // window.location.href = "main.html";
              $(".ms").html("请登录！");
              $(".judge2").html(res.msg).css("color", "rgb(238, 173, 173)");
              setTimeout(function () {
                $(".judge2").html("");
              }, 2000)
            }
          }
        })
      })

    }
  })
  // 

  $.ajax({
    url: "http://127.0.0.1:3002/testlogin",
    type: "get",
    dataType: "json",
    success: function (res) {
      // console.log(res);
      if (res.code == 0) {
        $(".judge").html(res.msg).css("color", "red");
        setTimeout(function () {
          $(".judge").html("");
        }, 2000)
      } else {
        $(".ms").html(res.uname).css("color", "#fff");
        $(".tabli2>a").attr("href", "profile.html");
      }
    }
  })

// 请求foot
$.ajax({
  url:"foot.html",
  success:function(res){
    $("footer").html(res);
  }
})


















})