$(function () {
    var time;
    time = setInterval(function () { cheese_move() }, 500);

    function cheese_move() {
        $(".cheese").animate({
            'top': (Math.random() * 99) + "%",
            'left': (Math.random() * 99) + "%"
        });
    }

    $('.cheese').click(function () {
        document.getElementById('main-cheese').style.zIndex = 9999;
        clearInterval(time);
    });

    $('.start-button').click(function () {
        clearInterval(time);
        time = setInterval(function () { cheese_move() }, 600);
    });

    $('.stop-button').click(function () {
        clearInterval(time);
    });

});



