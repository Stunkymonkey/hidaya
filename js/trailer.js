'use strict'

function create_trailer_iframe () {
  var videos = document.getElementsByClassName('trailer')
  for (var i = 0; i < videos.length; i++) {
    var youtube = videos[i]

    // get the youtube id and fetch thumbnail
    var youtube_id = youtube.id.replace('plugin://plugin.video.youtube/?action=play_video&videoid=', '')

    if (youtube_id === '') {
      var labels = {}
      var tags = document.getElementsByTagName('label')
      var l = tags.length
      for (var j = 0; j < l; j++) {
        console.log(j)
        labels[tags[j].getAttribute('for')] = tags[j]
        console.log(tags[j].getAttribute('for'))
        if (tags[j].getAttribute('for') === 'trailer') {
          tags[j].parentNode.removeChild(tags[j])
        }
      };
    }

    var img = document.createElement('img')
    img.setAttribute('src', 'http://i.ytimg.com/vi/' + youtube_id + '/maxresdefault.jpg')
    img.setAttribute('class', 'thumb')
    youtube.appendChild(img)

    // have overlay play button
    var circle = document.createElement('div')
    circle.setAttribute('id', 'play-trailer')
    circle.innerHTML = "<h2 class='icon-youtube-play'></h2>"
    youtube.appendChild(circle)

    // if clicked the real video should play
    youtube.onclick = function () {
      // create an iFrame with autoplay
      var iframe = document.createElement('iframe')
      var youtube_id = youtube.id.replace('plugin://plugin.video.youtube/?action=play_video&videoid=', '')
      iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + youtube_id + '?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1')
      iframe.setAttribute('allowfullscreen', '')

      // replace the thumbnail with HTML5 player
      this.parentNode.replaceChild(iframe, this)
    }
  }
}
