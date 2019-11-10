
$(document).ready(function() {

    var dateFor = moment().format('LLL');
    var current = document.getElementById("currentDay");
    current.innerText = dateFor;
    var futureHour = dateFor +1;
    var pastHour = dateFor - 1; 

    $(".hour").each(function(){
    var currentHour2 = querySelect("hour" + i);

    if (currentHour === currenHour2) {
        $(".hour").css("background-color", "green");
    } else if (nine.dataset.time == currentTime) {
        $(".hour").css("background-color", "red");
    } else if (nine.dataset.time < currentTime) {
        $(".hour").css("background-color", "gray");
    }
    });

});