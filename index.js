$(document).ready(function() {
    $("#Home").click(function() {
        // TODO: jump 
    });
    $("#about").click(function() {
        // TODO: smoothscroll to information secion of page
    });

    var $scrollCounter = $("#scroll-counter");
    var $window = $(window);
    var $bg = $("#bg");
    $window.scroll(function() {
        var screenPos = ($window.scrollTop() / $window.height());
        $scrollCounter.html(screenPos);
        var blur = "blur(" + (screenPos) * 8 + "px)";
        $bg.css("filter", blur);
    });
});