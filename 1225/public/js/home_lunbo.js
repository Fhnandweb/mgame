
$(function(){
 (function(){
   var num=0;
   var $l=$("#game ul li.left");
   var $m=$("#game ul li.mid");
   var $r=$("#game ul li.right");
   var $cli=$("#game ul li");
   var len=$("#game ul li").length;
   function test(){ 
    num ++;
    if(num>len-1){
      num=0;
     }
    $l.removeClass("left").siblings().removeClass("left");
    $m.removeClass("mid").siblings().removeClass("mid");
    $m.removeClass("right").siblings().removeClass("right");
    $cli.eq(num).addClass("mid");

    if(num == len-1){
      $cli.eq(0).addClass("right");
    }else{
      $cli.eq(num+1).addClass("right");
    }
    $cli.eq(num-1).addClass("left")
   }

  $(".left").click(function(){
     test();
     // console.log("num:"+num)
  })


   function oright(){
    num --;
    if(num<0){
      num=len-1;
     }
    $l.removeClass("left").siblings().removeClass("left");
    $m.removeClass("mid").siblings().removeClass("mid");
    $m.removeClass("right").siblings().removeClass("right");
    $cli.eq(num).addClass("mid");
    if(num == len-1){
      $cli.eq(0).addClass("right");
    }else{
      $cli.eq(num+1).addClass("right");
    }
    $cli.eq(num-1).addClass("left")
   }
   $(".right").click(function(){ 
    oright();
  })
   
  var t=setInterval(function(){
    oright();
  },3000)

  $("#game").mouseenter(function(){
    clearInterval(t);
    $("#game p").css("display","block");
  })
  $("#game").mouseleave(function(){
    t=setInterval(function(){
      oright();
    },3000);
    $("#game p").css("display","none");
  })

 })()
      

})