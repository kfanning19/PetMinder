// Delete upon deployment
var models = require("./Models");
var bCrypt = require('bcrypt-nodejs');
var generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var password = generateHash("abc123");

module.exports = function() {
    var promises = [
        models.User.create({
            first_name: "Kristen",
            last_name: "Fanning",
            email: "kristentfanning@gmail.com",
            password: password,
            phone: "1232341234",
            image: "https://ichef.bbci.co.uk/images/ic/480x270/p049tgdb.jpg",
        }),
        models.User.create({
            first_name: "Susan",
            last_name: "Heiniger",
            email: "sheiniger@gmail.com",
            password: password,
            phone: "1232341234",
            image: "https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg"
        }),
        models.User.create({
            first_name: "Ornella",
            last_name: "Hernandez",
            email: "ornellah@gmail.com",
            password: password,
            phone: "1232341234",
            image: "https://static.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg"
        }),
        models.Pet.create({
            name: "Cooper",
            animal_type: "dog",
            breed: "Chinook",
            dob: "2014-09-24",
            favorite_toy: "rope",
            image: "https://vetstreet.brightspotcdn.com/dims4/default/b90e614/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff8%2Fd9ad10c79311e09b940050568d6ceb%2Ffile%2FChinook-5-645km071411.jpg"
        }),
        models.Pet.create({
            name: "Riley",
            animal_type: "dog",
            breed: "Ridgeback",
            dob: "2015-11-24",
            favorite_toy: "Cooper's back leg",
            image: "http://puppytoob.com/wp-content/uploads/2016/10/rhodesian-ridgeback-1.jpg"
        }),
        models.Pet.create({
            name: "Daisy",
            animal_type: "cat",
            breed: "Maine Coon",
            dob: "1998-12-25",
            favorite_toy: "laser pointer",
            image: "http://mainecoonadmirer.com/wp-content/uploads/2016/06/Females.jpg"
        }),
        models.Pet.create({
            name: "Loki",
            animal_type: "rabbit",
            breed: "French Hop",
            dob: "2014-07-25",
            favorite_toy: "lettuce",
            image: "https://t2.ea.ltmcdn.com/en/images/3/2/3/img_a_french_lop_rabbit_s_diet_323_paso_0_600.jpg"
        }),
        models.Pet.create({
            name: "Pirate",
            animal_type: "parrot",
            breed: "macaw",
            dob: "2013-05-29",
            favorite_toy: "bells",
            image: "http://media.istockphoto.com/photos/red-parrot-picture-id105951602?k=6&m=105951602&s=612x612&w=0&h=G6VP0HgcGW4c-CVbGQv5NyIK8TInaI_9DmvXTwMr2rc="
        }),
        models.Activity.create({
            event: "walk",
            date: "2017-07-11",
            PetId: 1
        }),
        models.Activity.create({
            event: "walk",
            date: "2017-07-11",
            PetId: 2
        }),
        models.Activity.create({
            event: "Sit on Riley",
            date: "2017-07-12",
            PetId: 1
        }),
        models.Activity.create({
            event: "Chase a squirrel",
            date: "2017-07-12",
            PetId: 2
        }),
        models.Activity.create({
            event: "Shaved Mats",
            date: "2017-07-11",
            PetId: 3
        }),
        models.Activity.create({
            event: "Slept in the sun",
            date: "2017-07-10",
            PetId: 3
        }),
        models.Activity.create({
            event: "Ate lettuce",
            date: "2017-07-11",
            PetId: 4
        }),
        models.Activity.create({
            event: "Explored apartment",
            date: "2017-07-10",
            PetId: 4
        }),
        models.Activity.create({
            event: "Learned a new swear word",
            date: "2017-07-10",
            PetId: 5
        }),
        models.Activity.create({
            event: "Cleaned cage",
            date: "2017-07-09",
            PetId: 5
        }),
        models.Contacts.create({
            name: "Katie Krzak",
            service: "Veterinarian",
            address_1: "234 West Lake St",
            city: "Greensborough",
            state: "NC",
            zipcode: "14290",
            phone: "12342309333",
            website: 'http://www.npr.org/',
            PetId: 1
        }),
        models.Contacts.create({
            name: "Katie Krzak",
            service: "Veterinarian",
            address_1: "234 West Lake St",
            city: "Greensborough",
            state: "NC",
            zipcode: "14290",
            phone: "12342309333",
            website: 'http://www.npr.org/',
            PetId: 2
        }),
        models.Contacts.create({
            name: "John Snow",
            service: "Veterinarian",
            address_1: "3498 North St",
            city: "Chicago",
            state: "IL",
            zipcode: "60611",
            phone: "18762349834",
            website: 'http://www.npr.org/',
            PetId: 3
        }),
        models.Contacts.create({
            name: "Myrna Jest",
            service: "Dog walker",
            address_1: "2498 South St",
            city: "Greensborough",
            state: "NC",
            zipcode: "39284",
            phone: "12994325678",
            website: 'http://www.npr.org/',
            PetId: 1
        }),
        models.Contacts.create({
            name: "Sam Lake",
            service: "Dog walker",
            address_1: "234 Sun Blvd",
            city: "Greensborough",
            state: "NC",
            zipcode: "39284",
            phone: "12994325678",
            website: 'http://www.npr.org/',
            PetId: 2
        }),
        models.Messages.create({
            contents: "Cooper got skunked again",
            UserId: 1,
            PetId: 1
        }),
        models.Messages.create({
            contents: "Riley decided to eat the couch again. Cooper helped.",
            UserId: 1,
            PetId: 2
        }),
        models.Messages.create({
            contents: "Cooper tricked Riley into leaving the couch again by pretending he actually wanted to play",
            UserId: 2,
            PetId: 1
        }),
        models.Messages.create({
            contents: "Riley decided to defend Cooper again. Both sweet and irritating.",
            UserId: 2,
            PetId: 2
        }),
        models.Diet.create({
            name: "Kirkland Kibble",
            serving: "1.5 cups",
            treat: false,
            location: "Under the desk in the laundry room",
            store: "Costco",
            PetId: 1
        }),
        models.Diet.create({
            name: "Kirkland Kibble",
            serving: "1 cup",
            treat: false,
            location: "Under the desk in the laundry room",
            store: "Costco",
            PetId: 2
        }),
        models.Diet.create({
            name: "DentaStix",
            serving: "1 piece",
            treat: true,
            location: "Top pantry cabinet",
            store: "Costco",
            PetId: 1
        }),
        models.Diet.create({
            name: "DentaStix",
            serving: "1 piece",
            treat: true,
            location: "Top pantry cabinet",
            store: "Costco",
            PetId: 2
        }),
        models.Diet.create({
            name: "Milkbone",
            serving: "1 piece",
            treat: true,
            location: "Top pantry cabinet",
            store: "Costco",
            PetId: 1
        })
    ];
    // console.log(promises);
    return Promise.all(promises).catch();
}