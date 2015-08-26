$(document).ready(function(){
	$("#btn-bind").bind('click', {name:'艾豪', age:'21'},myBindFunc);
});

function myBindFunc(e) {
	$("#btn-bind").after("姓名：" + e.data.name + " 年龄：" + e.data.age);
}