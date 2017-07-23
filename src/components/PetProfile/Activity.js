var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

// Render Activity Component
var Activity = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      event: '',     
      date: '',
      new_event: '',
      new_date: '',
    };
  },
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleSubmit: function(event, new_event, new_date) {
    event.preventDefault();
    console.log("CLICKED");
    var newActivity={
      event: new_event,
      date: new_date,
      PetId: {this.props.petId}
    }
      axios.post('/add/activity/', newActivity).then(function(){
        var petId = {this.props.petId};
        axios.get(`/api/profile/pet/activity/${petId}`).then(function(response) {
          console.log("axios results", response);
            var pet = response.data;
            this.setState({ 
              event: pet.event,     
              date: pet.date
            });
        }.bind(this));
      })
    
  },
  componentWillMount() {
    var petId = {this.props.petId};
    axios.get(`/api/profile/pet/activity/${petId}`).then(function(response) {
    console.log("axios results", response);
    var pet = response.data;
    this.setState({ 
      event: pet.event,     
      date: pet.date
      });
    }.bind(this));
  },
  handleDelete(id){
    axios.delete(`/api/pet/activities/${id}`).then(function(){
      var petId = {this.props.petId}
      axios.get(`/api/profile/pet/activity/${petId}`).then(function(response) {
        console.log("axios results", response);
        var pet = response.data;
        this.setState({ 
          event: pet.event,     
          date: pet.date
          });
        }.bind(this));
        )}
  }
  renderCards(){
    if(!this.state.event){
      return <h2>No Activities Added</h2>
    }else{
      return this.state.pets.map(function(activity, index) {

      return (
        <div key={index}>
          <div className="col s6 m4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{activity.event}</span>
              <p><em>{activity.date}</em></p>
            </div>
            <div className="card-action">
              <button onClick={() => this.handleDelete(activity)}>Delete</button>
            </div>
          </div>
          </div>
        </div>
      );
    }.bind(this));
    }


  }
  render: function() {
    return(
      <div id="activity-container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field inline col s8">
                <input value={this.state.new_event} onChange={this.handleChange} id="new_event" type="text" className="validate" required/>
                <label for="new_event">Add an Activity</label>
              </div>
              <div className="input-field inline col s2">
                <input value={this.state.new_date} onChange={this.handleChange} type="text" className="datepicker"/>
                <label for="new_date">Date</label>
              </div>
                <button className="btn waves-effect waves-light inline col s2" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
            </div>
          </form>
        </div>
       {this.renderCards()}
     </div>
    )
  }
});
// Export the module back to the route
module.exports = Activity;