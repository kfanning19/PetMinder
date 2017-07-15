var React = require("react");
var Link = require("react-router").Link;

var addPet = React.createClass({

  render: function() {

    return (
    <div className="main-container">
    <div className="container">
    <div class="row">

    <h1>Health</h1>

        <form class="col l5">
          <div class="row">
            <div class="input-field col s6">
              <input id="weight" type="number" class="validate"> </input>
              <label for="weight">What is your pet's current weight?</label>
            </div>
            </div>       
        </form>

      <div class="row">
        <div class="col s8 m5">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Disease and/or allergy</span>
              <p>Kennel Cough</p>
            </div>
          </div>
        </div>
      </div>  
      
      <div class="row">
        <div class="col s8 m5">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Disease and/or allergy</span>
              <p>Diarrhea</p>
            </div>
          </div>
        </div>
      </div> 

      <div class="row">
      <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>

       <div class="col l7">
       <ul class="collection with-header">
            <li class="collection-header"><h4>Medical History</h4></li>
            <li class="collection-item">Ligament repair</li>
            <li class="collection-item">Ringworm</li>
          </ul>



  </div> 
  </div>
  </div>
  </div>


module.exports = addPet;        