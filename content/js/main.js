
(function ($) {

    "use strict";

    var $window = $(window),
        $body = $('body'),
        $Menu = $('header'),
        $otherFeaturesSlider = $('.other-features-slider'),
        $teamSlider = $('.team-slider');

    $(document).ready(function () {

        $('.themes-colors span').on('click', function () {
            $('.themes-colors').toggleClass('open');
        });

        $('.themes-colors ul li a').on('click', function () {
            var styleSrc = $(this).attr("data-style");
            $('.themes-colors ul li').removeClass('active');
            $('#themes_colors').attr("href", "assets/css/" + styleSrc + ".css");
            $(this).parent().toggleClass('active');
        });

        /*START AOS JS*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 600
        });
        /*END AOS JS*/

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu',
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.anchor').on('click', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 500) {
                $Menu.addClass("sticky");
            } else {
                $Menu.removeClass("sticky");
            }
        });
        /*END MENU JS*/
        
        /*START OTHER FEATURES SLIDER JS*/
        if ($otherFeaturesSlider.length > 0) {
            $otherFeaturesSlider.slick({
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3,
                infinite: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '0',
                        }
                    },
                ]
            });
        }
        /*END OTHER FEATURES SLIDER JS*/

        /*START TEAM SLIDER JS*/
        if ($teamSlider.length > 0) {
            $teamSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }
        /*END TEAM SLIDER JS*/

        /* START ANIMATION*/
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 4000 // How many milliseconds until the next word show.
        });
        /* END ANIMATION*/

        /*START PRICES SLIDE*/
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,

            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        swiper.slideTo(1, false, false);
        /*END PRICES SLIDE */
    });

}(jQuery));