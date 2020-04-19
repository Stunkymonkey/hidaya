function media_available(){
	var play_div = document.getElementById("play-media");
	var protocol = document.location.href;
	var is_local = protocol.startsWith("file://");
	if (!is_local) {
		play_div.style.visibility = 'hidden';
	}
}