$( document ).ready(function() {
    $("#right-button").click(function() {
        var carousel1_margin = parseInt($("#test").css("margin-left"));
        $("body").append(carousel1_margin);
        carousel1_margin+=150;
        $("body").append("<p>aftermath"+carousel1_margin+"</p>");
        carousel1_margin = carousel1_margin + "px";
        $("#test").css("margin-left", carousel1_margin);
        $("body").append("<p>afterMOVE"+carousel1_margin+"</p>");
    });
    $("#left-button").click(function() {
        var carousel1_margin = parseInt($("#test").css("margin-left"));
        $("body").append(carousel1_margin);
        carousel1_margin-=150;
        $("body").append("<p>aftermath"+carousel1_margin+"</p>");
        carousel1_margin = carousel1_margin + "px";
        $("#test").css("margin-left", carousel1_margin);
        $("body").append("<p>afterMOVE"+carousel1_margin+"</p>");
    });
});

/*center picture*/
/*get width of both active picture and picture to its right*/i
/*add together and divide by 2*/
/*add amount of margins between picture*/
/*move whole .carousel_inner to the LEFT by that much.*/