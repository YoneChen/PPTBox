# PPTBox
## About
What can PPTBox do? 
Beautify your website like pages of powerpoint.
It cantains over 10 kinds of animation,which can be easily used on mobile and PC website.
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
rotate|skew|tumble|drop|scale|push|turn|drag|slide|switch
Attribute "speed" in element define the speed of animation:
slow|normal|fast
<div class="pptbox" animate="skew" speed="slow">
	//Your pages.
</div>