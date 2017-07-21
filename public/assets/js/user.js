// get the user info to display at the top of the screen
function getUserInfo {
    $.get("/api/user/profile").then((user) => {
        console.log(user)

        $("#user-image").append(`<img src="${user.image}" alt="${user.first_name}" >`);
        $("#user-name").append(`${user.first_name} ${user.last_name}`);
        $("#user-contact-info").append(`Email: ${user.email}
        								Phone: ${user.phone}`);
        for (var i = 0; i < user.Pet.length; i++) {

            var newCard = `<div class="col s6 m4"
             					<div class="card horizontal">
	        						<div class="card-image">
	        							<img src="${user.Pet[i].image}">
	        						</div>
	        						<div class="card-stacked">
	        							<div class="card-content">
	        								<p>${user.Pet[i].name}</p>
	        								<p>Birthday:${user.Pet[i].dob}.</p>
	        								<p>I love ${user.Pet[i].favorite_toy}</p>
	        							</div>
	        							<div class="card-action">
	          								<button data-id=${user.Pet[i].id} id="pet-button"class="waves-effect waves-light btn">Look at Me!</button>
	        							</div>
	        						</div>
	        					</div>
	        				</div>`
            $("#display-pets").append(newCard)
        }

    });
}
// Remove pet cards and replace with the name and tabs for the selected pet's profile
function loadPetTabs(id) {
    $.get(`/api/profile/pet/${id}`).then(function(pet) {
        var petHeader = `<h3 class="center">${pet.name}</h3>
        					<div class="row">
            					<div class="col s12">
                					<ul class="tabs">
					                    <li class="tab col s1"><a class="active" href="#dashboard"><i class="material-icons">assessment</i></a></li>
					                    <li class="tab col s2"><a href="#activity">Activity</a></li>
					                    <li class="tab col s2"><a href="#contacts">Contacts</a></li>
					                    <li class="tab col s1"><a href="#diet">Diet</a></li>
					                    <li class="tab col s2"><a href="#health">Health</a></li>
					                    <li class="tab col s2"><a href="#medications">Medications</a></li>
					                    <li class="tab col s2"><a href="#settings">Settings</a></li>
					                </ul>
					            </div>
					        </div>`
    })
}
// load the basic dashboard components
function loadDashboard(id) {
    $.get(`/api/profile/pet/${id}`).then(function(pet) {
        var dashboard = `<div id="dashboard" class="col s12">
			                <div class="row">
			                    <div class="sdcol s6">
			                        <div class="row">
			                            <div class="col s12" id="pet-info">
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
	        								<div>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col s12" id="root"></div>
			                        </div>
			                    </div>
			                    <div class="col s6">
			                        <div id="calendar"></div>
			                    </div>
			                </div>
			            </div>`
        $("#display-pets").append(dashboard);
    })
}
// load the Activity tab
function loadActivity(id) {
    $.get(`/api/profile/pet/activity/${id}`).then(function(activity) {
        var activityForm = `<div id="activity" class="col s12">
                <div class="row">
                    <form class="cols 12">
                        <div class="row">
                            <div class="input-field inline col s6">
                                <input id="new-activity" name="new-activity" type="text" class="validate">
                                <label for="new-activity" class="active">Add an Activity</label>
                            </div>
                            <div class="input-field inline col s2">
                                <input type="date" name="activity-date" id="activity-date" class="datepicker">
                                <label for="activity-date" class="active">Date</label>
                            </div>
                            <button class="btn waves-effect waves-light col s2" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <div id="activity-list"></div>
                </div>
            </div>`

        $("#display-pets").append(activityForm);
        if (activity) {
            for (var i = 0; i < activity.length; i++) {
                var activityList = `<li class="collection-item"><p><em>${activity[i].date}</em><p>
									<h4>${activity[i].event}</h4></li>`
                $("#activity-list").append(activityList);
            }
        }else{
        	$("#activity-list").append("<h4><em>No activities to display</em></h4>");
        }
    });
}
// Load the Contacts Tab
function loadContacts(id){
	var contactContainer = `<div id="contacts">
								<div id="contacts-list"></div>
							</div>`
	$("#display-pets").append(contactContainer)
	$.get(`/api/profile/pet/health/${id}`).then(function(contacts){
		for(var i = 0; i <contacts.length; i++){
			var contactsList = `<div class="col s6">
					                <div class="card blue-grey darken-1">
					                    <div class="card-content white-text">
					                        <span class="card-title">${contacts[i].name}</span>
					                        <p>${contacts[i].service}
					                        	${contacts[i].address_1}
					                        	${contacts[i].address_2}
					                        	${contacts[i].city}, ${contacts[i].state} ${contacts[i].zipcode}</p>
					                    </div>
					                    <div class="card-action">
					                        <a href="${contacts[i].url}">Website</a>
					                    </div>
					                </div>
					            </div>`
			$("#contacts-list").append(contactsList);
		}
	})
}
// load Diet Tab
function loadDiet(id){
	$.get(`/profile/pet/diet/${id}`)
}

//load Health Tab
function loadHealth(id){
	$.get(`/profile/pet/weight/${id}`).then(function(lbs){

	});
	$.get(`/profile/pet/health/${id}`).then(function(health){

	});
	$.get(`/profile/pet/illness/${id}`).then(function(illness){

	});
}

//load Medications Tab
function loadMedications(id){

}