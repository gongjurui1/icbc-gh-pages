var labelInput = $("#select-wrapper li label.verti-align");
var labelInputKeCheng = $("#course-wrapper li label.verti-align");
/*���ɾ����������*/
$('.ui-icon-position').tap(function () {
    if ($(this).hasClass('ui-icon-delete')) {
        if ($('label input').length) {
            labelInput.show();
            labelInputKeCheng.show();
            $('.ui-footer-btn').show();
            $(this).addClass('quxiao-size').removeClass('ui-icon-delete');
            $(this).html("ȡ��")
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
        $('.total-delete').html("ɾ��");
    }

})

/*ɾ����ʾ����*/
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
/*����label*/
$('label input').tap(function () {
    changeHtml();
    //flag = true;
});

/*����ȫѡ��ť*/

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

/*����ɾ����ť*/
$('.total-delete').tap(function () {
    $('#select-wrapper li input:checked,#course-wrapper li input:checked').parents('li').remove();
    labelInput.hide();
    labelInputKeCheng.hide();
    $('.ui-footer-btn').hide();
    $('.total-delete').html("ɾ��");
    $('.quxiao-size').addClass('ui-icon-delete').removeClass('quxiao-size').html('')

})
