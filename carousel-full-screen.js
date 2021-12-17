$( document ).ready(function() {
/*   $(".carousel-item").click(function() {   FIRST DRAFT WHERE JS TAKES CARE OF THE CSS
        $("#paintings-carousel1").css({ //make everything fullscreen and bring it way to the front
            "position": "fixed",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "zIndex": "701",
        });
    }); */

    //THIS IS BETTER: use classes.
    $(".carousel-item").click(function() { //When you click a carousel PICTURE (not arrows)...
        $("#paintings-carousel1").removeClass("carousel-container"); //kill old class
        $("#paintings-carousel1").addClass("carousel-container-full"); //add identical class, but fullscreen
        $("#paintings-carousel1 .close-carousel").removeClass("hidden"); //also, unhide the close-carousel button
    });

    $("#paintings-carousel1 .close-carousel").click(function() { //When you click close-carousel button, revert to old non-fullscreen class
        $("#paintings-carousel1").removeClass("carousel-container-full");
        $("#paintings-carousel1").addClass("carousel-container");
        $("#paintings-carousel1 .close-carousel").addClass("hidden"); //also, hide the close-carousel button
    });
});