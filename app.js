window.onload = function () {
let hour = 0;
let minute = 0;
let second = 0o0;
let appendHour = document.querySelector('#hour');
let appendMinute = document.querySelector('#minute');
let appendSecond = document.querySelector('#second')
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');
let Interval;

const startTimer = () => {
    second++;
    if (second <= 9) {
      appendSecond.innerHTML = '0' + second;
    }
    if (second > 9) {
      appendSecond.innerHTML = second;
    }

    if (second > 59) {
      minute++;
      appendMinute.innerHTML = '0' + minute;
      second = 0;
      appendSecond.innerHTML = '0' + 0;
    }

    if(minute > 9){
        appendMinute.innerHTML = minute;
    }

    if(minute > 59){
        hour++;
        appendHour.innerHTML = "0" + hour;
        minute = 0;
        appendMinute.innerHTML = "0" + 0;
    }
};


startBtn.onclick = () =>{
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
};

stopBtn.onclick = () =>{
    clearInterval(Interval);
};

resetBtn.onclick = () =>{
    clearInterval(Interval);
    second = '00';
    minute = '00';
    hour = '00';
    appendSecond.innerHTML = second;
    appendMinute.innerHTML = minute;
    appendHour.innerHTML = hour;
};
};

