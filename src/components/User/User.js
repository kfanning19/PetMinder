var React = require("react");
var Link = require("react-router").Link;

var userProfile = React.createClass({

  render: function() {

  	return (
      <div className="main-container">
        <div className="container">
        <div class="row">

        <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"/>
              <span class="card-title">Owner</span>
            </div>
            <div class="card-content">
              <p>Name</p>
              <p>Email</p>
              <p>Photo</p>
            </div>
         
          </div>
        </div>
      </div>

      <div class="row">
      <a class="waves-effect waves-light btn-large">Add Pet</a>

      </div>
      </div>
      </div>




    

 module.exports = userProfile;  