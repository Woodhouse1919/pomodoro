// Grabbing DOM Elements
const timer = document.getElementById('timer')
const startBtn = document.getElementById('startButton')
const pomodoro = document.getElementById('pomodoro')
const shortBreak = document.getElementById('shortBreak')
const longBreak = document.getElementById('longBreak')
const title = document.querySelector('title')


const soundEffect = new Audio();


// Initial Timer settings
let isClockRunning = false
let startingMinutes =  25
let time =  startingMinutes * 60
pomodoro.classList.add("active") 
buttonSettings()

clockTimer = setInterval(() => {
    countdown()
}, 1000)
clearInterval(clockTimer)

function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`
    title.innerHTML = `Pomodoro Timer: ${minutes}:${seconds}`
    time--;
        if (minutes == 0 && seconds == 00) {
            clearInterval(clockTimer)
            soundEffect.src = 'http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Gene.mp3';
            soundEffect.play();
            title.innerHTML = `Times Up!`
                if (pomodoro.classList.contains("active")) {
                    shortBreakActive()
                    reset() 
                } else {
                    pomodoroActive()
                    reset()
                }
        }
}
            
    
        
// Start/Stop button logic
startBtn.addEventListener('click', () => {
   
    if (isClockRunning === true) {
        clearInterval(clockTimer)
        isClockRunning = false
        startBtn.innerHTML = 'START'
        
    } else {
        clockTimer = setInterval(() => {
            countdown()
        }, 1000)
        isClockRunning = true
        startBtn.innerHTML = 'STOP'
        soundEffect.src = '';
        soundEffect.play();
    } 
})


function buttonSettings() { 
    
pomodoro.addEventListener('click', () => {
    pomodoroActive()
    reset()
})
shortBreak.addEventListener('click', () => {
    shortBreakActive()
    reset()
})
longBreak.addEventListener('click', () => {
    longBreakActive()
    reset()
})
}
    
    
function reset() {
    if (pomodoro.classList.contains("active")) {
        title.innerHTML = `Pomodoro Timer: 25:00`
        timer.innerHTML = '25:00'
        startBtn.innerHTML = 'START'
    
        time = 1500
        isClockRunning = false
        pomodoro.disabled = true
        shortBreak.disabled = false
        longBreak.disabled = false
    
        clearInterval(clockTimer)
    } else if (shortBreak.classList.contains("active")) {
        title.innerHTML = `Pomodoro Timer: 5:00`
        timer.innerHTML = '5:00'
        startBtn.innerHTML = 'START'
    
        time = 300
        isClockRunning = false
        pomodoro.disabled = false
        shortBreak.disabled = true
        longBreak.disabled = false
    
        clearInterval(clockTimer)
    } else  if (longBreak.classList.contains("active")){
        title.innerHTML = `Pomodoro Timer: 10:00`
        timer.innerHTML = '15:00'
        startBtn.innerHTML = 'START'
    
        time = 900
        isClockRunning = false
        pomodoro.disabled = false
        shortBreak.disabled = false
        longBreak.disabled = true
    
        clearInterval(clockTimer)
    }
}

function pomodoroActive () {
    pomodoro.classList.add("active")
    shortBreak.classList.remove("active")         
    longBreak.classList.remove("active")
    
    shortBreak.style.backgroundColor = 'transparent'
    longBreak.style.backgroundColor = 'transparent'
    pomodoro.style.backgroundColor = '#ce5c58'
    
}

function shortBreakActive () {
    pomodoro.classList.remove("active")
    shortBreak.classList.add("active") 
    longBreak.classList.remove("active") 
    
    pomodoro.style.backgroundColor = 'transparent'
    longBreak.style.backgroundColor = 'transparent'
    shortBreak.style.backgroundColor = '#ce5c58'
}

function longBreakActive () {
    pomodoro.classList.remove("active")
    shortBreak.classList.remove("active") 
    longBreak.classList.add("active")
    
    pomodoro.style.backgroundColor = 'transparent'
    shortBreak.style.backgroundColor = 'transparent'
    longBreak.style.backgroundColor = '#ce5c58'
    }
        
        
        
        







    
    
