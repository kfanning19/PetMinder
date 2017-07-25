$(document).ready(function(){
	var petForm= $('form#addPet-form');
	var name = $('input#addPet-name');
	var type = $('input#addPet-type');
	var breed = $('input#addPet-breed');
	var dob = $('input#addPet-DOB');
	var toy = $('input#addPet-toy');
	var image = $('input#addPet-image');

	petForm.on('submit', function(event){
		event.preventDefault();
		var petData = {
			name: name.val.trim(),
			type: type.val.trim(),
			breed: breed.val.trim(),
			dob: dob.val.trim(),
			toy: toy.val.trim(),
			image: image.val.trim()
		}

		addNewPet(petData.name, petData.type, petData.breed, petData.dob, petData.toy, petData.image);
	});
	// Post the information from the form
	function(name, type, breed, dob, toy, image){
		$.post('/create/pet', {
			name: name,
			animal_type: type,
			breed: breed, 
			dob: dob,
			favorite_toy: toy,
			image: image
		})
		// if it goes through, they will be redirected back to their profile page, if not it will show an error
	}
})