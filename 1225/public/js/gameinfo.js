$(function(){
  var lid = location.search.split("=")[1];
$.ajax({
  url:"http://127.0.0.1:3002/info",
  data:{lid},
  success: function(res) {
    // console.log(res);
    var a=res[0];
    var html="";
    html+=` <div class="bleft">
    <img src="${a.imgurl}" alt="">
    <p>
      <a href="">购买正版</a>
    </p>
  </div>
  <div class="bright">
    <div class="rtop">
      <span>${a.gname}</span><span class="ml-5">玩家评分：<b>${a.core}</b></span>
    </div>
    <div class="rmid">
      <h5><span class="ic"></span>98小时(对战)</h5>
      <p><span class="hw">上市时间：2017-12-21(PC)</span><span class="hw">游戏类型：<b>${a.gtype}</b></span></p>
      <p><span class="hw">官方中文：支持</span><span class="hw">制作发行：PUBG Corporation</span></p>
    </div>
    <div class="rbot">
      ${a.gtext}
    </div>
  </div>`;
  $(".mcard-body").html(html);
  }
})



















})