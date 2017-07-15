var React = require("react");
var Link = require("react-router").Link;

var signup = React.createClass({

  render: function() {

    return (
      <div className="main-container">
        <div className="container">
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"> </input>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"> </input>
          <label for="last_name">Last Name</label>
        </div>
      </div>
     <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <input id="email" type="email" class="validate"> </input>
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"> </input>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="phone" type="tel" class="validate"/> 
          <label for="phone">Phone number</label>
        </div>
      </div>
       <div class="row">
         <div class="col s12">
               <div class="file-field input-field">
                  <div class="btn">
                     <span>Upload a picture of yourself!</span>
                     <input type="file"/>
                  </div>
               </div>
            </div> 
          </div>
      </div>
    </form>
  </div>
        
module.exports = signup;