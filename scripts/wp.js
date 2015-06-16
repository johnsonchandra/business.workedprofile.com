/* WP Script */

console.log('Hallo - From WP');
/* JQuery Mobile Events Debugger */
/*
LoadScript('scripts/jquery.mobile.event.debugger.js', function() {
	$.mobile.eventLogger({
		deprecated: true,
		events: { page: true },
		widgets: { page: true, pagecontainer: true }
	});
});

function LoadScript(url, callback) {
	var script = document.createElement('script')
	if (script.readyState) {  // IE
		script.onreadystatechange = function() {
			if (script.readyState === 'loaded' || script.readyState === 'complete' ) {
				script.onreadystatechange = null;
				callback();
			}
		}
	} else {  // Others
		script.onload = function() {
			callback();
		}
	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
	console.log('Add Script From : "' + url + '"');
}
*/
