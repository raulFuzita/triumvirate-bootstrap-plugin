# triumvirate-booystrap-plugin
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

&#60;header class="mb-5">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <!-- Website logo -->
                <a class="navbar-brand" href="#">YOUR LOGO</a>
    
                <!-- Display hamburger menu for desktop and mobile phone -->
                <button class="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <!-- Display hamburger menu for tablet. Keep the data-toggle name -->
                <button class="sidebar-toggler d-none d-md-block d-lg-none" type="button" data-toggle="toggle" data-target="#navbarNav" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Menu -->
                <div class="collapse navbar-collapse pantheon-dome-box" id="navbarNav">
    
                    <hr class="d-block d-md-none d-lg-none" style="border-width: 2px;">
                    
                    <!-- a scrolling menu effect for mobile phone mode  -->
                    <div class="pantheon-dome">
                        <ul>
                            <!-- Each option of the menu has to be wrapped in this structure -->
                            <a href="#">
                                <div class="pantheon-dome--content">
                                    <div>
                                        <!-- Change the "icon" of the option -->
                                        <img src="http://image.prntscr.com/image/15f7d1b8dca94296b249f56eb6cc78d3.png"/>
                                    </div>
                                    <!-- Display a short description (17 character) -->
                                    <span>10/02/2019</span>
                                </div>
                            </a>
    
                            <a href="#">
                                <div class="pantheon-dome--content">
                                    <div>
                                        <img src="http://image.prntscr.com/image/f2b0ac9e43334eddac9c1af05e573888.png"/>
                                    </div>
                                    <span>10/03/2019</span>
                                </div>
                            </a>
    
                            <a href="#">
                                <div class="pantheon-dome--content">
                                    <div>
                                        <img src="http://image.prntscr.com/image/6915d39cf813481fa3c19fa292c582ba.png"/>
                                    </div>
                                    <span>10/04/2019</span>
                                </div>
                            </a>
    
                            <a class="not-selectable" href="#">
                                <div class="pantheon-dome--content">
                                    <!-- The class ghost-it-out disable the option -->
                                    <div class="ghost-it-out">
                                        <img src="http://image.prntscr.com/image/ad357d428faf4e88ab3bdac78782b523.png"/>
                                    </div>
                                    <span>10/05/2019</span>
                                </div>
                            </a>
    
                            <a class="not-selectable" href="#">
                                <div class="pantheon-dome--content">
                                    <div class="ghost-it-out">
                                        <img src="http://image.prntscr.com/image/7e98362d62b2490c998fe1472dcb0601.png"/>
                                    </div>
                                    <span>10/06/2019</span>
                                </div>
                            </a>

                        </ul>
                    </div>
    
                    <div class="col-lg-1 col-12">
                        <button type="button" class="btn btn-info btn-block">Login</button>
                    </div>
                            
                </div>
                <!-- Using a div with id backOverlay and class eclipse to darken the background   -->
                <div id="backOverlay" class="eclipse d-lg-none"></div>
                    
            </nav>
        </header&#62;


</pre>

# Sources 

For the scrolling effect, I based on the code provided at https://medium.com Article webpage link: https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2 date: 28/08/2019

For the sidebar effect, I based on the code provided at https://startbootstrap.com Article webpage link: https://startbootstrap.com/templates/simple-sidebar/ date: 28/08/2019

