var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

// Children
var Activity = require('./PetProfile/Activity');
var Contacts = require('./PetProfile/Contacts');
var Diet = require('./PetProfile/Diet');
var MessageBoard = require('./PetProfile/MessageBoard');

// Render PetProfile Component
var PetProfile = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      name: '',     
      animal_type: '',
      breed: '',
      image: '',
      dob: '',
      favorite_toy: ''
    };
  },

  componentWillMount() {
    var petId = {this.props.params.petId};
    axios.get(`/api/profile/pet/${petId}`).then(function(response) {
    console.log("axios results", response);
    var pet = response.data;
    this.setState({ 
      name: pet.name,     
      animal_type: pet.animal_type,
      breed: pet.breed,
      image: pet.image,
      dob: pet.dob,
      favorite_toy: pet.favorite_toy
      });
    }.bind(this));
  },
  render: function() {
    return(
      <div id="pet-container">
      <Link to="/user/profile">Back to Profile</Link>
        <div className="row">
          <div className="col s5 m4">
            <div className="card horizontal">
              <div className="card-image">
                <img src={this.state.image}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{this.state.name}</p>
                  <p>Type: {this.state.animal_type}</p>
                  <p>Breed: {this.state.breed}</p>
                  <p>Birthday:{this.state.DOB}.</p>
                  <p>I love {this.state.favorite_toy}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col s7 m8'>
            <MessageBoard petId = {this.props.params.petId}/>
          </div>
        </div>
        <div className='row'>
            <Activity petId = {this.props.params.petId}/>
        </div>
        <div className='row'>
            <Diet petId = {this.props.params.petId}/>
        </div>
        <div className='row'>
            <Contacts petId = {this.props.params.petId}/>
        </div>
     </div>
    )
  }
});
// Export the module back to the route
module.exports = PetProfile;