//window 对象
// var age = 29;
// window.color = "red";

// delete window.age;

// delete window.color;

// alert(window.age);
// alert(window.color);

//窗口位置


// var baidu = window.open("http://www.baidu.com/", "baidu", "height=400, width=400, top=10, resizable=yes");

// baidu.resizeTo(800, 800);
// baidu.moveTo(200, 200);

//超时调用
// setTimeout(function(){
// 	alert("hello world!");
// }, 1000);

// //间歇调用
// var num = 0;
// var max = 10;
// var intervalId = null;

// function incrementNumber() {
// 	num ++;
// 	if( num == max ) {
// 		clearInterval(intervalId);
// 		alert("Done");
// 	}
// }

// intervalId = setInterval(incrementNumber, 500);

location.assign("http://www.baidu.com");