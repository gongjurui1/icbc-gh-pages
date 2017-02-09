//【已通过】选项卡的下拉刷新
(function() {
    var myScroll,
        pullDownEl, pullDownOffset,
        pullUpEl, pullUpOffset,
        generatedCount = 0;

    function pullDownAction() {
        setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist02');

            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerText = 'Generated row ' + (++generatedCount);
                el.insertBefore(li, el.childNodes[0]);
            }
            //document.body.scrollTop = 0; //滚动到最顶部
            myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
    }

    function pullUpAction() {
        setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.getElementById('thelist02');

            for (i = 0; i < 3; i++) {
                li = document.createElement('li');
                li.innerText = 'Generated row ' + (++generatedCount);
                el.appendChild(li, el.childNodes[0]);
            }
            document.body.scrollTop = document.body.scrollHeight; //滚动到最底部
            myScroll.refresh(); // Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
    }

    function loaded() {
        pullDownEl = document.getElementById('pullDown02');
        pullDownOffset = pullDownEl.offsetHeight;
        pullUpEl = document.getElementById('pullUp02');
        pullUpOffset = pullUpEl.offsetHeight;

        myScroll = new iScroll('wrapper02', {
            useTransition: true,
            topOffset: pullDownOffset,
            onRefresh: function() {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                } else if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                }
            },
            onScrollMove: function() {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                    this.minScrollY = -pullDownOffset;
                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                    pullDownAction(); // Execute custom function (ajax call?)
                } else if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
                    //滚动条走到底部才加载数据 
                    $(window).scroll(function() {　　
                        var scrollTop = $(window).scrollTop();　　
                        var scrollHeight = $(document).height();　　
                        var windowHeight = $(window).height();　　
                        if (scrollTop + windowHeight == scrollHeight) {　　　　  
                            pullUpAction();　　 
                        }
                    });
                    //pullUpAction(); // Execute custom function (ajax call?)    //并不是每次上滑就加载数据
                }
            }
        });

        setTimeout(function() {
            document.getElementById('wrapper02').style.left = '0';
        }, 800);
    }

    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(loaded, 200);
    }, false);
})();
