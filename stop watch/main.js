let [milliseconds , seconds , minutes , hours] = [0,0,0,0]
let stopdis = document.getElementById('stopwatchdisplay')
let timer = null
function stopwatchcount(){
    milliseconds += 1
    if (milliseconds >= 100){
        milliseconds = 0;
        seconds ++;
     if (seconds >= 60){
        seconds = 0;
        minutes ++;
        if (minutes >= 60){
             minutes = 0
            hours++;
        }
      }
    }
        let h = hours < 10 ? "0" + hours : hours
        let m = minutes < 10 ? "0" + minutes : minutes
        let s = seconds < 10 ? "0" + seconds : seconds
        stopdis.innerHTML = h +":"+ m +":"+ s +":"+ milliseconds ;
}
function starts(){
    if (timer!== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatchcount,10)
}

function stop(){
    clearInterval(timer)
}

function reset(){
    clearInterval(timer);
    [milliseconds,seconds, minutes, hours] = [0,0,0,0];
    stopdis.innerHTML = "00:00:00:00";
}