$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true
    });
});

$("#prev").click(function () {
    owl.trigger("owl.prev");
});

$("#next").click(function () {
    owl.trigger("owl.next");
});
