var watch = ''
var miliseconds = 0
var secs = 0;
var minuts = 0;
var hours = 0;

var startButton = document.getElementById('StartBtn')
var stopButton = document.getElementById('StopBtn')

function startWatch() {
    startButton.className = 'hidden'
    watch = setInterval(function () {
        miliseconds += 1
        document.getElementById('miliSecs').innerText = miliseconds + 'ms'
        if (miliseconds === 99) {
            miliseconds = 0
            secs += 1
            document.getElementById('secs').innerText = secs + 's :'
            if (secs === 60) {
                secs = 0
                minuts += 1
                document.getElementById('minuts').innerText = minuts + 'm :'
                if (minuts === 60) {
                    minuts = 0
                    hours += 1
                    document.getElementById('hours').innerText = hours + 'h :'
                }
            }
        }
        stopButton.className = 'visible'
    }, 10)
}
function stopWatch() {
    stopButton.className = 'hidden'
    clearInterval(watch);
    startButton.className = 'visible'
}
function reset() {
    clearInterval(watch);
    var milliseconds = document.getElementById('miliSecs')
milliseconds.innerText = 'ms'
var myseconds;
var myminuts;
var myhours;
myseconds = document.getElementById('secs').innerText = 's'
myminuts = document.getElementById('minuts').innerText = 'm'
myhours = document.getElementById('hours').innerText = 'h'
}
function lapTime(){
  document.getElementById('lap').innerHTML += hours + ':' + minuts + ':' + secs + ':' + miliseconds + '\n'
}

function clearlap(){
    document.getElementById('lap').innerHTML = ""

}