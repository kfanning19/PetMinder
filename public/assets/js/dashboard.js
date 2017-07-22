$(function() {
    initializeMessageBoard();
});

// load the basic dashboard components
function loadDashboard(id) {
    $.get(`/api/profile/pet/${id}`).then(function(pet) {
        var dashboard = `<div id="dashboard" class="col s12">
                            <div class="row">
                                <div class="col s6">
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
                                            </div>
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