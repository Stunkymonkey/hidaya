'use strict'

function check_original_title () {
  var title_div = document.getElementsByClassName('title')[0]
  var title_image = title_div.getElementsByTagName('img')[0]
  var title = title_image.alt
  var original_title_div = document.getElementsByClassName('original-title')[0]
  if (original_title_div) {
    var original_title = original_title_div.innerHTML.replace('Original Title: ', '')
    if ((title === original_title) || (original_title === '')) {
      original_title_div.style.visibility = 'hidden'
    }
  }
}
