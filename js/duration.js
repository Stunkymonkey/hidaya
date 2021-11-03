'use strict'

function calcDuration () { // eslint-disable-line no-unused-vars
  const durationDivs = document.querySelectorAll('.calc-duration')
  for (let i = 0; i < durationDivs.length; i++) {
    const durationDiv = durationDivs[i]
    const secNum = parseInt(durationDiv.textContent, 10)
    if (secNum === 0) {
      durationDiv.innerHTML = "<span class='icon-clock'> n/a </span>"
      continue
    }
    const hours = Math.floor(secNum / 3600)
    let minutes = Math.floor((secNum - (hours * 3600)) / 60)
    let seconds = secNum - (hours * 3600) - (minutes * 60)

    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    durationDiv.innerHTML = "<span class='icon-clock'> " + hours + 'h ' + minutes + 'm </span>'// + seconds + "s"
  }
}
