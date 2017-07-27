$(function() {
    loadPetInformation(PHILOPETS.petId);
    loadContactCards(PHILOPETS.petId);
    loadDietCards(PHILOPETS.petId);
    loadActivityCards(PHILOPETS.petId);
    initializeMessageBoard();
    loadWeightChart(PHILOPETS.petId);
    $(document).on("click", ".delete-diet", deleteDiet);
    $(document).on("click", ".delete-contact", deleteContact);
    $(document).on("click", ".delete-activity", deleteActivity);

    function loadPetInformation(id) {
        $.get(`/api/profile/pet/${id}`)
            .then(function(pet) {
                $('.pet-name').append(pet.name);
                $('.pet-birthday').append(pet.dob);
                $('.pet-toy').append(pet.favorite_toy);
                $('.pet-image').append(`<img src=${pet.image} />`);
            });
    }
    // functions for Activity
    function loadActivityCards(id) {
        $.get(`/api/profile/pet/activity/${PHILOPETS.petId}`)
            .then((activityData) => {
                for (var i = 0; i < activityData.length; i++) {
                    var activity = activityData[i];
                    var newActivityCard = `<div class="col s12 m6">
                          <div class="card cyan darken-4">
                            <div class="card-content white-text">
                              <span class="card-title">${activity.event}</span>
                              <p><em>${activity.date}</em></p>
                            </div>
                            <div class="card-action white-text">
                              <a data-id="${activity.id}" class="delete-activity">Delete Activity</a>
                            </div>
                          </div>
                        </div>`
                    $('#display-activity').append(newActivityCard);
                }
            })

    }

    $('form#activity-form').on('submit', function(event) {
        event.preventDefault();
        var newEvent = $('#add-event').val().trim();
        var newDate = $('#add-date').val().trim();

        addActivity(PHILOPETS.petId, newEvent, newDate)
    })

    function addActivity(id, new_event, date) {
        $.post(`/add/activity/`, {
                PetId: id,
                event: new_event,
                date: date
            })
            .then(() => {
                window.location.href = `/profile/pet/${id}`
            })
    }

    function deleteActivity() {
        console.log(this)
        var activityId = $(this).data();
        $.ajax({
            method: "DELETE",
            url: `/api/pet/${PHILOPETS.petId}/activity/${activityId.id}`
        }).then(() => {
            window.location.href = `/profile/pet/${PHILOPETS.petId}`
        })
    }

    // functions for Contacts
    function loadContactCards(id) {
        $.get(`/api/profile/pet/contacts/${id}`)
            .then((contactData) => {
                console.log(contactData);
                for (var i = 0; i < contactData.length; i++) {
                    var contact = contactData[i]
                    var newContactCard = `<div class="col s12 m6">
                          <div class="card  grey darken-3">
                            <div class="card-content white-text">
                              <span class="card-title">${contact.service}</span>
                              <p>${contact.name}</p>
                              <p>${contact.address_1}</p>
                              <p>${contact.address_2}</p>
                              <p>${contact.city}, ${contact.state} ${contact.zipcode}</p>
                              <p>${contact.phone}</p>
                              <a href="${contact.website}" target="_blank">Website</a>
                            </div>
                            <div class="card-action white-text">
                              <a data-id="${contact.id}" class="delete-contact">Delete Contact</a>
                            </div>
                          </div>
                        </div>`
                    $("#contact-cards").append(newContactCard);
                }

            })
    }

    $('form#contact-form').on('submit', function(event) {
        event.preventDefault();
        var contactName = $('#contact_name').val().trim();
        var contactService = $('#contact_service').val().trim();
        var contactAddress1 = $('#contact_address1').val().trim();
        var contactAddress2 = $('#contact_address2').val().trim();
        var contactCity = $('#contact_city').val().trim();
        var contactState = $('#contact_state').val().trim();
        var contactZip = $('#contact_zip').val().trim();
        var contactPhone = $('#contact_phone').val().trim();
        var contactWeb = $('#contact_URL').val().trim();

        addContact(PHILOPETS.petId, contactName, contactService, contactAddress1, contactAddress2, contactCity, contactState, contactZip, contactPhone, contactWeb)

    });

    function addContact(id, name, service, address_1, address_2, city, state, zipcode, phone, website) {
        $.post(`/add/Contacts/`, {
                name: name,
                service: service,
                address_1: address_1,
                address_2: address_2,
                city: city,
                state: state,
                zipcode: zipcode,
                phone: phone,
                website: website,
                PetId: id
            })
            .then(() => {
                window.location.href = `/profile/pet/${id}`

            })

    }

    function deleteContact() {
        console.log(this)
        var dietId = $(this).data();
        $.ajax({
            method: "DELETE",
            url: `/api/pet/${PHILOPETS.petId}/contacts/${dietId.id}`
        }).then(() => {
            window.location.href = `/profile/pet/${PHILOPETS.petId}`
        })
    }


    // Diet Information
    function loadDietCards(id) {
        $.get(`/api/profile/pet/Diet/${id}`)
            .then((food) => {
                console.log(food)

                for (var i = 0; i < food.length; i++) {
                    var diet = food[i];
                    if (diet.treat === false) {
                        var mealCard = `<div class="col s12 m6">
                                          <div class="card indigo darken-4">
                                            <div class="card-content white-text">
                                              <span class="card-title">${diet.name}</span>
                                              <p>Serving Size: ${diet.serving}</p>
                                              <p>Location Stored: ${diet.location}</p>
                                              <p>Purchased At: ${diet.store}</p>
                                            </div>
                                            <div class="card-action white-text">
                                                <a data-id="${diet.id}" class="delete-diet">Delete Item</a>
                                            </div>
                                          </div>
                                        </div>`
                        $('#meals').append(mealCard);

                    } else {
                        var treatCard = `<div class="col s12 m6">
                                            <div class="card indigo darken-4">
                                                <div class="card-content white-text">
                                                    <span class="card-title">${diet.name}</span>
                                                    <p>Serving Size: ${diet.serving}</p>
                                                    <p>Location Stored: ${diet.location}</p>
                                                    <p>Purchased At: ${diet.store}</p>
                                                </div>
                                                <div class="card-action white-text">
                                                    <a data-id="${diet.id}" class="delete-diet">Delete Item</a>
                                                </div>                                          
                                            </div>
                                        </div>`
                        $('#treats').append(treatCard);
                    }
                }

            })
    }

    function deleteDiet() {
        console.log(this)
        var dietId = $(this).data();
        $.ajax({
            method: "DELETE",
            url: `/api/pet/${PHILOPETS.petId}/diet/${dietId.id}`
        }).then(() => {
            window.location.href = `/profile/pet/${PHILOPETS.petId}`
        })
    }

    $('form#diet-form').on('submit', function(event) {
        event.preventDefault();
        var brand = $('#diet_brand').val().trim();
        var serving = $('#diet_serving').val().trim();
        var treat = $('input[name=diet_treat]:checked').val();
        var dietLocation = $('#diet_location').val().trim();
        var dietStore = $('#diet_purchase_location').val().trim();

        addDiet(PHILOPETS.petId, brand, serving, treat, dietLocation, dietStore);
    });

    function addDiet(id, brand, serving, treat, dietLocation, dietStore) {
        $.post(`/add/Diet/`, {
                name: brand,
                serving: serving,
                treat: treat,
                location: dietLocation,
                store: dietStore,
                PetId: PHILOPETS.petId
            })
            .then(() => {
                window.location.href = `/profile/pet/${id}`

            })
    }

    function(id) loadWeightChart {
        $.get(`/api/profile/pet/weight/${id}`)
            .then((weight) => {
                var weightData = []

                for (var i = 0; i < weight.length; i++) {
                    var lbs = weight[i];
                    var date = lbs.date
                    var formattedDate = date.replace(/-/g, ",");

                    var newPoint = { x: newDate(formattedDate), y: lbs.weight };
                    weightData.push(newPoint);
                }
                var chart = new CanvasJS.Chart("weightChart", {
                    title: {
                        text: "Weight"
                    },
                    animationEnabled: true,
                    axisY: {
                        title: "lbs",
                        valueFormatString: "#0,,."
                    },
                    data: [{
                        toolTipContent: "{y} units",
                        type: "splineArea",
                        markerSize: 5,
                        color: "rgba(54,158,173,.7)",
                        dataPoints: weightData
                    }]
                });

                chart.render();
            })
    }
    $('form#weight-form').on('submit', function(event) {
        event.preventDefault();
        var newLBS = $('#add-weight').val().trim();
        var newDate = $('#weight-date').val().trim();

        addWeight(PHILOPETS.petId, newLBS, newDate)
    })

    function addWeight(id, lbs, date) {
        $.post(`/add/Weight/`, {
                PetId: id,
                weight: lbs,
                date: date
            })
            .then(() => {
                window.location.href = `/profile/pet/${id}`
            })
    }


});