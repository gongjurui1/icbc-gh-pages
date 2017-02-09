//根据切图的图片宽高比例动态设定此div高度

$.fn.setHeight=function(width,height){
	var deviceWidth = document.documentElement.getBoundingClientRect().width;
	var height=height/width*deviceWidth;
	$(this).css("height",height);
}
