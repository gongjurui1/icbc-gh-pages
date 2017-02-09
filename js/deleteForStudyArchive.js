//点击课程tab
$("#course").click(function(){
	var peixunTab = $("#danan-peixunban li label.verti-align");
	var testTab = $("#danan-test li label.verti-align");
	var peixunCheckBox  = $('#danan-peixunban label input');
	var testCheckBox = $('#danan-test label input');
	tabPublic(peixunTab,testTab,peixunCheckBox,testCheckBox);
})

//点击培训tab
$("#peixun").click(function(){
	var courseTab = $("#danan-course li label.verti-align");
	var testTab = $("#danan-test li label.verti-align");
	var courseCheckBox  = $('#danan-course label input');
	var testCheckBox = $('#danan-test label input');
	tabPublic(courseTab,testTab,courseCheckBox,testCheckBox);
})

//点击测试tab
$("#test").click(function(){
	var courseTab = $("#danan-course li label.verti-align");
	var peixunTab = $("#danan-peixunban li label.verti-align");
	var courseCheckBox  = $('#danan-course label input');
	var peixunCheckBox = $('#danan-peixunban label input');
	tabPublic(courseTab,peixunTab,courseCheckBox,peixunCheckBox);
})

//抽取的点击tab的公共方法
var tabPublic = function(otherTab1,otherTab2,checkBox1,checkBox2){
	if($('.ui-icon-position').hasClass("quxiao-size")){
		$('.ui-icon-position').addClass('ui-icon-delete').removeClass('quxiao-size').html('');
		$(otherTab1).hide();
		$(otherTab2).hide();
		var CheckBox1 = $(checkBox1);
		var CheckBox2 = $(checkBox2);
        for (var i = 0; i < CheckBox1.length; i++) {
        	CheckBox1[i].checked = false;
        }
        for (var i = 0; i < CheckBox2.length; i++) {
        	CheckBox2[i].checked = false;
        }
        $('.total-delete').html("删除");
        $('.ui-footer-btn').hide();
	}
}

/*点击删除按钮*/
$('.ui-icon-position').tap(function () {
	//tab选择课程
	if($("#course").hasClass("current")){
		var align = $("#danan-course li label.verti-align");
		tabDelete(align,$('.ui-icon-position'));
	}
	//tab选择培训班
	if($("#peixun").hasClass("current")){
		var align = $("#danan-peixunban li label.verti-align");
		tabDelete(align,$('.ui-icon-position'));
	}
	//tab选择测试
	if($("#test").hasClass("current")){
		var align = $("#danan-test li label.verti-align");
		tabDelete(align,$('.ui-icon-position'));
	}

})

//抽取的点击删除按钮公共方法
function tabDelete(tabFlag,current){
	if ($(current).hasClass('ui-icon-delete')) {
        if ($('label input').length) {
        	$(tabFlag).show();
            $('.ui-footer-btn').show();
            $(current).addClass('quxiao-size').removeClass('ui-icon-delete');
            $(current).html("取消")
        }
    } else {
    	$(tabFlag).hide();
        $('.ui-footer-btn').hide();
        $(current).addClass('ui-icon-delete').removeClass('quxiao-size').html('');
        var checkBox = $('label input');
        for (var i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = false;
        }
        $('.total-delete').html("删除");
    }
}

/*删除显示个数*/
var originText = $('.total-delete').html();
var changeHtml = function () {
    var length = $('input:checked').length;
    if (length != 0) {
        var text = originText + '(' + length + ')';

    } else {
        var text = originText;
    }
    $('.total-delete').html(text);
};

/*操作label*/
$('label input').click(function () {
    changeHtml();
});

/*操作全选按钮*/
$('.total-all').tap(function () {
	//tab选择课程
	if($("#course").hasClass("current")){
		var checkBox = $('#danan-course li label input');
	    for (var i = 0; i < checkBox.length; i++) {
	        checkBox[i].checked = true;
	    }
	    changeHtml();
	}
	//tab选择培训班
	if($("#peixun").hasClass("current")){
		var checkBox = $('#danan-peixunban li label input');
	    for (var i = 0; i < checkBox.length; i++) {
	        checkBox[i].checked = true;
	    }
	    changeHtml();
	}
	//tab选择测试
	if($("#test").hasClass("current")){
		var checkBox = $('#danan-test li label input');
	    for (var i = 0; i < checkBox.length; i++) {
	        checkBox[i].checked = true;
	    }
	    changeHtml();
	}
});

/*操作删除按钮*/
$('.total-delete').tap(function () {
	//获取隐藏域中的icr_id和tbc_id
	var checkBox = $('label input');
	var ids = "";
	for (var i = 0; i < checkBox.length; i++) {
		if(checkBox[i].checked==true){
			ids += checkBox[i].value+"-";
	      }
    }
	var flag=false;
	for (var i = 0; i < checkBox.length; i++) {
		if(checkBox[i].checked==true){
			flag = true;
			break;
	      }
    }
	if(!flag){
		//tab选择课程
		if($("#course").hasClass("current")){
			$.dialog({
		        title: '',
		        content: '请选择课程删除',
		        button: ["确认"]
		    });
		}
		//tab选择培训班
		if($("#peixun").hasClass("current")){
			$.dialog({
		        title: '',
		        content: '请选择培训班删除',
		        button: ["确认"]
		    });
		}
		//tab选择测试
		if($("#test").hasClass("current")){
			$.dialog({
		        title: '',
		        content: '请选择测试删除',
		        button: ["确认"]
		    });
		}
	}else{
		//弹框显示是否删除
	    var dia = $.dialog({
	        title: '',
	        content: '确认删除？',
	        button: ["确认", "取消"]
	    });

	    dia.on("dialog:action", function(e) {
	        if (e.index == 0) {
	            console.log('点了确认按钮');
	            /*$.ajax({
	        		url:getRootPath()+"/course/delete?ids="+ids,
	        		type:"post",
	        		dataType:"json",
	        		success:function(data){
	        			
	        		}
	        	})*/
	        	//页面效果
	        	$('li input:checked').parents('.ui-border-t').remove();
			    $("li label.verti-align").hide();
			    $('.ui-footer-btn').hide();
			    $('.total-delete').html("删除");
			    $('.quxiao-size').addClass('ui-icon-delete').removeClass('quxiao-size').html('')
			    
	        } else if (e.index == 1) {
	            console.log('点了取消按钮');
	        }
	    });
	}
	
        //关闭弹窗后生效
        /*dia.on("dialog:hide",function(e){
            console.log("dialog hide")
        });*/
	
})

//页面js效果
$('.ui-list li,.ui-tiled li').click(function () {
    if ($(this).data('href')) {
        location.href = $(this).data('href');
    }
});
$('.ui-searchbar').tap(function () {
    $('.ui-searchbar-wrap').addClass('focus');
    $('.ui-searchbar-input input').focus();
});
$('.ui-searchbar-cancel').tap(function () {
    $('.ui-searchbar-wrap').removeClass('focus');
});