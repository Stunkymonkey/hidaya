'use strict'

function filter () {
  var input = document.getElementById('filter_search')
  var filter = input.value.toLowerCase()
  var ul = document.getElementsByClassName('media-container')[0]
  var li = ul.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0]
    var txtValue = a.textContent || a.innerText
    var filter_values = filter.split(' ')
    for (var j = filter_values.length - 1; j >= 0; j--) {
      var filter_word = filter_values[j]
      if (txtValue.toLowerCase().indexOf(filter_word) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
        break
      }
    }
  }
}
