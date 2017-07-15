var React = require("react");
var Link = require("react-router").Link;

var User = React.createClass({

  render: function() {

  	return (
    <div className="main-container">
      <div className="container">
        <div className="row">

         <h1>User Profile</h1>

        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg"/>
              <span className="card-title">Owner</span>
            </div>
            <div className="card-content">
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
            </div>
         
          </div>
        </div>
      </div>
   
      <a className="waves-effect waves-light btn-large">Add Pet</a>

	  </div>
     </div>
    </div>
 

 module.exports = User;  

