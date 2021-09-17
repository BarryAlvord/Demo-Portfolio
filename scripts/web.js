$(document).ready(function() {
    //Start up//
    $("#side_elements").hide()

    //Start up//
    if (window.screen.width <= 802) {
        $('nav').css('height', ($(window).height() * 0.265))
    }

    if (window.screen.width >= 802) {
        $(window).scroll(function() {
            if ($(this).scrollTop() <= 40) {
                $("#side_elements").hide(300)
            } else {
                $("#side_elements").show(300)
            }

        })
    }




    //dropdow home menu//
    $('.dropdown_toggle').click(function() {
        $('nav').toggle();
        $('.container').toggleClass('blur_nav');
        $(this).toggleClass("animate")
    });


    $(document).click(function(event) {
        if (window.screen.width < 802) {

            if (!$(".dropdown_toggle > span").is(event.target) && !$(".dropdown_toggle").is(event.target)) {
                if (!$("nav").is(event.target)) {
                    if (!$('nav').has(event.target).length) {
                        $('.dropdown_toggle').removeClass("animate");
                        $('nav').hide();
                        $('.container').removeClass('blur_nav');

                    }
                }
            }


            $(window).scroll(function(e) {
                if ($(this).scrollTop() >= 50) {
                    $('.dropdown_toggle').removeClass("animate");
                    $('nav').hide();
                    $('.container').removeClass('blur_nav')
                }
            })
        }


    });

    //dropdown home menu//




    //Scroll to //
    $(".scroll_up").click(function() {
        $("html,body").animate({ scrollTop: "0" }, 1000)

    })
    $("#about").click(function() {
        $("html, body").animate({ scrollTop: $(".about_me").offset().top }, 1000)
    })

    //Scroll to //





















});