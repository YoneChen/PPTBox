(function () {
    function PPTBox(options, container) {
        this.options = {
            animate: 'slide',
            speed: 'normal'
        }
        this.options.animate = options.animate || this.options.animate;
        this.options.speed = options.speed || this.options.speed;
        this.getSpeed(this.options.speed);
        this.el = {
            container: container,
            boxList: container.querySelectorAll('section')
        };
        this.attr = {
            _length: this.el.boxList.length, // 总页数
            current: 0, // 展示页索引
            next: 1, // 下一页索引
            pre: -1 // 上一页索引
        };
        this.init();
    }
    PPTBox.prototype = {
        init: function () {
            var boxList = this.el.boxList;
            boxList[this.attr.current].className += 'show ';
            for(var i =0; i < boxList.length;i++) {
                boxList[i].style.animationDuration = this.options.speed + 'ms';
            }
            this.bindEvent();
        },
        bindEvent: function () {
            var boxList = this.el.boxList;
            var startX, distanceX, isDown = false, isSwipe = false;
            for(var i =0; i < boxList.length;i++) {
                var self = this;
                var swipeWidth = boxList[i].clientWidth / 15;
                // });
                boxList[i].addEventListener('touchstart', function (e) {
                    isDown = true;
                    startX = e.touches[0].pageX;
                });
                boxList[i].addEventListener('touchmove', function (e) {
                    if (isDown) {
                        distanceX = e.touches[0].pageX - startX;
                        Math.abs(distanceX) > swipeWidth ? isSwipe = true : isSwipe = false;
                    }
                });
                boxList[i].addEventListener('touchend', function (e) {
                    if (isSwipe) {
                        distanceX > 0 ? self.animate(0, self.options.animate) : self.animate(1, self.options.animate);
                    }
                    isDown = false;
                    isSwipe = false;
                });

                boxList[i].addEventListener('mousedown', function (e) {
                    isDown = true;
                    startX = e.pageX;
                });
                boxList[i].addEventListener('mousemove', function (e) {
                    if (isDown) {
                        distanceX = e.pageX - startX;
                        Math.abs(distanceX) > swipeWidth ? isSwipe = true : isSwipe = false;
                    }
                });
                boxList[i].addEventListener('mouseup', function (e) {
                    if (isSwipe) {
                        console.log('swipe:' + distanceX);
                        distanceX > 0 ? self.animate(0, self.options.animate) : self.animate(1, self.options.animate);
                    }
                    isDown = false;
                    isSwipe = false;
                });
            }
        },
        animate: function (duration, _type) {
            var self = this;
            if (this.animated || (duration == 1 && this.attr.next >= this.attr._length) || (duration == 0 && this.attr.pre <= -1)) {
                return;
            }
            this.animated = true;
            if (duration) {
                this.reset(this.attr.current, _type).className += (_type + '-current-pre '); // 执行动画，展示页沦为上一页
                this.el.boxList[this.attr.next].className += (_type + '-next-current '); // 执行动画，下一页逆袭为展示页
            } else {
                this.reset(this.attr.current, _type).className += (_type + '-current-next '); // 执行动画，展示页沦为下一页
                this.el.boxList[this.attr.pre].className += (_type + '-pre-current '); // 执行动画，上一页逆袭为展示页
            }
            setTimeout(function () {
                self.reset(self.attr.current, _type); // 页面执行完动画进行复位
                self.changeIndex(duration);
                self.el.boxList[self.attr.current].className += 'show';
                self.animated = false;
            }, this.options.speed);
        },
        reset: function (index, _type) {
            this.el.boxList[index].className = '';
            return this.el.boxList[index];
        },
        changeIndex: function (duration) {
            if (duration) {
                ++this.attr.current;
                ++this.attr.next;
                ++this.attr.pre;
            } else {
                --this.attr.current;
                --this.attr.next;
                --this.attr.pre;
            }
        },
        getSpeed: function (speed) {
            switch (speed) {
                case 'x-slow': this.options.speed = 3200; break;
                case 'slow': this.options.speed = 1200; break;
                case 'normal': this.options.speed = 800; break;
                case 'fast': this.options.speed = 560; break;
                case 'x-fast': this.options.speed = 320; break;
                default: this.options.speed = 800; break;
            }
        }
    }
    var pptboxList = document.querySelectorAll('.pptbox');
    for (var i=0;i< pptboxList.length;i++) {
        new PPTBox({ animate: pptboxList[i].getAttribute('animate'), speed: pptboxList[i].getAttribute('speed') }, pptboxList[i]);
    }
})();