window.shownads = 0;



function createAd(type) {
	if (shownads >=	 2) {
		console.log( "Too many ads have been placed. Not rendering")
		return -1;
	}
	if (type == "fullscreen") {
		let interstitial_1 = document.createElement("script")
		interstitial_1.src = "//thubanoa.com/1?z=8195577"
		interstitial_1.type = "text/javascript"
		interstitial_1.async= "async"
		interstitial_1.dataCfasync = "false"
		document.head.appendChild(interstitial_1)
		window.shownads++
		return 0;
	}	

	console.log("Invalid ad type")
	return 1;
}


