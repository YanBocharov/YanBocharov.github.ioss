$ (function() {
    $('.slider').slick({
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 451,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});