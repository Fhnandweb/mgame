$(function () {
  var id = location.search.split("=")[1];
  $.ajax({
    url: "http://127.0.0.1:3002/str",
    type: "get",
    data: {
      id
    },
    dataType: "json",
    success: function (res) {
      console.log(res);
      var s = res.s;
      var html = "";
      var ht = "";
      var t = res.c[0].rtime.split("T")[0];
      html += `<div class="stm-l">
      <h3>${res.c[0].title}</h3>
      <h6><span>${t}</span> 来源：<span>${res.c[0].source}</span> 作者：<span>${res.c[0].author}</span></h6>
      <div class="sl-c mt-4">   
      ${res.c[0].content} 
        <img src="${res.c[0].imgurl1}" alt=""> 
      ${res.c[0].content} 
        <img src="${res.c[0].imgurl2}" alt="">
      ${res.c[0].content} 
      </div>
    </div>
    <div class="stm-r">
      <p>广告</p>
    </div>`;
      $("div.st-main").html(html);
      // lunbo
      ht += `<ul>
            <li class="mid"><img src="${s[0].imgurl}" alt=""></li>
            <li class="right"><img src="${s[1].imgurl}" alt=""></li>
            <li><img src="${s[2].imgurl}" alt=""></li>
            <li><img src="${s[3].imgurl}" alt=""></li>
            <li class="left"><img src="${s[4].imgurl}" alt=""></li>
        </ul>`
      $("div.pic").html(ht);

      // 
// luobo.js
      var num = 0;
      var $l = $("#game ul li.left");
      var $m = $("#game ul li.mid");
      var $r = $("#game ul li.right");
      var $cli = $("#game ul li");
      var len = $("#game ul li").length;

      function test() {
        num++;
        if (num > len - 1) {
          num = 0;
        }
        $l.removeClass("left").siblings().removeClass("left");
        $m.removeClass("mid").siblings().removeClass("mid");
        $m.removeClass("right").siblings().removeClass("right");
        $cli.eq(num).addClass("mid");

        if (num == len - 1) {
          $cli.eq(0).addClass("right");
        } else {
          $cli.eq(num + 1).addClass("right");
        }
        $cli.eq(num - 1).addClass("left")
      }

      $(".left").click(function () {
        test();
        // console.log("num:"+num)
      })


      function oright() {
        num--;
        if (num < 0) {
          num = len - 1;
        }
        $l.removeClass("left").siblings().removeClass("left");
        $m.removeClass("mid").siblings().removeClass("mid");
        $m.removeClass("right").siblings().removeClass("right");
        $cli.eq(num).addClass("mid");
        if (num == len - 1) {
          $cli.eq(0).addClass("right");
        } else {
          $cli.eq(num + 1).addClass("right");
        }
        $cli.eq(num - 1).addClass("left")
      }
      $(".right").click(function () {
        oright();
      })

      var t = setInterval(function () {
        oright();
      }, 3000)

      $("#game").mouseenter(function () {
        clearInterval(t);
        $("#game p").css("display", "block");
      })
      $("#game").mouseleave(function () {
        t = setInterval(function () {
          oright();
        }, 3000);
        $("#game p").css("display", "none");
      })

      // 
    }
  })




  // 









})