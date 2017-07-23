var React = require("react");

var axios = require("axios");

var Link = require("react-router").Link;

var UserProfile = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      name: "",     
      email: "",
      phone: "",
      image: "",
      pets: ""
    };
  },

  componentWillMount() {
    axios.get("/profile/user").then(function(response) {
    console.log("axios results", response);
    var user = response.data;
    this.setState({ 
      name: user.name,     
      email: user.email,
      phone: user.phone,
      image: user.image,
      pets: user.pets
      });
    }.bind(this));
  },
  renderPets(){
    if(!this.state.pets){
      return 
        <h2>No Pets Listed. Please select add a pet</h2>
      }else{
      return this.state.pets.map(function(pet, index) {

      return (
        <div key={index}>
          <div className="col s6 m4">
            <Link to={`/pet/profile/${pet.id}`}>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={pet.image}/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{pet.name}</p>
                    <p>Birthday:{pet.dob}.</p>
                    <p>I love {pet.favorite_toy}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    }.bind(this));
  },
  render: function() {
    return(
      
    <div className="container">
        <div className="row">
            <div className="col s4">
                {this.state.image}
            </div>
            <div className="col s8">
                <h2>{this.state.name}</h2>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>
                <Link to='/add-pet' className="waves-effect waves-light btn-large"><i className="material-icons left">mode_edit</i>Add a Pet</Link>
            </div>
        </div>
        <div className="divider"></div>
        <div id="display-pets">
            {this.renderPets()}
        </div>
    </div>

    )
  }
});
// Export the module back to the route
module.exports = UserProfile;