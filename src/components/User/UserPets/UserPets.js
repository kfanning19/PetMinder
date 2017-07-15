var React = require("react");
var Link = require("react-router").Link;

var addPet = React.createClass({

  render: function() {

    return (
      <div className="main-container">
        <div className="container">
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text" class="validate"> </input>
          <label for="name">What is your pet's name?</label>
        </div>
        <div class="input-field col s6">
          <input id="animal_type" type="text" class="validate"> </input>
          <label for="animal_type">What type of animal is your pet?</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="breed" type="text" class="validate"> </input>
          <label for="breed">What is his/her breed?</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="dob" type="date" class="datepicker"> </input>
          <label for="dob">Select the date of birth</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <input id="favorite_toy" type="text" class="validate"> </input>
            <label for="favorite_toy">What is his/her favorite toy?</label>
          </div>
        </div>
      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <input id="weight" type="number" class="validate"> </input>
            <label for="weight">How much does he/she weigh?</label>
          </div>
        </div>  
      <div class="row">
         <div class="col s12">
               <div class="file-field input-field">
                  <div class="btn">
                     <span>Upload a picture of your pet!</span>
                     <input type="file"> </input>
                  </div>
               </div>
            </div> 
          </div>
        </div>
      </div>
    </form>
  </div>

module.exports = addPet;        