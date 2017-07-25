var React = require("react");
var axios = require("axios");
var moment = require('moment');

// Render Activity Component
var Activity = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      activities:[],
      event: '',
      date: '',
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
    var petId = this.props.petId;
    console.log("CLICKED");
    var newActivity={
      event: this.state.event,
      date: this.state.date,
      PetId: petId
    }
      axios.post('/add/activity/', newActivity).then(()=>{
        axios.get(`/api/profile/pet/activity/${petId}`).then(function(response) {
          console.log("axios results", response);
            var pet = response.data;
            this.setState({ 
              activities: [],
              event: '',     
              date: ''
            });
        });
      });
  },
  componentWillMount() {
    var petId = this.props.petId;
    axios.get(`/api/profile/pet/activity/${petId}`).then((response)=> {
    console.log("axios results", response);
    var pet = response.data;
    this.setState({ 
      activities: []
      });
    });
  },
  renderCards(){
    if(!this.state.event){
      return <h2>No Activities Added</h2>
    }else{
      return this.state.activities.map((activity, index)=> {
      return (
        <div key={index}>
          <div className="col s6 m4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">{activity.event}</span>
                <p><em>{moment(activity.date).format("MM-DD-YYYY")}</em></p>
              </div>
            </div>
           </div>
        </div>
      );
    });
    }
  },
  render(){
    return(
      <div id="activity-container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field inline col s8">
                <input value={this.state.event} onChange={this.handleChange} id="event" type="text" className="validate" required/>
                <label htmlFor="event">Add an Activity</label>
              </div>
              <div className="input-field inline col s2">
                <input value={this.state.date} onChange={this.handleChange} type="text" className="datepicker"/>
                <label htmlFor="date">Date</label>
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