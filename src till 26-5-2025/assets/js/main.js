

$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    dots: true,
    animateOut: 'fadeOut',
    nav: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            animateOut: 'fadeOut',

        },
        565: {
            items: 1,
            animateOut: 'fadeOut',

        },
        767: {
            items: 1,
            animateOut: 'fadeOut',

        },
        1199: {
            items: 1,


        }
    }
});


$('.high-slider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    dots: true,
    nav: true,
    smartSpeed: 1000,
    pagination: true,
    responsive: {
        0: {
            items: 1,

        },
        565: {
            items: 1,

        },
        767: {
            items: 2,

        },
        1199: {
            items: 3,


        }
    }
});



$('.service-slider').owlCarousel({
    loop: true,
    navRewind: false,
    margin: 30,
    responsiveClass: true,
    autoplay: false,
    dots: false,
    nav: false,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1,

        },
        565: {
            items: 1,
        },
        767: {
            items: 1.5,
        },
        1199: {
            items: 1.6,


        }
    }
});


$('.happy-slider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    dots: true,
    nav: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,

        },
        565: {
            items: 3,

        },
        767: {
            items: 4,

        },
        1199: {
            items: 6,


        }
    }
});

$('.review-slider').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    dots: true,
    nav: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,

        },
        565: {
            items: 1,

        },
        767: {
            items: 1,

        },
        1199: {
            items: 1.6,


        }
    }
});
function counter(event) {
    var element = event.target;         // DOM element, in this example .owl-carousel
    var items = event.item.count;     // Number of items
    var item = event.item.index + -1;     // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
        item = item - items
    }
    $('#counter').html("" + item + " ___ " + items)
}

