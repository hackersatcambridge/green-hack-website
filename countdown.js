const dateStart = new Date(2017, 2, 17, 10, 45, 0)
const dateEnd = new Date(2017, 2, 17, 20, 0, 0)
function setTimeRemaining () {
  const current = new Date()
  let timeLeft = 0
  if (current < dateStart) {
    document.getElementById('time-container').getElementsByTagName('p')[0].innerHTML = 'Time left to Hacking start:'
    timeLeft = dateStart.getTime() - current.getTime()
  } else {
    document.getElementById('time-container').getElementsByTagName('p')[0].innerHTML = 'Hack time remaining:'
    timeLeft = dateEnd.getTime() - current.getTime()
  }
  // Abort if time is up
  if (timeLeft < 0) {
    document.getElementById('big-timer').innerHTML = "Time's up!"/* "0:00<span id=\"seconds\">:00</span>"; */
    return
  }
  let hours = Math.floor(timeLeft / (1000 * 60 * 60))
  let mins = Math.floor(timeLeft / (1000 * 60) - hours * 60)
  let secs = Math.floor(timeLeft / 1000 - mins * 60 - hours * 60 * 60)
  document.getElementById('big-timer').innerHTML = hours + ':' + (mins < 10 ? '0' : '') + mins + '<span id="seconds">:' + (secs < 10 ? '0' : '') + secs + '</span>'
}
setTimeRemaining()
setInterval(setTimeRemaining, 1000)
