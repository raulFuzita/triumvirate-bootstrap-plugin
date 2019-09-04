# triumvirate-bootstrap-plugin
Three Mode Navbar with icon for Bootstrap (Desktop: navbar; Tablet: sidebar; Mobile: scrolling menu;)

A Navbar that changes based on your screen mode. This Bootstrap plugin provides a unique stylish mode for desktop, tablet, and mobile phone view. Don't forget to download the Bootstrap package you use the cached version. This project uses Bootstrap 4.1.3

Desktop View:
<ul>
  <li>A normal Bootstrap Navbar with icon and a small description in inline orientation.</li>
</ul>

Tablet View: 
<ul>
  <li>A nice sidebar that slides from left to right in block orientation. . A dark overlay covers the background with opacity.</li>
</ul>

Mobile Phone View: 
<ul>
  <li>A fantastic scrolling menu displays the icon options in inline orientation.</li>
</ul>

**This plugin is open source. I'd be glad to have your help to contribute to our community.



# Implementation

Include the css after the Bootstrap css

&#60;link rel="stylesheet" href="https://rawcdn.githack.com/raulFuzita/triumvirate-booystrap-plugin/634d359a4172a80975bdfa612629e94b17509bd7/triumvirate-bootstrap-plugin/css/triumvirate.css" crossorigin="anonymous"&#62;

Include the js after the Jquery and Bootstrap js

&#60;script src="https://rawcdn.githack.com/raulFuzita/triumvirate-booystrap-plugin/634d359a4172a80975bdfa612629e94b17509bd7/triumvirate-bootstrap-plugin/js/triumvirate.js" crossorigin="anonymous"&#62;&#60;/script&#62;

<h2>Syntax Example</h2>

<pre>
        &#60;header class="mb-5"&#62;
            &#60;nav class="navbar navbar-expand-lg navbar-dark bg-dark"&#62;
                &#60;!-- Website logo --&#62;
                &#60;a class="navbar-brand" href="#"&#62;YOUR LOGO&#60;/a&#62;
    
                &#60;!-- Display hamburger menu for desktop and mobile phone --&#62;
                &#60;button class="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"&#62;
                    &#60;span class="navbar-toggler-icon"&#62;&#60;/span&#62;
                &#60;/button&#62;
    
                &#60;!-- Display hamburger menu for tablet. Keep the data-toggle name --&#62;
                &#60;button class="sidebar-toggler d-none d-md-block d-lg-none" type="button" data-toggle="toggle" data-target="#navbarNav" aria-label="Toggle navigation"&#62;
                    &#60;span class="navbar-toggler-icon"&#62;&#60;/span&#62;
                &#60;/button&#62;

                &#60;!-- Menu --&#62;
                &#60;div class="collapse navbar-collapse" id="navbarNav"&#62;
    
                    &#60;hr class="d-block d-md-none d-lg-none" style="border-width: 2px;"&#62;
                    
                    &#60;!-- a scrolling menu effect for mobile phone mode  --&#62;
                    &#60;div class="pantheon-dome"&#62;
                        &#60;ul&#62;
                        
                            &#60;!-- Each option of the menu has to be wrapped in this structure --&#62;
                            &#60;a href="#"&#62;
                                &#60;div class="pantheon-dome--content"&#62;
                                    &#60;div&#62;
                                        &#60;!-- Change the "icon" of the option --&#62;
                                        &#60;img src="http://image.prntscr.com/image/15f7d1b8dca94296b249f56eb6cc78d3.png"/&#62;
                                    &#60;/div&#62;
                                    &#60;!-- Display a short description (17 character) --&#62;
                                    &#60;span&#62;10/02/2019&#60;/span&#62;
                                &#60;/div&#62;
                            &#60;/a&#62;
    
                            &#60;a class="not-selectable" href="#"&#62;
                                &#60;div class="pantheon-dome--content"&#62;
                                    &#60;div class="ghost-it-out"&#62;
                                        &#60;img src="http://image.prntscr.com/image/7e98362d62b2490c998fe1472dcb0601.png"/&#62;
                                    &#60;/div&#62;
                                    &#60;span&#62;10/06/2019&#60;/span&#62;
                                &#60;/div&#62;
                            &#60;/a&#62;

                        &#60;/ul&#62;
                    &#60;/div&#62;
    
                    &#60;div class="col-lg-1 col-12"&#62;
                        &#60;button type="button" class="btn btn-info btn-block"&#62;Login&#60;/button&#62;
                    &#60;/div&#62;
                            
                &#60;/div&#62;
                &#60;!-- Using a div with id backOverlay and class eclipse to darken the background   --&#62;
                &#60;div id="backOverlay" class="eclipse d-lg-none"&#62;&#60;/div&#62;
                    
            &#60;/nav&#62;
        &#60;/header&#62;


</pre>

<h3>Applying dark or light background individually for tablet view mode</h3>

<pre>
  &#60;div class="collapse navbar-collapse dark" id="navbarNav"&#62;
    ...
  &#60;/div&#62;
</pre>



<pre>
  &#60;div class="collapse navbar-collapse light" id="navbarNav"&#62;
    ...
  &#60;/div&#62;
</pre>

# Sources 

For the scrolling effect, I based on the code provided at https://medium.com Article webpage link: https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2 date: 28/08/2019

For the sidebar effect, I based on the code provided at https://startbootstrap.com Article webpage link: https://startbootstrap.com/templates/simple-sidebar/ date: 28/08/2019

