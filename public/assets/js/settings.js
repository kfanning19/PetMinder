$(document).ready(function() {
  $('select').material_select();
  displayShared(PHILOPETS.petId)


function displayShared(id) {
        $.get(`/api/profile/pet/settings/${id}`)
            .then(function(user) {
            	console.log(user)
                for (var i = 0; i < user.length; i++) {

                var shared = user[i];

                var newCard = `<div class="col s6 m4">
                                    <div class="card horizontal">
                                        <div class="card-image">
                                            <img src="${shared.image}">
                                        </div>
                                        <div class="card-stacked">
                                            <div class="card-content">
                                              	<h3>${shared.first_name} ${shared.last_name}</h3>
                                                <p>${shared.email}</p>
                                                <p>${shared.phone}</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>`

                $("#display-shared").append(newCard)
            }
       });


};

$("form#shareForm").on('submit', function(event){
 	event.preventDefault();
 	var newEmail = $("#share-pet-button").val().trim();
 	addUser(PHILOPETS.petId, newEmail);
 })

function addUser(id, email) {
	
	
	$.post(`/add/user/${id}`, {
		email: email
	})
	.then(()=>{
		window.location.href = `/profile/pet/${id}`

	})		

}

$("#remove-pet-button").on('click', function(){
	$.post(`/api/pet/${PHILOPETS.petId}`)
	.then(()=>{
		window.location.href = `/profile/user`

	})	

});

});
