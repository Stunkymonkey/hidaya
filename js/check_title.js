'use strict'

function checkOriginalTitle () { // eslint-disable-line no-unused-vars
  const titleDiv = document.getElementsByClassName('title')[0]
  const titleImage = titleDiv.getElementsByTagName('img')[0]
  const title = titleImage.alt
  const originalTitleDiv = document.getElementsByClassName('original-title')[0]
  if (originalTitleDiv) {
    const originalTitle = originalTitleDiv.innerHTML.replace('Original Title: ', '')
    if ((title === originalTitle) || (originalTitle === '')) {
      originalTitleDiv.style.visibility = 'hidden'
    }
  }
}
