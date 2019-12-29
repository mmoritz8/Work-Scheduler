$(document).ready(function () {

    (function () {
        var current = document.getElementById("currentDay");
        current.innerHTML = moment().format("LLL");
    })();

                var now = moment().get('hour');
        var hour = now.toString();

    const m1 = moment("900", "hmm").format("HH:mm A");
    let nine = document.getElementById('nine');
    nine.innerText = m1.toString();

    const m2 = moment('1000', 'hmm').format('HH:mm A');
    var ten = document.getElementById('ten');
    ten.innerHTML = m2.toString();

    const m3 = moment('1100', 'hmm').format('HH:mm A');
    var eleven = document.getElementById('eleven');
    eleven.innerHTML = m3.toString();

    const m4 = moment('1200', 'hmm').format('HH:mm A');
    var twelve = document.getElementById('twelve');
    twelve.innerHTML = m4.toString();

    const m5 = moment('1300', 'hmm').format('HH:mm A');
    var one = document.getElementById('one');
    one.innerHTML = m5.toString();

    const m6 = moment('1400', 'hmm').format('HH:mm A');
    var two = document.getElementById('two');
    two.innerHTML = m6.toString();

    const m7 = moment('1500', 'hmm').format('HH:mm A');
    var three = document.getElementById('three');
    three.innerHTML = m7.toString();

    const m8 = moment('1600', 'hmm').format('HH:mm A');
    var four = document.getElementById('four');
    four.innerHTML = m8.toString();

    const m9 = moment('1700', 'hmm').format('HH:mm A');
    var five = document.getElementById('five');
    five.innerHTML = m9.toString();

    const m10 = moment('1800', 'hmm').format('HH:mm A');
    var six = document.getElementById('six');
    six.innerHTML = m10.toString();

    const m11 = moment('1900', 'hmm').format('HH:mm A');
    var seven = document.getElementById('seven');
    seven.innerHTML = m11.toString();

    const m12 = moment('2000', 'hmm').format('HH:mm A');
    var eight = document.getElementById('eight');
    eight.innerHTML = m12.toString();


            var changeC = document.getElementById('nine');

            if (hour == 9) {
                $(changeC).css("background-color", 'red');

            } else if (hour > 9) {
                $(changeC).css('background-color', 'gray');

            } else if (hour < 9) {
                $(changeC).css('background-color', 'green');

            }

            var changeC2 = document.getElementById('ten');

            if (hour == 10) {
                $(changeC2).css("background-color", 'red');

            } else if (hour > 10) {
                $(changeC2).css('background-color', 'gray');

            } else if (hour < 10) {
                $(changeC2).css('background-color', 'green');

            }

            var changeC3 = document.getElementById('eleven');

            if (hour == 11) {
                $(changeC3).css("background-color", 'red');

            } else if (hour > 11) {
                $(changeC3).css('background-color', 'gray');

            } else if (hour < 11) {
                $(changeC3).css('background-color', 'green');

            }

            var changeC4 = document.getElementById('twelve');

            if (hour == 12) {
                $(changeC4).css("background-color", 'red');

            } else if (hour > 12) {
                $(changeC4).css('background-color', 'gray');

            } else if (hour < 12) {
                $(changeC4).css('background-color', 'green');

            }

            var changeC5 = document.getElementById('one');

            if (hour == 13) {
                $(changeC5).css("background-color", 'red');

            } else if (hour > 13) {
                $(changeC5).css('background-color', 'gray');

            } else if (hour < 13) {
                $(changeC5).css('background-color', 'green');

            }

            var changeC6 = document.getElementById('two');

            if (hour == 14) {
                $(changeC6).css("background-color", 'red');

            } else if (hour > 14) {
                $(changeC6).css('background-color', 'gray');

            } else if (hour < 14) {
                $(changeC6).css('background-color', 'green');

            }

            var changeC7 = document.getElementById('three');

            if (hour == 15) {
                $(changeC7).css("background-color", 'red');

            } else if (hour > 15) {
                $(changeC7).css('background-color', 'gray');

            } else if (hour < 15) {
                $(changeC7).css('background-color', 'green');

            }

            var changeC8 = document.getElementById('four');

            if (hour == 16) {
                $(changeC8).css("background-color", 'red');

            } else if (hour > 16) {
                $(changeC8).css('background-color', 'gray');

            } else if (hour < 16) {
                $(changeC8).css('background-color', 'green');

            }

            var changeC9 = document.getElementById('five');

            if (hour == 17) {
                $(changeC9).css("background-color", 'red');

            } else if (hour > 17) {
                $(changeC9).css('background-color', 'gray');

            } else if (hour < 17) {
                $(changeC9).css('background-color', 'green');

            }

            var changeC10 = document.getElementById('six');

            if (hour == 18) {
                $(changeC10).css("background-color", 'red');

            } else if (hour > 18) {
                $(changeC10).css('background-color', 'gray');

            } else if (hour < 18) {
                $(changeC10).css('background-color', 'green');

            }

            var changeC11 = document.getElementById('seven');

            if (hour == 19) {
                $(changeC11).css("background-color", 'red');

            } else if (hour > 19) {
                $(changeC11).css('background-color', 'gray');

            } else if (hour < 19) {
                $(change11).css('background-color', 'green');

            }

            var changeC12 = document.getElementById('eight');

            if (hour == 20) {
                $(changeC12).css("background-color", 'red');

            } else if (hour > 16) {
                $(changeC12).css('background-color', 'gray');

            } else if (hour < 16) {
                $(changeC12).css('background-color', 'green');

            }

});