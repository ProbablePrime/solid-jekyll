(function (window,$) {
	var jekyllTwitch = {};
	var baseURL = "https://api.twitch.tv/kraken/streams/";
	jekyllTwitch.isOnline = function(channel,cb) {
		console.log('sdijfosijfosijdfois');
		var def = $.Deferred();
		$.getJSON(baseURL+channel).done(function(response){
			console.log(response);
			if(response.stream !== null) {
				def.resolve(true);
			}
			def.resolve(false);
		}).fail(function(response){
			console.log(response);
			console.log('idsfijsodfijsdf');
			def.resolve(false);
		});
		return def.promise();
	}
	window.jekyllTwitch = jekyllTwitch;
}(window,jQuery)); 