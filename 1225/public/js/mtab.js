
$(function(){
  (function(){
    $("#tab-main .tab-m ul li").mouseenter(function(){
      var _index = $(this).index();
      $("#tab-main .tab-c div").eq(_index).show().siblings().hide();
    })
  })()

})