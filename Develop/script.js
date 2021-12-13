var currentDate = $('#currentDay');


 currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

console.log(currentDate);

document.getElementById("currentDay").innerHTML = currentDate;

