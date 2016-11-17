# PPTBox v1.0.2
## About
What can PPTBox do?
*    Beautify your website like pages of powerpoint.
*    It cantains over 10 kinds of animation,which can be easily used on mobile and PC website.

## Doc

        <!-- The relevant CSS  -->
        <link rel="stylesheet" href="pptbox.css">
        <!-- The HTML required for pptbox -->
        <div class="pptbox" animate="rotate">
            <section>
              This is my first page.
            </section>
            <section>
              This is my second page.
            </section>
        </div>
        <!-- The relevant JavaScript required -->
        <script src="pptbox.js"></script>

Attribute "animate" in element define what kind of animation you want to show:
*    rotate|skew|tumble|drop|scale|push|turn|drag|slide|switch

Attribute "speed" in element define the speed of animation:
*    slow|normal|fast

        <div class="pptbox" animate="skew" speed="slow">
        	//Your pages.
        </div>

# PPTBox v1.0.2 中文
## 关于PPTBox ——将html变成PPT

*    PPTBox是一款可以具有ppt切换效果的html插件，可以给你的网页提供切换动效；
*    PPTBox具有十余种切换动画，你可以将它运用在文章翻页、图片轮播上，当然，它也支持移动端（支持手滑切换）。

## 快速上手

        <!-- 引入pptbox.css  -->
        <link rel="stylesheet" href="pptbox.css">
        <!-- 声明一个ppt切换容器class="pptbox"，选择切换动画效果，比如这里选择"rotate" -->
        <div class="pptbox" animate="rotate">
        <!-- 容器里的子元素section作为切换单元 -->
            <section>
               第一页内容
            </section>
            <section>
               第二页内容
            </section>
        </div>
        <!-- 引入pptbox.js -->
        <script src="pptbox.js"></script>

使用"animate"属性选择动画效果：<a href="http://yorkchan94.github.io/PPTBox">示例</a>
*    rotate|skew|tumble|drop|scale|push|turn|drag|slide|switch

使用"speed"属性选择动画切换速度：
*    slow|normal|fast

        <div class="pptbox" animate="skew" speed="slow">
        	//Your pages.
        </div>
