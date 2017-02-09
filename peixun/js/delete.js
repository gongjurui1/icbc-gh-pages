var labelInput = $("#select-wrapper li label.verti-align");
var labelInputKeCheng = $("#course-wrapper li label.verti-align");
/*点击删除文字隐藏*/
$('.ui-icon-position').tap(function () {
    if ($(this).hasClass('ui-icon-delete')) {
        if ($('label input').length) {
            labelInput.show();
            labelInputKeCheng.show();
            $('.ui-footer-btn').show();
            $(this).addClass('quxiao-size').removeClass('ui-icon-delete');
            $(this).html("取消")
        }
    } else {
        labelInput.hide();
        labelInputKeCheng.hide();
        $('.ui-footer-btn').hide();
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
/*操作label*/
$('label input').tap(function () {
    changeHtml();
    //flag = true;
});

/*操作全选按钮*/

//var flag=false;
$('.total-all').tap(function () {
    /*if(!flag){
     $('label input').attr('checked', 'checked');
     $(this).theIndex = 1;
     changeHtml();
     flag=true;
     }else{
     $('label input').removeAttr('checked');
     changeHtml()
     flag=false;
     }*/
    var checkBox = $('label input');
    for (var i = 0; i < checkBox.length; i++) {

        /* if(checkBox[i].checked==true){
         checkBox[i].checked=false;
         }else{
         checkBox[i].checked=true;
         }*/
        checkBox[i].checked = true;
    }

    changeHtml();


});

/*操作删除按钮*/
$('.total-delete').tap(function () {
    $('#select-wrapper li input:checked,#course-wrapper li input:checked').parents('li').remove();
    labelInput.hide();
    labelInputKeCheng.hide();
    $('.ui-footer-btn').hide();
    $('.total-delete').html("删除");
    $('.quxiao-size').addClass('ui-icon-delete').removeClass('quxiao-size').html('')

})
