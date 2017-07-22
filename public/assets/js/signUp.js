$(document).ready(function() {
  // Getting references to our form and inputs
  var signUpForm = $("form.signup-form");
  var firstName = $("input#signup_first");
  var lastName = $("input#signup_last");
  var email = $("input#signup_email");
  var phone = $("input#signup_phone");
  var password = $("input#signup_password");
  var password2 = $("input#signup_passwordconfirm");
  var image = $("input#signup_img")


  // When the form is submitted, we validate there's an email and password entered
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    // if(password != password2){
    //   alert("Passwords do not match");
    // }

    var userData = {
      first_name: firstName.val().trim(),
      last_name: lastName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      image: image.val().trim(),
      phone: phone.val().trim()
    };



    // If we have an email and password we run the loginUser function and clear the form
    signUpUser(userData.first_name, userData.last_name, userData.email, userData.password, userData.phone, userData.image);
    firstName.val("");
    lastName.val("");
    email.val("");
    password.val("");
    phone.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function signUpUser(first_name, last_name, email, password, phone, img) {
    $.post("/create/user", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      phone: phone,
      image: img
      // This will redirect them to the login page
    })
  }

});