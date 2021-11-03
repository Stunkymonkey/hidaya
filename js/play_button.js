'use strict'

function mediaAvailable () { // eslint-disable-line no-unused-vars
  const playMediaLinks = document.querySelectorAll('.play-media')
  for (let i = 0; i < playMediaLinks.length; i++) {
    const protocol = document.location.href
    const isLocal = protocol.startsWith('file://')
    if (!isLocal) {
      playMediaLinks[i].href = 'javascript:void(0)'
    }
  }
}
