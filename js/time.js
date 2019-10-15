
var mills;
var secs;
var mins;
var hours;
var days;
var weeks;
var m = [];
var years;

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");

function dtime(){
  var date = new Date();
  mills = date.getTime();
  secs = date.getTime()/1000;
  mins = secs/60;
  hours = mins/60;
  days = hours/24;
  weeks = days/7;
  years = days/365;
  
  p1.innerHTML = mills;
  p2.innerHTML = secs;
  p3.innerHTML = hours;
  p4.innerHTML = days;
  p5.innerHTML = weeks;
  p6.innerHTML = years;
}
dtime();
setInterval(dtime, 2);
