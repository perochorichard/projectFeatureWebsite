$(document).ready(function() {
    $("#Home").click(function() {
        // TODO: jump 
    });
    $("#about").click(function() {
        // TODO: smoothscroll to information secion of page
    });

    var scrollCounter = $("#scroll-counter");
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        scrollCounter.html(value);
    });
});