'use strict'

function filter () { // eslint-disable-line no-unused-vars
  const input = document.getElementById('filter-search')
  const filter = input.value.toLowerCase()
  const ul = document.getElementsByClassName('media-container')[0]
  const li = ul.getElementsByTagName('li')

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0]
    const txtValue = a.textContent || a.innerText
    const filterValues = filter.split(' ')
    for (let j = filterValues.length - 1; j >= 0; j--) {
      const filterWord = filterValues[j]
      if (txtValue.toLowerCase().indexOf(filterWord) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
        break
      }
    }
  }
}
