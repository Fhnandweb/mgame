$(function(){

  // section 1左边轮播
  
  var fli=document.querySelectorAll("#s1 div.s1-left .s1-swipe ul li");
  var indexnum=0; 
  
    
  // 定时器  
    var tim=setInterval(td,3000);
        $("#s1 div.s1-left .s1-swipe ul li").mouseenter(function(){
          clearInterval(tim);
        })
        $("#s1 div.s1-left .s1-swipe ul li").mouseleave(function(){
         tim=setInterval(td,3000);
       })
    
    function td(){
      indexnum ++;
          if(indexnum>3){
            indexnum=0;
          }
      $("#s1 div.s1-left .s1-swipe ul li").eq(indexnum).addClass("showImg").siblings().removeClass("showImg");
      //  console.log(indexnum)
      $("#s1 div.s1-left .s1-sul li").eq(indexnum).addClass("on").siblings().removeClass("on");
    }

    //轮播小点  
    $("#s1 div.s1-left .s1-sul li").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
      var _index=$(this).index();
      indexnum =_index;
      $("#s1 div.s1-left .s1-swipe ul li").eq(indexnum).addClass("showImg").siblings().removeClass("showImg");
    })
    
    
    // section 1中间选项卡
      $("#s1 div.s1-mid #tab-main .tab-m ul li").mouseenter(function(){
        var _index = $(this).index();
      $(this).addClass("le").siblings().removeClass("le");
        $("#s1 div.s1-mid #tab-main .tab-c div").eq(_index).show().siblings().hide();
      })
  
  
    // section 2中间选项卡
      $("#s2 #tab2-main .tab2-m ul li").mouseenter(function(){
        var _index = $(this).index();
        $(this).addClass("loe").siblings().removeClass("loe");
        $("#s2 #tab2-main .tab2-c div").eq(_index).show().siblings().hide();
      })

//section 3 黑彩交替
var na=0;
var nc=$("#s3>.s3-d1>div").size();
var t=setInterval(function(){
  na ++;
  if(na>nc-1){
    na=0
  }
  $("#s3>.s3-d1>div").eq(na).addClass("s3-color").siblings().removeClass("s3-color");
},3000)

$("#s3>.s3-d1").mouseenter(function(){
  clearInterval(t);
  $("#s3>.s3-d1>div").addClass("s3-color");
})
$("#s3>.s3-d1").mouseleave(function(){
  t=setInterval(function(){
    na ++;
    if(na>nc-1){
      na=0
    }
    $("#s3>.s3-d1>div").eq(na).addClass("s3-color").siblings().removeClass("s3-color");
  },2000)
})


      // 日食效果
      $("footer div#m-foot p").mouseenter(function(){
        $(this).css({
          "opacity":"0",
          "transform":"translateX(-27%) translateY(-86%)"
      });
      $("footer div#m-foot .foot-hole h3").css("opacity","1");
      })
      $("footer div#m-foot  p").mouseleave(function(){
        $(this).css({
          "opacity":"1",
          "transform":"translateX(-35%) translateY(-70%)"
      });
      $("footer div#m-foot .foot-hole h3").css("opacity","0");
      })
      setInterval(function(){
        $("footer div#m-foot p").toggleClass("wit");
      },1000)
    
			
			//  
























  
})