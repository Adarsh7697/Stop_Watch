// here i am create a array seconds , minutes , and hours is zero
let [second,minutes,hours] = [0,0,0];
// variable for display time
let displayTime = document.getElementById("displayTime");

let timer = null;

// create a function for stopwatch
// In the stopwatch seconds value will be increasing by 1 in everysecond 
// when its come to the 60 seconds then it will become zero and its increase the minutes value by one
// when minutes will become 60 its will change the hour value for one
function stopwatch() {
    // its increase the second value one
    second++;
    // 
    if(second == 60) {
        // then the value of seconds become (60) then seconds will start from 0
        second = 0;
        // or its increase the minute value by (1)
        minutes++;
       
        if(minutes == 60) {
            // then the value of minutes becomes 60 its will become zero(0)
            minutes = 0;
            // then the value value becomes (1)
            hours++;
        }   
    }
    // for display the time in double zeros when the watch is start 
    let h = hours < 10 ? "0" +  hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;

    // update the html element in everysecond on display time in everysecond
    displayTime.innerHTML = h + " : " + m + " : " + s;
}

// we have to exective this stopwatch function in everysecond it will increase the value by 1 second 
function watchStart() {
    if(timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch , 1000);
}

//watch stop 
function watchStop() {
    // we use cleartime interval for stop the watch
    // we call the function in html
    clearInterval(timer);
}

function watchReset() {
    // we use cleartime interval 
    // we call the function in html
    clearInterval(timer);
    //to set the hours,minutes,seconds for zero
    [second,minutes,hours] = [0,0,0];
    // display the time or output
    displayTime.innerHTML = "00:00:00";
}