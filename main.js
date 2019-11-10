

$(document).ready(function() {

    var dateFor = moment().format('LLL');
    var current = document.getElementById("currentDay");
    current.innerText = dateFor;
    var futureHour = dateFor +1;
    var pastHour = dateFor - 1; 

    console.log(dateFor);

    $(".hour").each(function(){
    var startHour = moment("0900").format("HH:mm");
    var currentHour = moment();
    console.log(currentHour);

    if (currentHour === startHour) {
        $(".nine").css("background-color", "green");
    } else if (nine.dataset.time == currentTime) {
        $(".nine").css("background-color", "red");
    } else if (nine.dataset.time < currentTime) {
        $(".nine").css("background-color", "gray");
    }
    });

});