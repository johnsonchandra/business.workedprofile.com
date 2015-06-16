$(function(){
	console.log('register.js called...');
	//FIXME seharusnya begitu ketik userLoginId harus langsung ajax check ke belakang
	//FIXME atau dibuat 2 step
	
//	$( "#formRegistrationUserEmail" ).keyup(function() {
//		var value = $( this ).val();
//		alert(value);
//	}).keyup();
	
	$( "#formRegistration" ).submit(function( event ) {
		event.preventDefault();
		$.ajax({
			url: wp_url+"wpRegisterNewPerson",
			data: { 
				pdid: pdid,
				drid: drid,
				newFullName: $('#formRegistrationUserFullName').val(),
				newUserLoginId: $('#formRegistrationUserEmail').val(),
				newPassword: $('#formRegistrationUserPassword').val(),
				newPasswordConfirm: $('#formRegistrationUserPasswordConfirm').val(),
		
			},
			type: "POST",
			cache: false,
			dataType: 'json',
			
			success: function(response, status, xhr) {
				console.log("wpRegisterNewPerson responded...");
				
				if (response.wpCode == 999) {
					console.log("seharusnya ke hub");
					
					
				}else{
					console.log("something not right happened...");
					console.log("error code: "+response.wpCode);
					console.log("error message: "+response.wpMessage);
					
					// FIXME
					// hati hati async
					alert("error code: "+response.wpCode+", error message: "+response.wpMessage);
				}
				
			},
			error: function(xhr, status, error) {
				console.log("error in contacting wpRegisterNewPerson...");
				console.log(xhr, status, error);

				// FIXME
				// harus dibuang ke page awal aja. hati hati async
				alert("error : "+error+", xhr: "+xhr+", status: "+status);
			}
		});
	});
	
})// end $