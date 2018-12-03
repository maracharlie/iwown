CountDownTimer('05/14/2017 06:0 AM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = ("0"+(~~(Math.floor(distance / _day)))).substr(-2,2);
        var hours = ("0"+(~~(Math.floor((distance % _day) / _hour)))).substr(-2,2);
        var minutes = ("0"+(~~(Math.floor((distance % _hour) / _minute)))).substr(-2,2);
        var seconds = ("0"+(~~(Math.floor((distance % _minute) / _second)))).substr(-2,2);

        document.getElementById(id).innerHTML = '<div class="number">' + days + '<div class="sub_text">Дней</div></div><span>:</span>';
        document.getElementById(id).innerHTML += '<div class="number">' + hours + '<div class="sub_text">Часов</div></div><span>:</span>';
        document.getElementById(id).innerHTML += '<div class="number">' + minutes + '<div class="sub_text">Минут</div></div>';
    }

    timer = setInterval(showRemaining, 1000);
}