'use strict'

function fillEmptyListings () { // eslint-disable-line no-unused-vars
  const listingDivs = document.getElementsByClassName('listing')
  for (let i = 0; i < listingDivs.length; i++) {
    const listingDiv = listingDivs[i]
    const text = [].reduce.call(listingDiv.childNodes, function (a, b) { return a + (b.nodeType === 3 ? b.textContent : '') }, '')
    const cleanText = text.replace(/\s/g, '')
    if (cleanText === '') {
      if (listingDiv.getElementsByTagName('li').length === 0) {
        listingDiv.innerHTML += '—'
      }
    }
  }
}
