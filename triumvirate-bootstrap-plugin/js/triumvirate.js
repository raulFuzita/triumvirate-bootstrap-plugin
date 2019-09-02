/*************** Show and Hide sideNavbar (tablet mode) *************/

// collapse navbar-collapse navbarNav
$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
    
    if($('#backOverlay').css('display') == 'block')
        $('#backOverlay').css({'display':'none'});
    else if($('#backOverlay').css('display') == 'none')
        $('#backOverlay').css({'display':'block'});
});

/* ************* Hide Navbar when click out (Tablet and Mobile) *************/

$(document).ready(function () {
    $(document).click(function (event) {

        var clickover = $(event.target);

        var opened_navbar = $(".navbar-collapse").hasClass("show");
        if (opened_navbar === true && !clickover.hasClass("navbar-toggler") && !clickover.hasClass("navbar-toggler-icon")) {
            $("button.navbar-toggler").click();
        }

        var opened_sidebar = $(".collapse").hasClass("in");
        if(opened_sidebar === true && !clickover.hasClass("sidebar-toggler") && !clickover.hasClass("navbar-toggler-icon")){
            $("button.sidebar-toggler").click();
        }

    });
});