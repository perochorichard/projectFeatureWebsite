$(document).ready(function() {
    $("#Home").click(function() {
        // TODO: jump 
    });
    $("#about").click(function() {
        // TODO: smoothscroll to information secion of page
    });

    var $scrollCounter = $("#scroll-counter");
    var $window = $(window);
    $window.scroll(function() {
        var screenPercent = 1 - ($window.scrollTop() / $window.height());
        $scrollCounter.html(screenPercent);
        if (screenPercent <= 0.5) {
            $("#bg").css({filter: blur(8)});
        } else {
            $("#bg").css({filter: blur(0)});
        }
    });
});