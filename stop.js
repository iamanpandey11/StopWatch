const startStopbtn=document.querySelector('#startStopbtn')
const resetbtn=document.querySelector('#resetBtn')


let second=0;
let minutes=0;
let hours=0;
let lsecond=0;
let lminutes=0;
let lhours=0;

function stopwatch(){
    second++

    if(second/60 ===1){
        second=0;
        minutes++;
        if(minutes/60 ===1){
            minutes=0;
            hours++;
    
        }
    }
    if(second<10){
        lsecond = "0" + second.toString();
    }
    else{
        lsecond=second;
    }
    if(minutes<10){
        lminutes = "0" + minutes.toString();
    }
    else{
        lminutes=minutes;
    }
    if(hours<10){
        lhours = "0" + hours.toString();
    }
    else{
        lhours=hours;
    }
   let displayTimer = document.getElementById('timer').innerText = lhours + ":" + lminutes + ":" + lsecond   
}

//variables for interval and timer status
// window.setInterval(stopwatch,1000)
let timerinterval = null;
let tiemrstatus = "stopped"

startStopbtn.addEventListener('click',function (){
    if(tiemrstatus === 'stopped'){
        timerinterval = window.setInterval(stopwatch,1000);
        document.getElementById('startStopbtn').innerHTML=`<i class="fas fa-pause" id="pause"></i>`;
        tiemrstatus="started";
    }
    else{
        window.clearInterval(timerinterval);
        document.getElementById('startStopbtn').innerHTML=`<i class="fas fa-play" id="play"></i>`;
        tiemrstatus = "stopped"
    }
    

} )
resetbtn.addEventListener('click',function () {
    window.clearInterval(timerinterval)
    second=0;
    hours=0;      
    minutes=0; 
    document.getElementById('timer').innerHTML="00:00:00";
    document.getElementById('startStopbtn').innerHTML=`<i class="fas fa-play" id="play"></i>`;
    tiemrstatus = "stopped"
 })

