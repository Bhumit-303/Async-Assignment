var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function pause(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    
}

function stopwatch(){
    if(timer === true){
        count++;

        if(count == 100){
            sec++;
            count = 0;
        }

         if(sec == 60){
            min++;
            sec = 0;
         }

         if(min == 60){
            hr++;
            min = 0;
            sec = 0;
         }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10){
            hrString = '0' + hr;
        }
         if(min < 10){
            minString = '0' + min;
         }
         if(sec < 10){
            secString = '0' + sec;
         }
         if(count < 10){
            countString = '0' + count;
         }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("stopwatch()",10);
    }
}

