var React = require("react");
var axios = require("axios");
var Link = require("react-router").Link;

// Render MessageBoard Component
var MessageBoard = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      messages: '', 
      contents: ''
    };
  },
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleSubmit: function(event, new_contents) {
    event.preventDefault();
    console.log("CLICKED");
    var newMessage={
      contents: new_event, 
      PetId: {this.props.petId}
    };
    axios.post('/add/Messages/', newMessage).then(function(){
      var petId = {this.props.petId};
      axios.get(`/api/profile/pet/messages/${petId}`).then(function(response) {
        console.log("axios results", response);
            var messages = response.data;
            this.setState({ 
              messages: messages 
            });
        }.bind(this));
      })
    
  },
  componentWillMount() {
    var petId = {this.props.petId};
    axios.get(`/api/profile/pet/messages/${petId}`).then(function(response) {
    console.log("axios results", response);
    var pet = response.data;
    this.setState({ 
      event: pet.event,     
      date: pet.date
      });
    }.bind(this));
  },
  handleDelete(id){
    axios.delete(`/api/pet/message/${id}`).then(function(){
      var petId = {this.props.petId}
      axios.get(`/api/profile/pet/messages/${petId}`).then(function(response) {
        console.log("axios results", response);
        var pet = response.data;
        this.setState({ 
          event: pet.event,     
          date: pet.date
          });
        }.bind(this));
        )}
  }
  renderMessages(){
    if(!this.state.event){
      return <h2>No Messages</h2>
    }else{
      return this.state.messages.map(function(message, index) {
        return (
          <div key={index}>
            <ul className="collection">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle"/>
                    <span className="title">{message.user.name}</span>
                      <p><em>{message.date}</em></p>
                      <p>{message.contents}</p>
                <button className="secondary-content" onClick={() => this.handleDelete(message)}><i className="material-icons">delete_forever</i></button>
              </li>
            </ul>
          </div>
        )
    }.bind(this));
  },
  render: function() {
    return(
      <div id="message-container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field inline col s8">
                <input value={this.state.contents} onChange={this.handleChange} id="new_contents" type="textarea" className="materialize-textarea" required/>
                <label for="new_contents">Post Message</label>
              </div>
              <button className="btn waves-effect waves-light inline col s2" type="submit" name="action">Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
       {this.renderBoard()}
     </div>
    )
  }
});
// Export the module back to the route
module.exports = MessageBoard;