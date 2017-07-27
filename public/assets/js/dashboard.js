$(function() {
    loadPetInformation(PHILOPETS.petId);
    loadContactCards(PHILOPETS.petId);
    loadDietCards(PHILOPETS.petId);
    initializeMessageBoard();

    function loadPetInformation(id) {
        $.get(`/api/profile/pet/${id}`)
            .then(function(pet) {
                $('.pet-name').append(pet.name);
                $('.pet-birthday').append(pet.dob);
                $('.pet-toy').append(pet.favorite_toy);
                $('.pet-image').append(`<img src=${pet.image} />`);
            });
    }
    // functions for Contacts
    function loadContactCards(id) {
        $.get(`/api/profile/pet/contacts/${id}`)
            .then((contactData) => {
                console.log(contactData);
                for (var i = 0; i < contactData.length; i++) {
                    var contact = contactData[i]
                    var newContactCard = `<div class="col s12 m6">
                          <div class="card cyan darken-4">
                            <div class="card-content white-text">
                              <span class="card-title">${contact.service}</span>
                              <p>${contact.name}</p>
                              <p>${contact.address_1}</p>
                              <p>${contact.address_2}</p>
                              <p>${contact.city}, ${contact.state} ${contact.zipcode}</p>
                              <p>${contact.phone}</p>
                            </div>
                            <div class="card-action white-text">
                              <a href="${contact.website}" target="_blank">Website</a>
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
                service:service,
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

    // Diet Information
    function loadDietCards(id) {
        $.get(`/api/profile/pet/Diet/${id}`)
            .then((food) => {
                console.log(food)

                for (var i = 0; i < food.length; i++) {
                    var diet = food[i];
                    if (diet.treat === false) {
                        var mealCard = `<div class="col s12 m6">
                                          <div class="card blue-grey darken-1">
                                            <div class="card-content white-text">
                                              <span class="card-title">${diet.name}</span>
                                              <p>Serving Size: ${diet.serving}</p>
                                              <p>Location Stored: ${diet.location}</p>
                                              <p>Purchased At: ${diet.store}</p>
                                            </div>
                                          </div>
                                        </div>`
                        $('#meals').append(mealCard);

                    } else {
                        var treatCard = `<div class="col s12 m6">
                                          <div class="card light-blue darken-4">
                                            <div class="card-content white-text">
                                              <span class="card-title">${diet.name}</span>
                                              <p>Serving Size: ${diet.serving}</p>
                                              <p>Location Stored: ${diet.location}</p>
                                              <p>Purchased At: ${diet.store}</p>
                                            </div>
                                          </div>
                                        </div>`
                        $('#treats').append(treatCard);
                    }
                }

            })
    }



    $('form#diet-form').on('submit', function(event) {
        event.preventDefault();
        var brand = $('#diet_brand').val().trim();
        var serving = $('#diet_serving').val().trim();
        var treat = $('#diet_treat').val().trim();
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


});