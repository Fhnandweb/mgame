$(function(){


  $(".prb button").click(function(){
    var title=$(".prt input").val();
    var content=$(".prc textarea").val();
    if(!title){
      $(".tmsg").html("主题不能为空！").css("color","red");     
      setTimeout(function(){
        $(".tmsg").html(">>").css("color","black");
      },2000)
      return;
    }
    if(!content){
      $(".tmsg").html("内容不能为空！").css("color","red");     
      setTimeout(function(){
        $(".tmsg").html(">>").css("color","black");
      },2000)
      return;
    }
    
    $.ajax({
      url:"http://127.0.0.1:3002/report",
      type:"post",
      data:{title,content},
      dataType:"json",
      success: function(res) {
        console.log(res);
       if(res.code==1){
        $(".prt input").val("");
        $(".prc textarea").val("");
        $(".tmsg").html(res.msg).css("color","green");     
        setTimeout(function(){
          $(".tmsg").html(">>").css("color","black");
        },2000)
       }
      }
    })
  })
























  // 
})