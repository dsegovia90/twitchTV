$(document).ready(function() {
	

	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp', function(json, textStatus) {
			if (json.error === undefined) {
				$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp', function(json, textStatus) {
						if (json.stream == null) {
							$("#fcc-p").html("Offline");
						}else{
							$("#fcc-p").html(json.stream);
						};
				});
			}else{
				
			}
	});

	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/comster404', function(json, textStatus) {
			if (json.error === undefined) {
				$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/comster404', function(json, textStatus) {
						if (json.stream == null) {
							$("#comster404-p").html("Offline");
						}else{
							$("#comster404-p").html(json.stream);
						};
				});
			}else{
				$("#noExist-p").html("User does not exist.");
			}
	});

	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/doublelift', function(json, textStatus) {
			if (json.error === undefined) {
				$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/doublelift', function(json, textStatus) {
						if (json.stream == null) {
							$("#doublelift-p").html("Offline");
						}else{
							$("#doublelift-p").html(json.stream.game + ". Viewers: " + json.stream.viewers);
						};
				});
			}else{
				$("#doublelift-p").html("User does not exist.");
			}
	});




	

	

	


});