$(function(){
	console.log('register.js modified called...');

	var mayRegister = false;

	//FIXME lewat validasi userLoginId baru di-unhide
	//FIXME semua validasi harus dilakukan di depan juga, walaupun di belakang divalidasi juga.
	

	$("#formRegistrationUserEmail").change(function() {
		var usr = $("#formRegistrationUserEmail").val();
		if(usr.length >= 7){
			//FIXME harusnya tetap ngecek validasi format email

			$("#status").html('<img align="absmiddle" src="loader.gif" /> Checking availability...');
			
			var parameters = { 
				pdid: localStorage['pdid'],
				drid: localStorage['drid'],
				newUserLoginId: usr
			}				
			getData("checkUserName", parameters, function(data){
				if(data.wpCode == "999"){
					$("#formRegistrationUserEmail").removeClass('object_error'); // if necessary
					$("#formRegistrationUserEmail").addClass("object_ok");
					$("#status").html(' <img align="absmiddle" src="accepted.png" /> ');
					mayRegister = true;
					//FIXME button submit dibuat enable
					//FIXME kolom username difreeze, kolom yang lain dinyalain
					alert("OK");
				}else{
					$("#formRegistrationUserEmail").removeClass('object_ok'); // if necessary
					$("#formRegistrationUserEmail").addClass("object_error");
					$("#status").html('This username is not available');
					//FIXME button submit dibuat disable
					//FIXME kolom username di-enable, kolom yang lain dimatiin
					alert("Not OK");
				}	
			});// end getData
			
		}else{
			$("#status").html('The username should have at least 3 characters.');
			$("#formRegistrationUserEmail").removeClass('object_ok'); // if necessary
			$("#formRegistrationUserEmail").addClass("object_error");
		}// end if else length
	});

	$( "#formRegistration" ).submit(function( event ) {
		event.preventDefault();
		// FIXME just to be sure. actually the button must be disable
		if(mayRegister == true){
			var parameters = { 
				pdid: localStorage['pdid'],
				drid: localStorage['drid'],
				newFullName: $('#formRegistrationUserFullName').val(),
				newUserLoginId: $('#formRegistrationUserEmail').val(),
				newPassword: $('#formRegistrationUserPassword').val(),
				newPasswordConfirm: $('#formRegistrationUserPasswordConfirm').val()
			}
			
			getData("userRegistration", parameters, function(data){
				if (data.wpCode == 999) {
					console.log("dtk: "+response.dtk);
					localStorage.setItem("User", JSON.stringify(response.User));
					localStorage.setItem("dtk",response.dtk);
					console.log("seharusnya ke hub");
					window.location.href = "hub.html";
				}else{
					console.log("something not right happened...");
					console.log("error code: "+data.wpCode);
					console.log("error message: "+data.wpMessage);
					
					// FIXME seharusnya notifikasi atau apa gitu
					// hati hati async
					alert("error code: "+data.wpCode+", error message: "+data.wpMessage);
				}
			});
		}else{
			alert("you may not register due to, e.g. userLoginId");
		}// end if mayRegister
	});// end submit

	console.log('register.js finished...');
})// end $
