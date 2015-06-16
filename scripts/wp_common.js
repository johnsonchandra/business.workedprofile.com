/* WP Script for ALL pages*/
var wp_url = "http://localhost:8080/json/";
var ver = "wp.95.20150522"


console.log('wp_common called...');

if (Modernizr.localstorage) {
	console.log("window.localStorage is available");
	console.log("wp_url: "+wp_url);
	console.log("ver: "+ver);
	
	var pdid = localStorage["pdid"];
	console.log("pdid: "+pdid);
	
	var drid = localStorage["drid"];
	console.log("drid: "+drid);
	
	if(pdid == null || drid == null){
		console.log("pdid or drid is null, now trying to get pdid from backend");
		drid = acak(1,100000000000,0);	
		registerNewDevice(ver,drid);
	}
} else {
	console.log("window.localStorage is NOT available");
	alert("NOT SUPPORTED");
	//FIXME seharusnya ngapain gitu, biar gak bisa buka yang selanjutnya, karena ini common js

}

function checkDevice(){
	var userAgent = navigator.userAgent.toLowerCase();
	if( /windows phone/i.test(userAgent) ){
		return "windowsPhone";
	}else
	if( /android/i.test(userAgent) ){
		return "Android";
	}else
	if( /ipad|iphone|ipod/i.test(userAgent) ){
		return "iOS";
	}else{
		return "Browser";
	}
}// end checkDevice

function acak(min, max, whole) {
	console.log("acak called...");
	return void 0===whole||!1===whole?Math.random()*(max-min+1)+min:!isNaN(parseFloat(whole))&&0<=parseFloat(whole)&&20>=parseFloat(whole)?(Math.random()*(max-min+1)+min).toFixed(whole):Math.floor(Math.random()*(max-min+1))+min;
};

function registerNewDevice(ver,drid){
	console.log("registerNewDevice called...");
	var jawaban = false;
	
	$.ajax({
		url: wp_url+"registerNewDevice",
		data: { 
			ver: ver,
			drid: drid,
			userDevice: checkDevice()
		},
		type: "POST",
		cache: false,
		dataType: 'json',
		
		success: function(response, status, xhr) {
			console.log("registerNewDevice responded...");
			
			if (response.wpCode == 999) {
				console.log("now writing to local storage");
				
				localStorage.setItem("pdid",response.pdid);
				localStorage.setItem("drid",drid);
				
			}else{
				console.log("something not right happened...");
				console.log("error code: "+response.wpCode);
				console.log("error message: "+response.wpMessage);
				
				// FIXME harus dibuang ke page error aja. hati hati async
				alert("error code: "+response.wpCode+", error message: "+response.wpMessage);
			}
			
		},
		error: function(xhr, status, error) {
			console.log("error in contacting registerNewDevice...");
			console.log(xhr, status, error);
			// FIXME harus dibuang ke page awal aja. hati hati async
			// window.location.href = "error.html";
		}
	});
}; // end registerNewDevice

