const timer = document.getElementById('timer')
const startBtn = document.getElementById('startButton')
const pomodoroBtn = document.getElementById('pomodoro')
const shortBreakBtn = document.getElementById('shortBreak')
const longBreakBtn = document.getElementById('longBreak')
pomodoroBtn.style.backgroundColor = '#ce5c58'


startBtn.addEventListener('click', () => {
    if (startBtn.innerHTML === 'START'){
        startBtn.innerHTML = 'STOP'
    } else {
        startBtn.innerHTML = 'START'
    } 
})









// #ce5c58
    
