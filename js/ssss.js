/**
 * Created by gongjurui on 2016/11/10.
 */
(function (f, d, a) {
    d.fn.scrollGrid = function (k) {
        var l = d.extend({
                perScroll: 1,
                speed: 34,
                interval: 2000
            },
            k || {});
        return this.each(function () {
            var n = d(this),
                m = n.find(">.listWrap"),
                o;
            s = m.find(">a");//��ȡ���ٸ�a
            var getwidth = s.eq(0).css("width").replace("px", "") * (s.length + 1) + "px";//����span��
            m.css("width", getwidth);//ÿ��span194px���ܿ�ȸ���
            l = d.extend({},
                l);
            l.ul = m;
            l.timer = o;
            n.data("option", l);
            action = function () {
                var t = d(this).data("option"),
                    s = 0,
                    r = t.ul,
                    p = r.find("a:lt(" + t.perScroll + ")").each(function () {
                        s += d(this).outerWidth()
                    }),
                    q = p.clone().appendTo(r);
                r.animate({
                        marginLeft: "-" + Math.abs(s) + "px"
                    },
                    s * t.speed,
                    function () {
                        p.remove();
                        r.css("marginLeft", "0px")
                    })
            };
            n.bind({
                mouseenter: function () {
                    f.clearInterval(d(this).data("option").timer)
                },
                mouseleave: function () {
                    var p = this,
                        q = d(this).data("option");
                    console.log(p)
                    var len = $(p).find('a').eq(0).html();
                    console.log(len)
                    if (len.length >= 7) {
                        q.timer = f.setInterval(function () {
                                action.call(p)
                            },
                            q.interval)
                    }

                }
            });
            n.mouseleave()
        })
    };
})(window, jQuery);

