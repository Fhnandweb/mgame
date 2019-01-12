$(function () {
  var reg1 = /^\w{6,12}$/;
  var reg2 = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/;
  $("#uname").focus(function () {
    $(".log1").html("用户名2-8位！");
    setTimeout(function () {
      $(".log1").html("");
    }, 2000);
  })
  $("#upwd").focus(function () {
    $(".log2").html("密码长度6-12位！");
    setTimeout(function () {
      $(".log2").html("");
    }, 2000);
  })
  $("#apwd").focus(function () {
    $(".log3").html("两次密码必须一致！");
    setTimeout(function () {
      $(".log3").html("");
    }, 2000);
  })
  // 提交
  $(".sput>input").click(function () {
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var apwd = $("#apwd").val();
    if (!uname) {
      $(".log1").html("用户名不能为空！");
      return;
    } else if (!reg2.test(uname)) {
      $(".log1").html("用户名格式不对！");
      return;
    }
    if (!upwd) {
      $(".log2").html("密码不能为空！");
      return;
    } else if (!reg2.test(uname)) {
      $(".log2").html("密码格式不对！");
      return;
    }
    if (!apwd) {
      $(".log3").html("请再次输入密码！");
      return;
    } else if (apwd !== upwd) {
      $(".log3").html("两次密码不一致！");
      return;
    }
    $.ajax({
      url: "http://127.0.0.1:3002/reg",
      type: "post",
      data: {
        uname,
        upwd
      },
      dataType: "json",
      success: function (res) {
        // console.log(res);
        if (res.msg == '用户名已经存在！') {
          $(".log1").html(res.msg);
          $(".log1").css("color", "red");
        } else if (res.code == 1) {
          $("div.logsucc").css("display", "block");
          var n = 2;
          $(".stime").html(n + "s");
          var t=setInterval(function () {
            n--;
            if(n!=0){
            $(".stime").html(n + "s");
          }else{
            window.location.href = "login.html";
            $(".logsucc").css("display", "none");
          }
          }, 1000)
          
          // setTimeout(function(){
          //   window.location.href="login.html";
          //   $(".logsucc").css("display","none");
          // },3000)
          uname = $("#uname").val("");
          upwd = $("#upwd").val("");
          apwd = $("#apwd").val("");
        }
      }
    })

  })



})
