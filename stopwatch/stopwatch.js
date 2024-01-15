var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")
var min = document.getElementById("minutes")
var sec = document.getElementById("seconds")
var ten = document.getElementById("tens")
var tens = 0;var adderotens;
var minutes = 0;var adderominutes;
var seconds = 0;var adderoseconds;

reset.addEventListener('click',function () {
    time=false;
    adderotens="00";adderominutes="00";adderoseconds="00";
    min.innerHTML=adderominutes;
    ten.innerHTML=adderotens;
    sec.innerHTML=adderoseconds;
    
})
start.addEventListener('click', function () {
    time = true;
    startstopwatch();
})

stop.addEventListener('click', function () {
    time = false;
})
function startstopwatch() {
    if (time) {
        tens++

        if (tens == 59) {
            seconds++;
            tens = 0;
        }
        if (seconds == 59) {
            minutes++;
            seconds = 0;
            tens = 0;
        }
       adderominutes=(minutes<10)?'0'+minutes:minutes
       adderoseconds=(seconds<10)?'0'+seconds:seconds
       adderotens=(tens<10)?'0'+tens:tens
        
    }
    min.innerHTML=adderominutes+" Min";
    ten.innerHTML=adderotens+" ";
    sec.innerHTML=adderoseconds+" Sec";
    setTimeout(startstopwatch,30)

}