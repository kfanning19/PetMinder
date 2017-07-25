$(function() {
    loadPetInformation(PHILOPETS.petId);
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
});
