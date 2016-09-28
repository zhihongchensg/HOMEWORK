document.addEventListener('DOMContentLoaded', init)

function init () {
  var reset = document.querySelector('#reset')
  var start = document.querySelector('#start')
  var pause = document.querySelector('#pause')
  var timerId = document.querySelector('#timer')
  var seconds = 0
  var setTimeId = ""

  reset.addEventListener('click', timeReset)
  start.addEventListener('click', timeStart)
  pause.addEventListener('click', timePause)

  function updateTime(){
    seconds = seconds + 1
    timerId.textContent = seconds
    timerId.id = "timer"
  }

  function timeReset () {
    window.clearInterval(setTimeId)
    seconds = 0
    timerId.textContent = "Stop Watch"
  }

  function timeStart () {
    // timerId.textContent = seconds
    setTimeId = window.setInterval(updateTime, 1000)
  }

  function timePause () {
    window.clearInterval(setTimeId)
  }
}
