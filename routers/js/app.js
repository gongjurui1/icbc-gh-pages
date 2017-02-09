$(function() {
	$(document).on('pageInit',function(e,id,$page) {
		console.log('id为：'+id+'的page所在页面的js开始执行');
		if(id=='index'){
			//console.log('这里执行的是index的函数');
			    
		    $(function(){
		        $('.tab ul li').click(function(){
		            var index = $(this).index();
		            $(this).addClass('hover');
		            $(this).siblings().removeClass('hover');
		            $('.tab').find('.box').eq(index).show();
		            $('.tab').find('.box').siblings('.box').eq(index).hide();
		        });
		    });
		}
		if(id=='ajax-page') {
			//console.log('这里执行的是ajax-page的事件函数');
		}
	});
	
	$.init();
});