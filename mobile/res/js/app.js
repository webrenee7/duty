// JavaScript Document

/*背景自适应*/
function init(){    
    var winW = document.documentElement.clientWidth;//屏幕宽度
    var winH = document.documentElement.clientHeight;//屏幕高度
    var bg = document.getElementById("bg");
    var conH=document.documentElement.scrollHeight;
    if(conH>winH){
        bg.style.height=conH+'px';                                   
     }else {
        bg.style.height = winH + 'px';                                
     }
}

$(function(){
	var count=0;/*值班天数*/
	$("#num span").html("0");
	
	/*点击每个日期发生的事件*/	
	$("ul li img").each(function(n){
		$(this).click(function(){
			if(n!=7){
				$("ul li:last img").attr("src","res/images/8.jpg");
				if($(this).attr("src")=="res/images/duty.jpg"){
					$(this).attr("src","res/images/"+(n+1)+".jpg");
					count--;
				}else{
					$(this).attr("src","res/images/duty.jpg");
					count++;
				}
			}else{
				count=0;
				for(i=0;i<7;i++){
					$("ul li img").eq(i).attr("src","res/images/"+(i+1)+".jpg");
				}
				if($(this).attr("src")=="res/images/rest.jpg"){
					$(this).attr("src","res/images/8.jpg");
				}else{
					$(this).attr("src","res/images/rest.jpg");
				}
			}
			//console.log(count);
		})
	});
})