'use strict'

function media_available () {
  var playMediaLinks = document.querySelectorAll('.play-media')
  for (let i = 0; i < playMediaLinks.length; i++) {
    var protocol = document.location.href
    var is_local = protocol.startsWith('file://')
    if (!is_local) {
      playMediaLinks[i].style.visibility = 'hidden'
    }
  }
}
