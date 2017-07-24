$(function() {
    getUserInfo();

// get the user info to display at the top of the screen
	function getUserInfo() {
	    $.get("/api/user/profile").then((user) => {
	        console.log(user)
            $('#user-image').append(`<img src="${user.image}" alt="${user.first_name}" >`);
            $('#user-name').append(`${user.first_name} ${user.last_name}`);
            $('#user-email').append(user.email);
            $('#user-phone').append(user.phone);

    		for (var i = 0; i < user.Pets.length; i++) {

    			var pet = user.Pets[i];

        		var newCard = `<div class="col s6 m4">
             						<div class="card horizontal">
            							<div class="card-image">
            								<img src="${pet.image}">
            							</div>
            							<div class="card-stacked">
            								<div class="card-content">
            									<p>${pet.name}</p>
            									<p>Birthday:${pet.dob}.</p>
            									<p>I love ${pet.favorite_toy}</p>
            								</div>
	        							</div>
	        						</div>
	        					</div>
	        				</div>`

        		$("#display-pets").append(newCard)
        	}
    	});
    }
});


//         $("#user-image").append(`<img src="${user.image}" alt="${user.first_name}" >`);
//         $("#user-name").append(`${user.first_name} ${user.last_name}`);
//         $("#user-contact-info").append(`Email: ${user.email}
//         								Phone: ${user.phone}`);
//         for (var i = 0; i < user.Pet.length; i++) {

//             var newCard = `<div class="col s6 m4"
//              					<div class="card horizontal">
// 	        						<div class="card-image">
// 	        							<img src="${pet.image}">
// 	        						</div>
// 	        						<div class="card-stacked">
// 	        							<div class="card-content">
// 	        								<p>${pet.name}</p>
// 	        								<p>Birthday:${pet.dob}.</p>
// 	        								<p>I love ${pet.favorite_toy}</p>
// 	        							</div>
// 	        							<div class="card-action">
// 	          								<button data-id=${pet.id} id="pet-button"class="waves-effect waves-light btn">Look at Me!</button>
// 	        							</div>
// 	        						</div>
// 	        					</div>
// 	        				</div>`
//             $("#display-pets").append(newCard)
//         }
//     });
// }
