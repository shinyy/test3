$(function(){
	//移动
	var box=document.getElementById("box");
	var speed=0;
	var dist=500;
	var mytime=null;
	var move=function(){
		clearInterval(mytime);
		mytime=setInterval(function(){
			if(box.offsetLeft<dist){
				speed++;
				box.style.left=speed*5+"px";
			}
			
		},1)
	};
	box.onclick=function(){move()};
	
	//消失
	var box2=document.getElementById("box2");
	box2.style.opacity=1;
	var speed2=0.1;
	var mytime2=null;
	var fade=function(){
		clearInterval(mytime2);
		mytime2=setInterval(function(){
			if(box2.style.opacity>0){
				box2.style.opacity-=speed2;
			};
		},10);
	};
	box2.onclick=function(){
		fade();
	}
})
	
