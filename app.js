

var datePicker = document.getElementById('datePicker');
var selectedDate = document.getElementById('selectedDate');

var ageYears = document.getElementById('ageYears');
var ageMonths = document.getElementById('ageMonths');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');

datePicker.addEventListener('change', function(){
    var options ={year:'numeric', month:'long', day: 'numeric'};
    var selectedDate = new Date(this.value);
    console.log("🚀 ~ file: app.js ~ line 15 ~ datePicker.addEventListener ~ selectedDate", selectedDate)
    var DOB = selectedDate.toLocaleDateString('en-US', options);
    console.log("🚀 ~ file: app.js ~ line 16 ~ datePicker.addEventListener ~ DOB", DOB)

    selectedDate.innerHTML ="DOB: " + DOB;
    var mseconds= Date.parse(DOB);
    console.log("🚀 ~ file: app.js ~ line 19 ~ datePicker.addEventListener ~ mseconds", mseconds)
    var secNow = Date.now();
    console.log("🚀 ~ file: app.js ~ line 21 ~ datePicker.addEventListener ~ secNow", secNow)
    
    var ageInMSeconds = secNow - mseconds;
    console.log("🚀 ~ file: app.js ~ line 22 ~ datePicker.addEventListener ~ ageInMSeconds", ageInMSeconds)

    var miliSeconds= ageInMSeconds;
    var second = 1000;
    var minute = second * 60;
    var hour=minute*60;
    var day = hour*24;
    var month = day*30;
    year = month*12

    var years = Math.round(miliSeconds/year);
    console.log("🚀 ~ file: app.js ~ line 33 ~ datePicker.addEventListener ~ years", years)
    var months = years *12;
    var days = years *365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);
 

    ageYears.innerHTML=years
    ageMonths.innerHTML=months
    ageDays.innerHTML=days
    ageHours.innerHTML=hours
    ageSeconds.innerHTML=seconds



    document.querySelector('.age-calc').classList.add('expand');
})