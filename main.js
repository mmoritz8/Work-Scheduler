
var date = moment().format('LLLL');
var time = moment('09 00 a').moment().format('LT');

console.log(date);

$(document).ready(function() {

var current = document.getElementById("currentDay");
    current.innerText = date;

$("#nine").innerText = time;

});