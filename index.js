$("#testimonial").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#testimonialTo").offset().top
    }, 2000);
});

$("#project").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projectTo").offset().top
    }, 2000);
});


$(".hide").on({
    mouseenter: function() {
        $(this).css("background-color", "red");
    },
    mouseleave: function() {
        $(this).css("background-color", "lightblue");
    },
    click: function() {
        $(this).css("background-color", "yellow");
        $(this).css("font-weight", "bold");
    },
})