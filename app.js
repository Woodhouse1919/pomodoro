const timer = document.getElementById('timer')
const startBtn = document.getElementById('startButton')
const pomodoroBtn = document.getElementById('pomodoro')
const shortBreakBtn = document.getElementById('shortBreak')
const longBreakBtn = document.getElementById('longBreak')
const title = document.querySelector('title')

let isClockRunning = false
let startingMinutes =  25
let time =  startingMinutes * 60

clockTimer = setInterval(() => {
    countdown()
}, 1000)
clearInterval(clockTimer)


pomodoroBtn.disabled = true
buttonSettings()

function countdown() {
       const minutes = Math.floor(time / 60);
       let seconds = time % 60;
       seconds = seconds < 10 ? '0' + seconds : seconds;
       timer.innerHTML = `${minutes}:${seconds}`
       title.innerHTML = `Pomodoro Timer: ${minutes}:${seconds}`
       time--;
}

startBtn.addEventListener('click', () => {
   
    if (isClockRunning === true){
        clearInterval(clockTimer)
        isClockRunning = false
        startBtn.innerHTML = 'START'
        
    } else {
        clockTimer = setInterval(() => {
            countdown()
        }, 1000)
        isClockRunning = true
        startBtn.innerHTML = 'STOP'
    } 
})


function buttonSettings() {
pomodoroBtn.addEventListener('click', () => {
    shortBreakBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = 'transparent'
    pomodoroBtn.style.backgroundColor = '#ce5c58'
    title.innerHTML = `Pomodoro Timer: 25:00`
    timer.innerHTML = '25:00'
    startBtn.innerHTML = 'START'
    time = 1500
    isClockRunning = false
    pomodoroBtn.disabled = true
    shortBreakBtn.disabled = false
    longBreakBtn.disabled = false
    clearInterval(clockTimer)
    
})
shortBreakBtn.addEventListener('click', () => {
    pomodoroBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = 'transparent'
    shortBreakBtn.style.backgroundColor = '#ce5c58'
    title.innerHTML = `Pomodoro Timer: 5:00`
    timer.innerHTML = '5:00'
    startBtn.innerHTML = 'START'
    time = 300
    isClockRunning = false
    pomodoroBtn.disabled = false
    shortBreakBtn.disabled = true
    longBreakBtn.disabled = false
    clearInterval(clockTimer)
    
})
longBreakBtn.addEventListener('click', () => {
    pomodoroBtn.style.backgroundColor = 'transparent'
    shortBreakBtn.style.backgroundColor = 'transparent'
    longBreakBtn.style.backgroundColor = '#ce5c58'
    title.innerHTML = `Pomodoro Timer: 10:00`
    timer.innerHTML = '10:00'
    startBtn.innerHTML = 'START'
    time = 600
    isClockRunning = false
    pomodoroBtn.disabled = false
    shortBreakBtn.disabled = false
    longBreakBtn.disabled = true
    clearInterval(clockTimer)
})
}
    
    
    


        

        
        
        
        






    
    
