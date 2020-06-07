function filter() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('filter_search');
	filter = input.value.toLowerCase();
	ul = document.getElementsByClassName("media-container")[0];
	li = ul.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		filter_values = filter.split(" ");
		for (var j = filter_values.length - 1; j >= 0; j--) {
			filter_word = filter_values[j];
			if (txtValue.toLowerCase().indexOf(filter_word) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
				break;
			}
		}
	}
}
