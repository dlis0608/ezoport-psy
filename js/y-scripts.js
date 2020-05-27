$(".reviews-slider").slick({
    slidesToShow: 3,
    responsive: [{

        breakpoint: 1019,
        settings: {
            slidesToShow: 2
        }

    }, {

        breakpoint: 799,
        settings: {
            slidesToShow: 1
        }

    }]
});