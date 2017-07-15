var React = require("react");
var Link = require("react-router").Link;

var medications = React.createClass({

  render: function() {

    return (
     <div className="main-container">
        <div className="container">
        <div class="row">
      
      <h1>Health</h1>
      
        <div class="col s6 m3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Active Medication</span>
              <p>Frontline Plus Flea & Tick Treatment. Apply every 30 days.</p>
            </div>

         <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
   
   <div class="row">
   <ul class="collection with-header">
        <li class="collection-header"><h4>History</h4></li>
        <li class="collection-item">Drontal Feline</li>
        <li class="collection-item">Clavamox</li>
        <li class="collection-item">Prediniose</li>
      </ul>

  

  </div> 
  </div>
  </div>
  </div>
  </div>
  </div>

module.exports = medications;     