// JavaScript Document

function $id(id){return document.getElementById(id)}

var lastScrollY=0;
function heartBeat(){
diffY=document.documentElement.scrollTop;
percent=0.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("server").style.top=parseInt(document.getElementById("server").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
}

function resizeimg(ImgD,imgwidth,imgheight){
	var flag=false;
	var image=new Image();
	image.src=ImgD.src;
	if(image.width>0 && image.height>0){
		flag=true;
		if(image.width/image.height>= imgwidth/imgheight){
			if(image.width>imgwidth){
				ImgD.width=imgwidth;
				ImgD.height=(image.height*imgwidth)/image.width;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
		else{
			if(image.height>imgheight){
				ImgD.height=imgheight;
				ImgD.width=(image.width*imgheight)/image.height;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
}