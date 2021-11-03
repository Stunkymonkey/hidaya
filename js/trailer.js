'use strict'

function createTrailerIFrame () { // eslint-disable-line no-unused-vars
  const videos = document.getElementsByClassName('trailer')
  for (let i = 0; i < videos.length; i++) {
    const youtube = videos[i]

    // get the youtube id and fetch thumbnail
    const youtubeId = youtube.id.replace('plugin://plugin.video.youtube/?action=play_video&videoid=', '')

    if (youtubeId === '') {
      const labels = {}
      const tags = document.getElementsByTagName('label')
      const l = tags.length
      for (let j = 0; j < l; j++) {
        console.log(j)
        labels[tags[j].getAttribute('for')] = tags[j]
        console.log(tags[j].getAttribute('for'))
        if (tags[j].getAttribute('for') === 'trailer') {
          tags[j].parentNode.removeChild(tags[j])
        }
      };
    }

    const img = document.createElement('img')
    img.setAttribute('src', 'http://i.ytimg.com/vi/' + youtubeId + '/maxresdefault.jpg')
    img.setAttribute('class', 'thumb')
    youtube.appendChild(img)

    // have overlay play button
    const circle = document.createElement('div')
    circle.setAttribute('id', 'play-trailer')
    circle.innerHTML = "<h2 class='icon-youtube-play'></h2>"
    youtube.appendChild(circle)

    // if clicked the real video should play
    youtube.onclick = function () {
      // create an iFrame with autoplay
      const iframe = document.createElement('iframe')
      const youtubeId = youtube.id.replace('plugin://plugin.video.youtube/?action=play_video&videoid=', '')
      iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + youtubeId + '?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1')
      iframe.setAttribute('allowfullscreen', '')

      // replace the thumbnail with HTML5 player
      this.parentNode.replaceChild(iframe, this)
    }
  }
}
