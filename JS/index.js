/*
显示元素标签显示以及隐藏
二级导航条
*/
function showobj(id){
   var obj = document.getElementById(id);
   obj.style.display="block";
}
function hiddenobj(id){
    var obj = document.getElementById(id);
    obj.style.display="none";
}

// 实例化一个数组，用于保存图片的路径
var arr = new Array;
arr[0] = "images/banner1.jpg"
arr[1] = "images/banner2.jpg"
arr[2] = "images/banner3.jpg"
arr[3] = "images/banner4.jpg"
count = 0;

// 切换图片的功能
function autoPlayer(){
    if(arr.length==count)
        count = 0;
        document.getElementById("banner1").src=arr[count];
        count++;
}

// 定时器
var Time = setInterval(autoPlayer,1500);
//清除定时器
function cleanTime(){
    clearInterval(Time);
}

//鼠标悬停时候指定播放图片
function showbannerById(num){
    cleanTime();
    //将数据类型转化为int型
    var index = parseInt(num);
    document.getElementById("banner1").src=arr[index-1];
    count = index;
}
//鼠标离开时恢复自动播放效果
function btnmouseOut(num){
    Time = setInterval(autoPlayer,1500);
}

// 实现浮动广告的特效
function changeheight(){    //本函数用来改变高度
    var qq = document.getElementById("zixun");
    // alert(document.documentElement.scrollTo);
    qq.style.top = document.documentElement.scrollTop+200+"px";  //重复是因为浏览器兼容问题
}
window.onscroll = changeheight;

// 表单验证部分

function isOK(){
    //验证是否为空
    if(document.getElementById("uname").value==""||document.getElementById("uname").value==NaN){
        alert("用户名不能为空");
        return false;
    }

    var email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if(!document.getElementById("email").value.match(email)){
        alert("E-mail格式错误");
        // document.getElementById("email").onfocus();          重新获取焦点
        return false;
    }

    var qq=/^[0-9]*[1-9][0-9]*$/;
    if(!document.getElementById("qq").value.match(qq)){
        alert("QQ格式错误");
        return false;
    }

    var Mobile=/^1(3|4|5|7|8)\d{9}$/;
    if(!document.getElementById("Mobile").value.match(Mobile)){
        alert("电话格式错误");
        return false;
    }


    if(document.getElementById("content").value.length>50){
        alert("不得超过50个字符");
        return false;
    }
    return true;
}



 