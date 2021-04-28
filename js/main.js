const countContainer = document.querySelector('.count-container');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
let interval;
let hr = 0;
let min = 0;
let sec = 0;

startBtn.addEventListener('click', timeCycle)
function timeCycle(){

    min = parseInt(min)
    hr = parseInt(hr)

    sec++
    
    if(sec == 60){
        sec = 0
        min++
    }
    
    if(min == 60){
        hr++
        min = 00
    }

    if(sec < 10){
        sec = "0" + sec
    }

    if(min < 10){
        min = `0${min}`
    }

    if(hr < 10){
        hr=`0${hr}`
    }

    countContainer.innerHTML = `${hr}:${min}:${sec}`

    interval = setTimeout(timeCycle,1000)
}

stopBtn.addEventListener('click', function(){
    clearTimeout(interval)
})

resetBtn.addEventListener('click', function(){
    hr = 0
    min = 0
    sec = 0
    countContainer.innerHTML = `0${hr}:0${min}:0${sec}`
    clearTimeout(interval)
})

