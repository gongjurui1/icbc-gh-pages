//调用方法 #box容器里必须有一个select
/*
    $('#box').WSelect({
        placeholder:"请选择您的所在城市"
    });
*/
    $.fn.WSelect = function(options){
        $.extend(this,options);
        $.extend(this,__PROTO__);
        this.select = $('select');//获取select控件

        this.arrow= $('<span class="arrow"></span>');//创建箭头元素
        this.input= $('<input type="text" readonly class="txt" id="city" placeholder='+this.placeholder+' />');//创建input
        this.div = $('<div class="select"></div>');//创建div
        this._render();
        this._handle();
    }

    __PROTO__ = {
        _render:function(){//渲染this里面的元素，用来盛放a标签            
            var length = this.select.children().length;
            var _this=this;
            for(var i=1;i<length;i++){
              var a = $('<a href="javascript:;"></a>');
                  a.text(this.select.children().eq(i).text());
                  this.div.append(a);
                  a.click(function() {
                    $("#city").val($(this).text());
                    $(this).parent().hide();
                    _this.fn($(this).text());
                  });  
            }
            //添加创建好的元素到this里面
            this.append(this.arrow);
            this.append(this.input);
            this.append(this.div);
            this.select.remove();
        },
        _handle:function(){
            var _this=this;
            this.input.on('click',function(){
                _this.div.show();
            });
        }
    };