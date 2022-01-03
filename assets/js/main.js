(function($) {
    "use strict"

    /* 1. Proloder */
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });
    // Scroll Up
    $('#back-top a').on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /* 3. slick Nav */
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    /* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: false,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-custom-arrow slick-next"><i class="fa fa-chevron-right"></i></button>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /* 5. Features Properties Active*/
    var properties = $('.feature-properties-active');
    if (properties.length) {
        properties.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrow: false
                    }
                }
            ]
        });
    }

    /* 6. Similar Properties Active*/
    var properties = $('.similar-properties-active');
    if (properties.length) {
        properties.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrow: false
                    }
                }
            ]
        });
    }


    /* 7. Explore Popular City Active*/
    var properties = $('.explore-popular-city-active');
    if (properties.length) {
        properties.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            centerMode: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [{
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrow: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrow: false
                    }
                }
            ]
        });
    }

    /* 8. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrow: false
                    }
                }
            ]
        });
    }



    /* 9. Brand partner Active*/
    var testimonial = $('.partner-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        arrow: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrow: false
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                }
            ]
        });
    }

    /* 10. Amenities Active*/
    var testimonial = $('.amenities-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: false,
            infinite: false,
            speed: 1000,
            autoplay: false,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [{
                    breakpoint: 9999,
                    settings: "unslick",
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: false,
                        arrow: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrow: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrow: false
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow: false
                    }
                }
            ]
        });
    }

    /* 11. Search detail page */
    $(function() {
        var $carousel = $('.property-gallery-slider');
        $carousel
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                asNavFor: '.slider-nav'
            })
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.property-gallery-slider',
            dots: true,
            arrow: false,
            centerMode: false,
            focusOnSelect: true,
            variableWidth: true
        });
    });



    /* 12. Nice Selectorp  */
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

    /* 13. data-background */
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    /* 14. WOW active */
    new WOW().init();



    // 15. ---- Mailchimp js --------//  
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    // 16. ---- Zoom slider js --------//  
    $(document).ready(function() {
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

        });
    });

})(jQuery);

// 17. ---- Price Trends chart js --------//  

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: ""
        },
        axisY: {
            includeZero: false
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        data: [{
            type: "spline",
            indexLabelFontColor: "orangered",
            dataPoints: [
                { x: new Date(2012, 00, 1), y: 1352 },
                { x: new Date(2012, 01, 1), y: 1514, indexLabel: "" },
                { x: new Date(2012, 02, 1), y: 1321 },
                { x: new Date(2012, 03, 1), y: 1163 },
                { x: new Date(2012, 04, 1), y: 950, indexLabel: "" },
                { x: new Date(2012, 05, 1), y: 1201 },
                { x: new Date(2012, 06, 1), y: 1186 },
                { x: new Date(2012, 07, 1), y: 1281, indexLabel: "" },
                { x: new Date(2012, 08, 1), y: 1438 },
                { x: new Date(2012, 09, 1), y: 1305 },
                { x: new Date(2012, 10, 1), y: 1480, indexLabel: "" },
                { x: new Date(2012, 11, 1), y: 1391 }
            ]
        }]
    });

    chart.render();
}




/* 18. Special Package Active*/
var package = $('.special-package-active');
if (package.length) {
    package.slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrow: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrow: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false
                }
            }
        ]
    });
}



/*  Forgot password */

$(document).ready(function() {
    $("#forgotPwd").click(function() {
        $(".account-reg-form").toggleClass("forgot");
        $(".forgot-link").addClass("forgot");
        $(".forgot-link").removeClass("forgot");
    });


    $("#need_helpLink").click(function() {
        $(".account-reg-form").toggleClass("f_showuser");
        $(".needHelpLink").addClass("f_showuser");
        $(".needHelpLink").removeClass("f_showuser");
    });

    $("#forgot_userLink").click(function() {
        $(".account-reg-form").addClass("forgotuser");
    });

});