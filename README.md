# PPTBox v1.0.0
## About
What can PPTBox do? 
*    Beautify your website like pages of powerpoint.
*    It cantains over 10 kinds of animation,which can be easily used on mobile and PC website.
## Doc

*    &lt;!-- The relevant CSS  --&gt;
*    &lt;link rel="stylesheet" href="pptbox.css"&gt;
*    &lt;!-- The HTML required for pptbox --&gt;
*    &lt;div class="pptbox" animate="rotate"&gt;
*        &lt;section&gt;
*          This is my first page.
*        &lt;/section&gt;
*        &lt;section&gt;
*          This is my second page.
*        &lt;/section&gt;
*    &lt;/div&gt;
*    &lt;!-- The relevant JavaScript required --&gt;
*    &lt;script src="pptbox.js"&gt;&lt;/script&gt;

*    Attribute "animate" in element define what kind of animation you want to show:
*    rotate|skew|tumble|drop|scale|push|turn|drag|slide|switch
*    Attribute "speed" in element define the speed of animation:
*    slow|normal|fast
*    &lt;div class="pptbox" animate="skew" speed="slow"&gt;
*    	//Your pages.
*    &lt;/div&gt;