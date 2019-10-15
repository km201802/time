
var mills;
var secs;
var mins;
var hours;
var days;
var weeks;
var month;
var years;
var dt;
try{
  dtime();

var dmonth = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31, }
var dsmonth = {0:0, 1:31, 2:59, 3:90, 4:120, 5:151, 6:181, 7:212, 8:243, 9:273, 10:304, 11:334, 12:365, }
var months = { 1"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 
              8:"August", 9:"September", 10:"October", 11:"November", 12:"December", }

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var ldays;
function dtime(){
  var date = new Date();
  mills = date.getTime();
  secs = date.getTime()/1000;
  mins = secs/60;
  hours = mins/60;
  days = hours/24;
  weeks = days/7;
  years = days/365;
  
  ldays = (date.getTime()-(Math.floor(years)*365*24*60*60*1000))/1000/60/60/24;
  for(var i=1; i<Object.keys(dsmonth).length; i++){
    if(ldays<dsmonth[i]){
      month = months[i]; 
    }
  }

  
  dt = month+"/"+Math.floor(years);
  
  p1.innerHTML = mills;
  p2.innerHTML = secs;
  p3.innerHTML = hours;
  p4.innerHTML = days;
  p5.innerHTML = weeks;
  p6.innerHTML = years;
  p7.innerHTML = dt;
}


setInterval(dtime, 2);
  
  
 }catch(e){
  alert(e);
}
