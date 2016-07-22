$(document).ready(function(){

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
		$("#contacts-ul").append("<li class='contacts-li' id='" + counter + "'>" + contactsArray[counter].firstName + " " + contactsArray[counter].lastName + "</li>");
		counter++;
		$("form")[0].reset();
		$("li.contacts-li").click(function(e){
			e.preventDefault();
			$('#sidebar-fullname').text(contactsArray[event.target.id].firstName + " " + contactsArray[event.target.id].lastName);
			$('#sidebar-firstname').text("First name: " + contactsArray[event.target.id].firstName);
			$('#sidebar-lastname').text("Last name: " + contactsArray[event.target.id].lastName);
			$('#sidebar-phone').text("Phone number: " + contactsArray[event.target.id].phone);
			$('#sidebar-address').text("Address: " + contactsArray[event.target.id].street + ", " + contactsArray[event.target.id].city + " " + contactsArray[event.target.id].state);
		});
	});

//end
});

