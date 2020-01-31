function create_trailer_iframe() {
	var videos = document.getElementsByClassName("trailer");
	for (var i=0; i<videos.length; i++) {
		var youtube = videos[i];

		// get the youtube id and fetch thumbnail
		var img = document.createElement("img");
		var youtube_id = youtube.id.replace("plugin://plugin.video.youtube/?action=play_video&videoid=", "");

		img.setAttribute("src", "http://i.ytimg.com/vi/" + youtube_id + "/hqdefault.jpg");
		img.setAttribute("class", "thumb");

		// have overlay play button
		var circle = document.createElement("div");
		circle.setAttribute("class","circle");

		youtube.appendChild(img);
		youtube.appendChild(circle);

		// if clicked the real video should play
		youtube.onclick = function() {
			// create an iFrame with autoplay
			var iframe = document.createElement("iframe");
			var youtube_id = youtube.id.replace("plugin://plugin.video.youtube/?action=play_video&videoid=", "");
			iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + youtube_id
			+ "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

			// use same hight and width of parent
			iframe.style.width  = this.style.width;
			iframe.style.height = this.style.height;

			// replace the thumbnail with HTML5 player
			this.parentNode.replaceChild(iframe, this);
		};
	}
}

window.onload = create_trailer_iframe;