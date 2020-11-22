 //使用div时，请保证tab与tab1是在同一行上.
 var speed=30//速度数值越大速度越慢
 var tab=document.getElementById("demo");
 var tab1=document.getElementById("demo1");
 var tab2=document.getElementById("demo2");
 tab2.innerHTML=tab1.innerHTML  //demo1中的传给demo2
 function Marquee3(){
     if(tab2.offsetWidth-tab.scrollLeft<=0)//offsetWidth 是对象的可见宽度
     tab.scrollLeft-=tab2.offsetWidth//scrollWidth 是对象的实际内容的宽，不包边线宽度
     else{
       tab.scrollLeft++
     }
 }
 var MyMar3=window.setInterval(Marquee3,speed)
 tab.onmouseover=function() {clearInterval(MyMar3)}//鼠标悬停是停止
 tab.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}//鼠标离开时继续