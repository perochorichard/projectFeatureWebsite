$(document).ready(function () {
    var $scrollCounter = $("#scroll-counter");
    var $window = $(window);
    var $bg = $("#bg");

    $window.scroll(function () {
        var screenPos = ($window.scrollTop() / $window.height());
        $scrollCounter.html(screenPos);
        blur = "blur(" + (screenPos) * 8 + "px)";
        $bg.css("filter", blur);
    });
});