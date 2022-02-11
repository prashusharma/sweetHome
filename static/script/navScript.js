$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.my-navbar').addClass("shadow border-bottom");
    } else {
        $('.my-navbar').removeClass("shadow border-bottom");
    }
});

if ($(this).scrollTop() > 0) {
    $('.my-navbar').addClass("shadow border-bottom");
} else {
    $('.my-navbar').removeClass("shadow border-bottom");
}

$('.navbar-toggler').click(function () {
    if ($(this).find(".fa-bars").hasClass('d-none')) {
        $(this).find(".fa-bars").removeClass("d-none");
        $(this).find(".fa-times").addClass("d-none");
    } else {
        $(this).find(".fa-bars").addClass("d-none");
        $(this).find(".fa-times").removeClass("d-none");
    }
});