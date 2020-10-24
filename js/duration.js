'use strict'

function calc_duration () {
  var duration_divs = document.querySelectorAll('.jsCalcDuration')
  for (let i = 0; i < duration_divs.length; i++) {
    var duration_div = duration_divs[i]
    var sec_num = parseInt(duration_div.textContent, 10)
    if (sec_num == 0) {
      duration_div.innerHTML = "<span class='icon-clock'> n/a </span>"
      continue
    }
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    var seconds = sec_num - (hours * 3600) - (minutes * 60)

    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    duration_div.innerHTML = "<span class='icon-clock'> " + hours + 'h ' + minutes + 'm </span>'// + seconds + "s"
  }
}
