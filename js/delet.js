var labelInput = $("#select-wrapper li label.verti-align");
var labelInputKeCheng = $("#course-wrapper li label.verti-align");
/*点击删除文字隐藏*/
$('.ui-icon-position').tap(function () {
    if ($(this).hasClass('ui-icon-delete')) {
        if ($('label input').length) {
            labelInput.show();
            labelInputKeCheng.show();
            /*学习档案*/
            var current = $('#tab-content li').hasClass('current');
            if(current){
                $('#tab-content li.current').find('label').show();
            }

            $('.ui-footer-btn').show();
            $(this).addClass('quxiao-size').removeClass('ui-icon-delete');
            $(this).html("取消")
        }
    } else {

        $('.ui-footer-btn').hide();
        $('#tab-content li.current').find('label').hide();
        $(this).addClass('ui-icon-delete').removeClass('quxiao-size').html('');

        var checkBox = $('label input');
        for (var i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = false;
        }
        $('.total-delete').html("删除");
    }

})

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

var sureFunction = function () {
    var checkBox = $('label input');
    var flag = false;
    for (var i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        $.dialog({
            title: '',
            content: '请选择课程删除',
            button: ["确认"]
        });
    } else {
        //弹框显示是否删除
        var dia = $.dialog({
            title: '',
            content: '确认删除?',
            button: ["确认", "取消"]
        });

        dia.on("dialog:action", function (e) {
            if (e.index == 0) {

                //页面效果
                $('#select-wrapper li input:checked,#course-wrapper li input:checked,#tab-content li.current input:checked').parents('li').remove();
                labelInput.hide();
                labelInputKeCheng.hide();
                $('.ui-footer-btn').hide();
                $('#tab-content li.current').find('label').hide();
                $('.total-delete').html("删除");
                $('.quxiao-size').addClass('ui-icon-delete').removeClass('quxiao-size').html('')

            } else if (e.index == 1) {
            }
        });
    }


}
/*操作label*/
$('label input').tap(function () {
    changeHtml();
    //flag = true;
});

/*操作全选按钮*/

//var flag=false;
$('.total-all').tap(function () {

    var checkBox = $('label input');
    for (var i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = true;
    }

    changeHtml();


});

/*操作删除按钮*/
$('.total-delete').tap(function () {
    sureFunction();
})

/*点击tab切换*/
$('#learn-dangan .ui-tab-nav li').tap(function(){
    $('.ui-icon-position').addClass('ui-icon-delete').removeClass('quxiao-size').html('');
    $('label input').hide();
    $('.ui-footer-btn').hide();
})