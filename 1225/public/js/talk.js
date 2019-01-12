$(function () {
  //  

  var pno = 1; //页码
  var n;
  ////////////////////////////
  $.ajax({
    url: "http://127.0.0.1:3002/talk",
    type: "get",
    data: {
      pno
    },
    dataType: "json",
    success: function (res) {
      // console.log(res);
      //  console.log(res.count[0].count)
      //  总页数总页数button
      var dc =[];
        dc=dc.concat(res.data);
      n = res.count[0].count;
      n = Math.ceil(n / 10);
      // console.log(n);
      // 
      var html1 = "";
      for (var i = 0; i < n; i++) {
        html1 += `<button class="btn btn-success ml-1 mr-1">${i+1}</button>`
      }
      $("span.btn-g").html(html1);
      // 第一页数字黑色
      $("span.btn-g button:first-child").addClass("fc").siblings().removeClass("fc");
      // 帖子数和内容
      var html = "";
      for (var item of dc) {
        var t = item.rtime.split("T")[0];
        // console.log(t);
        html += `<p class='p-3'><span class="spl"><a href='comment.html?lid=${item.lid}'>|${item.title}</a></span><span class='talk-s'>${item.uname}</span><span class="ml-4">${t}</span></p>`
      }
      $("div.t-main div.t-con").html(html);
      // /////////////当前页面为1 时上一页button 禁用
      if (pno == 1) {
        // $("div.pag button.btn-prev").prop("disabled", "disabled");
        $("div.pag button.btn-prev").css("opacity","0");
      } else {
        // $("div.pag button.btn-prev").prop("disabled", "");
        $("div.pag button.btn-prev").css("opacity","1");
      }
      ///////////////////////    // 当前页面为末尾 时下一页button 禁用
      // /////////
      if (pno == n) {
        // $("div.pag button.btn-next").prop("disabled", "disabled");
        $("div.pag button.btn-next").css("opacity","0");
      } else {
        // $("div.pag button.btn-next").prop("disabled", "");
        $("div.pag button.btn-next").css("opacity","1");
      }
      // //////////////

    }
  })

  // 重载内容函数
  function fresh() {
    $.ajax({
      url: "http://127.0.0.1:3002/talk",
      type: "get",
      data: {
        pno
      },
      dataType: "json",
      success: function (res) {
        // console.log(res);
        //  console.log(res.count[0].count)
        var dc =[];
        dc=dc.concat(res.data);
        // 帖子数和内容
        var html = "";
        for (var item of dc) {
          var t = item.rtime.split("T")[0];
          // console.log(t);
          html += `<p class='p-3'><span class="spl"><a href='comment.html?lid=${item.lid}'>|${item.title}</a></span><span class='talk-s spm'>${item.uname}</span><span class="spr">${t}</span></p>`
        }
        $("div.t-main div.t-con").html(html);
        // //////////////当前页面为1 时上一页button 禁用
        if (pno == 1) {
          // $("div.pag button.btn-prev").prop("disabled", "disabled");
          $("div.pag button.btn-prev").css("opacity","0");
        } else {
          // $("div.pag button.btn-prev").prop("disabled", "");
          $("div.pag button.btn-prev").css("opacity","1");
        }
        // /////////当前页面为末尾 时下一页button 禁用
        if (pno == n) {
          // $("div.pag button.btn-next").prop("disabled", "disabled");
          $("div.pag button.btn-next").css("opacity","0");
        } else {
          // $("div.pag button.btn-next").prop("disabled", "");
          $("div.pag button.btn-next").css("opacity","1");
        }
        // //////////////

        
        // /////////////
      }
    })
  }


 
  
  
  ////////////////上一页 下一页
  $("div.pag button.btn-next").click(function () {
    pno++;
    if (pno > n) {
      pno = n;
    }
    // console.log(pno);
    fresh();
    $("button.fc").next().addClass("fc").siblings().removeClass("fc");
  })

  $("div.pag button.btn-prev").click(function () {
    pno--;
    if (pno < 1) {
      pno = 1
    }
    // console.log(pno);
    fresh();
    $("button.fc").prev().addClass("fc").siblings().removeClass("fc");
  })



  // 页码button
  $("span.btn-g").click(function (e) {
    e.preventDefault();
    var $btn = $(e.target);
    if ($btn.is("button")) {
      pno = $btn.text();
      pno = parseInt(pno);
      // console.log(pno);
      $btn.addClass("fc").siblings().removeClass("fc");
    }
    fresh();
  })




  // /////////////////这里

// /////////////////////////
  // 发帖测试
  $(".reportx").click(function(){
    console.log(111)
    $.ajax({
      url:"http://127.0.0.1:3002/testlogin",
      type:"get",
      dataType:"json",
      success:function(res){
        console.log(res.code);
        if(res.code==0){
          $(".judgex").html(res.msg).css("color","red");
          setTimeout(function(){
            $(".judgex").html("");
          },2000)
        }else{
          window.location.href="profile.html"
        }
      }
    })
  })











  
  // /////////////////////////
  // 发帖测试
  // $(".report").click(function(){
  //   console.log(111)
  //   $.ajax({
  //     url:"http://127.0.0.1:3002/testlogin",
  //     type:"get",
  //     dataType:"json",
  //     success:function(res){
  //       console.log(res.code);
  //       if(res.code==0){
  //         $(".judge").html(res.msg).css("color","red");
  //         setTimeout(function(){
  //           $(".judge").html("");
  //         },2000)
  //       }else{
  //         window.location.href="profile.html"
  //       }
  //     }
  //   })
  // })

// 注销测试

// $(".sout").click(function(){
//   console.log(111)
//   $.ajax({
//     url:"http://127.0.0.1:3002/signout",
//     type:"get",
//     dataType:"json",
//     success:function(res){
//       console.log(res.code);
//       if(res.code==0){
//         $(".judge2").html(res.msg).css("color","red");
//         setTimeout(function(){
//           $(".judge2").html("");
//         },2000)
//       }else{
//         window.location.href="main.html";
//         $(".judge2").html(res.msg).css("color","red");
//         setTimeout(function(){
//           $(".judge2").html("");
//         },2000)
//       }
//     }
//   })
// })



  // 
})