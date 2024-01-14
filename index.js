var reset= document.querySelector(".reset");
var stop = document.querySelector('.stop');
var play = document.querySelector('.play');
var timer = document.querySelector('.timer');
let seconds= 0;
let hours = 0;
let minutes = 0;
let flag="go";
let timerInterval= null;


play.addEventListener('click',()=>{
    console.log("Click the play button");
    stopWatch();
  
});

stop.addEventListener('click',()=>{
    console.log("click stop button");
    stopTimer();
    play.innerHTML=`<i class="fa-solid fa-play"></i>`;
    flag= "go";

})

reset.addEventListener('click',()=>{
    console.log("click reset button");
    stopTimer();
    flag="go";
    stopWatch();
  

})



 function stopWatch() {
    if(flag =="go"){
        timerInterval= window.setInterval(startTimer,1000)
         play.innerHTML=`<i class="fa-solid fa-pause"></i>`;
         flag="stop";
     }else{
         window.clearInterval(timerInterval);
         play.innerHTML=`<i class="fa-solid fa-play"></i>`;
         flag= "go";
     }
 }

 function startTimer(){
        seconds++;
      minutes += Math.floor(seconds/60);
      seconds = seconds % 60;

      hours += Math.floor(minutes/60) ;
      minutes = minutes % 60;
        
        const leadingZero = (num)=>
        {
           return (num<10 ? '0':'')+ num.toString()
        };
        const leadingHour= leadingZero(hours);
        const leadingMin= leadingZero(minutes);
        const leadingSec= leadingZero(seconds);
   
            timer.innerText= leadingHour+" : "+leadingMin+" : "+leadingSec;
     
 }

 function stopTimer() {
    window.clearInterval(timerInterval);
    
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText= '00: 00 : 00';
    
 }

