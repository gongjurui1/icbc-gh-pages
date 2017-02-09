require.config({　　　
	"baseUrl":"../lib/pages",　 
	"paths": {　　　　　　 
		"jquery": "jquery", 　　　　　　 
		"jquery.mobile": "jquery.mobile-1.1.2", 　　　　　　 
		"jquery.dialog": "jquery.dialog"　　　　 
	},
	"shim": {
        "jquery.mobile": ["jquery"],
        "jquery.dialog": ["jquery"]
    }
/*　　shim: {
　　　　'jquery.dialog': {
　　　　　　deps: ['jquery'],
　　　　　　exports: 'jQuery.fn.dialog'
　　　　}
　　}*/
});

require(['jquery', 'jquery.mobile', 'jquery.dialog'], function($) {
	//$(function() {
	    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
	        perPage = 3,
	        pages = Math.ceil(arr.length / perPage);
	    for (var i = 1; i <= pages; i++) {
	        $('#container').append('<div data-role="page" id="' + 'num' + i + '">' + '<header class="ui-header ui-header-positive ui-border-b ui-header-padding">' + '<i class="iconfont ui-icon-return size-21" onclick="history.back()"></i>' + '<h1>测试详情页</h1>' + '</header>' + '<div data-role="content" class="ui-container">    ' + i * 100 + '</div>' + '<div data-role="footer" data-theme="d">' + '    <div class="pages">' + '        <a href="' + '#num' + ((i - 1) > 0 ? (i - 1) : 0) + '">上一页</a>' + '        <a href="#" class="jiaojuan">交卷</a>' + '        <a href="' + '#num' + ((i + 1) < pages ? (i + 1) : i) + '">下一页</a>' + '    </div>' + '</div>' + '</div>');
	    }

	    $(".jiaojuan").on('tap', function() {
	        var dia = $.dialog({
	            title: '',
	            content: '<div class="result red"><p class="weida-num">未答题数：13</p><p class="confirm">您确认是否作答完毕提交试卷？</p></div>',
	            button: ["交卷", "取消"]
	        });

	        dia.on("dialog:action", function(e) {
	            if (e.index == 0) {
	                console.log('点了进入按钮');
	                if ($('.jiaojuan').data('href')) {
	                    location.href = $('.jiaojuan').data('href');
	                }
	            } else if (e.index == 1) {
	                console.log('点了取消按钮');
	            }
	        });
	    });
	//});

	$('.ui-loader').remove();

	//点击选项任何地方都可以选中
	$('.one-question').on('click','ul li',function(){
		var type = $(this).find('input').attr('type');
		switch(type){
			case 'radio':
				setRadio($(this));
				break;
			case 'checkbox':
				setCheckBox($(this));
				$(this).on('click','input',function(){
					var bool = $(this).attr('checked');
						if(!bool){
							$(this).attr('checked','checked');
						}else{
							$(this).attr('checked',false);
						}
				})
				break;
		}
	});
	function setRadio(ele){
		ele.find('input').attr('checked','checked');
		ele.siblings().attr('checked',false);
	}
	function setCheckBox(ele){
		var bool = ele.find('input').attr('checked');
		if(!bool){
			ele.find('input').attr('checked','checked');
		}else{
			ele.find('input').attr('checked',false);
		}
		
	}


});
