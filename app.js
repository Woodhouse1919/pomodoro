const timer = document.getElementById('timer')
const startBtn = document.getElementById('startButton')
const pomodoroBtn = document.getElementById('pomodoro')
const shortBreakBtn = document.getElementById('shortBreak')
const longBreakBtn = document.getElementById('longBreak')
buttonSettings()


startBtn.addEventListener('click', () => {
    if (startBtn.innerHTML === 'START'){
        startBtn.innerHTML = 'STOP'
    } else {
        startBtn.innerHTML = 'START'
    } 
})

function buttonSettings() {
pomodoroBtn.addEventListener('click', () => {
    shortBreakBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = 'transparent'
    pomodoroBtn.style.backgroundColor = '#ce5c58'
    timer.innerHTML = '25:00'
    
})
shortBreakBtn.addEventListener('click', () => {
    pomodoroBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = 'transparent'
    shortBreakBtn.style.backgroundColor = '#ce5c58'
    timer.innerHTML = '5:00'
})
longBreakBtn.addEventListener('click', () => {
    pomodoroBtn.style.backgroundColor = 'transparent'
    shortBreakBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = '#ce5c58'
    timer.innerHTML = '10:00'
})
}
const startingMinutes = 25;
let time = startingMinutes * 60;



setInterval(countdown, 1000)

function countdown() {
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`
    time--;
}







// #ce5c58
    
