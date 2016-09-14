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
        init:function () {
            var self = this;
            this.el.boxList[this.attr.current].className += 'show';
            this.el.boxList.forEach(function(pptbox) {
                pptbox.style.animationDuration = self.options.speed + 'ms';
            });
            this.bindEvent();
        },
    bindEvent:function () {
        var _this = this;
        var startX,distanceX,isDown = false,isSwipe = false;
        this.el.boxList.forEach(function(pptbox) {
            var self = _this;
            var swipeWidth = pptbox.clientWidth/15;
            // });
            pptbox.addEventListener('touchstart',function(e) {
                isDown = true;
                startX = e.touches[0].pageX;
            });
            pptbox.addEventListener('touchmove',function(e) {
                if (isDown) {
                    distanceX = e.touches[0].pageX - startX;
                    Math.abs(distanceX) > swipeWidth ? isSwipe = true : isSwipe = false;
                }
            });
            pptbox.addEventListener('touchend',function(e) {
                if (isSwipe) {
                    distanceX > 0 ? self.animate(0, self.options.animate) : self.animate(1, self.options.animate);
                }
                isDown = false;
                isSwipe = false;
            });


            pptbox.addEventListener('mousedown',function(e) {
                isDown = true;
                startX = e.pageX;
            });
            pptbox.addEventListener('mousemove',function(e) {
                if (isDown) {
                    distanceX = e.pageX - startX;
                    Math.abs(distanceX) > swipeWidth ? isSwipe = true : isSwipe = false;
                }
            });
            pptbox.addEventListener('mouseup',function(e) {
                if (isSwipe) {
                    console.log('swipe:'+distanceX);
                    distanceX > 0 ? self.animate(0, self.options.animate) : self.animate(1, self.options.animate);
                }
                isDown = false;
                isSwipe = false;
            });


            pptbox.addEventListener('click',function(e) {
                self.animate(1, self.options.animate);
            });
        });
    },
    animate:function (duration, _type) {
        var self = this;
        if (!this.animated && duration && (this.attr.next < this.attr._length)) { // 进入下一页
            this.animated = true;
            this.reset(this.attr.current, _type).className += (_type + '-current-pre'); // 执行动画，展示页沦为上一页
            setTimeout(function() {
                self.reset(self.attr.current, _type); // 页面执行完动画进行复位
                ++self.attr.current;
                ++self.attr.pre;
            }, this.options.speed);
            this.el.boxList[this.attr.next].className += (_type + '-next-current'); // 执行动画，下一页逆袭为展示页
            setTimeout(function() {
                ++self.attr.next;
                self.animated = false;
            }, this.options.speed);
        } else if (!this.animated && !duration && this.attr.pre > -1) { // 返回下一页
            this.animated = true;
            this.reset(this.attr.current, _type).className += (_type + '-current-next'); // 执行动画，展示页沦为下一页
            setTimeout(function() {
                self.reset(self.attr.current, _type);
                --self.attr.current;
                --self.attr.next;
            }, this.options.speed);
            this.el.boxList[this.attr.pre].className += (_type + '-pre-current'); // 执行动画，上一页逆袭为展示页
            setTimeout(function() {
                --self.attr.pre;
                self.animated = false;
            }, this.options.speed);
        }
    },
    reset:function (index, _type) {
        this.el.boxList[index].className = '';
        return this.el.boxList[index];
    },
    getSpeed:function (speed) {
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

document.querySelectorAll('.pptbox').forEach(function (pptbox) {
    new PPTBox({ animate: pptbox.getAttribute('animate'), speed: pptbox.getAttribute('speed') }, pptbox);
});