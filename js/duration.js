function calc_duration(){
	var duration_div = document.getElementById("duration");
	var sec_num = parseInt(duration_div.textContent, 10);
	if (sec_num == 0) {
		duration_div.innerHTML = "&#xe803; n/a";
		return;
	}
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}
	duration_div.innerHTML = "&#xe803; " + hours + "h " + minutes + "m "// + seconds + "s"
}