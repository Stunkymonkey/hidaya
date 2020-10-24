'use strict'

function fill_empty_listings () {
  var listing_divs = document.getElementsByClassName('listing')
  for (var i = 0; i < listing_divs.length; i++) {
    var listing_div = listing_divs[i]
    var text = [].reduce.call(listing_div.childNodes, function (a, b) { return a + (b.nodeType === 3 ? b.textContent : '') }, '')
    var clean_text = text.replace(/\s/g, '')
    if (clean_text === '') {
      if (listing_div.getElementsByTagName('li').length == 0) {
        listing_div.innerHTML += '—'
      }
    }
  }
}
