function movie_available(){
	var play_div = document.getElementById("play-movie");
	var protocol = document.location.href;
	var is_local = protocol.startsWith("file://");
	if (!is_local) {
		play_div.style.visibility = 'hidden';
	}
}