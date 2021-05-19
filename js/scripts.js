//program should return when year is not a leap year
// program should be true for years divisible by 4 those are leap years
//years that are divisible by 100 should be returned false not leap years
//true for years divisible by 400 yeap years
$(document).ready(function () {
  $("#button").click(function(event){

    function leapyear(year){
      return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }
    let userYear= document.getElementById("years").value
    parseInt(userYear);
    console.log(leapyear(userYear));
    event.preventDefault();
  });
});