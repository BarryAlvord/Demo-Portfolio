$(document).ready(function() {

    // jQuery
    var i = 0

    function toggle_event() {
        $(".event_coner_right").toggle();
        $(".event_coner_left").toggle();
        $("body").toggleClass("body_event")
        $(".footer").toggleClass("footer_event")





        i = i + 1;
        if (i > 10) {
            i = 1
        }

        if (!(i % 2 === 0)) {
            MyBats = $.halloweenBats({
                image: './photo/halloween/bats.png',
                amount: 30,
                width: 35,
                height: 20,
                speed: 30
            });
        } else {
            MyBats.destroy();

        }
    }

    $('.menu_br').on('click', toggle_event);

});