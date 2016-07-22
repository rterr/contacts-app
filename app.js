$(document).ready({

	function Contactscreator(firstName, lastName, phone, street, city, state) {
	 
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.phone = phone;
	  this.street = street;
	  this.city = city;
	  this.state = state;
	  // this.toString = function () {
	  //   return this.firstName + " " + this.lastName + " " + this.phone + " " + this.street + " " + this.city + " " + this.state;
	  // };
	}
	 
	// Usage:

	// We can create new instances of the contactsArray
	var contactsArray = [];
	var counter = 0;
	$("#contact-submit").click(function(e){
		e.preventDefault();
		contactsArray[counter] = new Contactscreator(
		$('#input-firstname').val(), 
		$('#input-lastname').val(), 
		$('#input-phone').val(), 
		$('#input-street').val(), 
		$('#input-city').val(), 
		$('#input-state').val()
		);
		console.log(counter + ' firstname: ' + contactsArray[counter].firstName);
		console.log(counter + ' phone: ' + contactsArray[counter].phone);
		console.log(counter + ' state: ' + contactsArray[counter].state);
		counter++;
		$("form")[0].reset();
	
		
	})

})