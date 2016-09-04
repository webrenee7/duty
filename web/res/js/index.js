// JavaScript Document
$(function(){
	var count=0;/*值班天数*/
	$("#num span").html("0");
	
	/*点击每个日期发生的事件*/	
	$("ul input").each(function(n){
		$(this).click(function(){
			if(n!=7){
				$("ul li:last input").removeClass("rest");
				if($(this).hasClass("duty")){
					$(this).removeClass("duty");
					count--;
				}else{
					$(this).addClass("duty");	
					count++;
				}
			}else{
				count=0;
				$("ul li:lt(7) input").removeClass("duty");
				if($(this).hasClass("rest")){
					$(this).removeClass("rest");
				}else{
					$(this).addClass("rest");
				}
			}
		})
	});

	
	/*点击提交按钮发生的事件*/
	$("#btn").click(function(){
		//console.log(count);
		$("#rest_box").css("display","block");
		if(count!=0){
			$("#num span").html(count);	
		}
		$(this).addClass("btn_on");
		$("#btn,ul input").attr("disabled",true);
		function animate(){
			$(".vacation img").animate({opacity:"0"},1000,
				function(){$(this).attr("src","res/images/duty_on.png");
				$(this).animate({opacity:"1"},1000,
					function(){$("#num").animate({opacity:"1"},500);});
			});
		}
		t=setTimeout(animate,500);
	});
	
	/*文本框事件*/
		$(".msg").click(function(){
			$(this).prev().focus();
		});
		$(function(){
			$("textarea").bind({
				focus:function(){
					$(this).next().hide();
				},
				blur:function(){
					var value=$.trim($(this).val());
					//console.log(value);
					if(value==""){
						$(this).next().show();
					}
				}
			});
		})
})