$(function(){
	
	$.ajax({
		url:"http://127.0.0.1:3002/firstpage",
		type:"get",
		dataType:"json",
		success: function(res) {
			console.log(res);
			var html="";
			for(var item of res){
			html+=	`<img src="${item.imgurl}" alt="" class="show"></img>`
			}
			$("#head_s").html(html);
				// 大轮播
		var num=0;
		var len=$("#head_s>img").length;
		function task(){
			num ++;
			if(num>len){
				num=0;
			}
			$("#head_s>img").eq(num).addClass("show").siblings().removeClass('show');
		}
		var timer=setInterval(task,3000);
		// 左右按钮
		$("div.right_d").click(function(){
			num ++;
			if(num>len){
				num=0;
			}
			$("#head_s>img").eq(num).addClass("show").siblings().removeClass('show');
		})
		$("div.left_d").click(function(){
			num --;
			if(num<0){
				num=len-1;
			}
			$("#head_s>img").eq(num).addClass("show").siblings().removeClass('show');
		})
		// 按钮闪烁
		
		function tas(){
			$("div.right_d").toggleClass("dr-mask");
			$("div.left_d").toggleClass("dr-mask");
		}
		var ti=setInterval(function(){
			tas();
		},2000)


		$("div.right_d").mouseenter(function(){
			clearInterval(ti)
		})
		$("div.right_d").mouseleave(function(){
			setInterval(function(){
				tas();
			},2000)
		})

		$("div.left_d").mouseenter(function(){
			clearInterval(ti)
		})
		$("div.left_d").mouseleave(function(){
			setInterval(function(){
				tas();
			},2000)
		})
		}
	})
	
	
	

	
	
	






})

	