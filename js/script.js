//custom javascript


//front-end 
$(document).ready(function() {
	$("input.btn").click(function(event) { 
		event.preventDefault();
		var userAge = parseInt($("input.field").val()); 
		var userGender = $("select#gender").val();
		//var smith = $("div.replace").slideToggle();
		//var fifty = $("#replace2").slideToggle();
		//var miley = $("div#replace4").slideToggle();
		//var meagan = $("div#replace5").slideToggle();

     
		var suggestion = function(userAge, userGender) {
			if(userAge < 18) {
				alert("You have to be 18 and over to be matched!");
			} else if((userAge >= 18) && (userGender === "male")) {
				chooseFemale();
			} else if((userAge >= 18) && (userGender === "female")) {
				chooseMale();
			} else {
				alert("please fill the form to continue!");
			}

		};

		function chooseMale(userAge) {
				if(25 >= userAge <=30) {
					$("div#replace2").slideToggle();
				} else if(35 <= userAge >= 49) {
					$("div.replace").slideToggle();
				} else {
					$("div#replace3").slideToggle();
				}
			};


		function chooseFemale(userAge) {
				if(25 >= userAge <= 30) {
					$("div#replace6").slideToggle();
				} else if(userAge === 35) {
					$("dive#replace5").slideToggle();
				} else {
					$("div#replace4").slideToggle();
				}
			};


		
	var result = suggestion(userAge, userGender);

 	});
 	$("button.newbtn").click(function() {
 		location.reload();
 	});
});