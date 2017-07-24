var React = require("react");
var axios = require("axios");

// Render MessageBoard Component
var MessageBoard = React.createClass({

  // Set initial variables for the component
  getInitialState: function() {
    return {
      messages: [], 
      contents: ''
    };
  },
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    console.log
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },
  handleSubmit: function(event, new_contents) {
    event.preventDefault();
    console.log("CLICKED");
    var newMessage={
      contents: this.state.contents, 
      PetId: this.props.petId
    };
    axios.post('/add/Messages/', newMessage)
      .then(function(){
        var petId = this.props.petId;
        axios.get(`/api/profile/pet/messages/${petId}`)
          .then(function(response) {
            console.log("axios results", response);
            var messages = response.data
            this.setState({ 
              messages: messages 
            });
          }.bind(this));
      });
  },
  componentWillMount() {
    var petId = this.props.petId;
    axios.get(`/api/profile/pet/messages/${petId}`)
      .then(function(response) {
        console.log("axios results", response);
        var messages = response.data;
        this.setState({ 
          messages: messages
        });
      }.bind(this));
  },
  handleDelete(id){
    axios.delete(`/api/pet/message/${id}`)
      .then(function() {
        var petId = this.props.petId;
        axios.get(`/api/profile/pet/messages/${petId}`)
          .then(function(response) {
            console.log("axios results", response);
            var messages = response.data;
            this.setState({ 
              messages: messages
            });
          }.bind(this));
      });
  },
  renderMessages() {
    if(!this.state.messages){
      return <h2>No Messages</h2>
    }else{
      return this.state.messages.map(function(message, index) {
        return (
          <div key={index}>
            <ul className="collection">
              <li className="collection-item avatar">
                <img src={message.User.image} alt={message.User.first_name} className="circle"/>
                  <span className="title">{message.User.first_name}{message.User.last_name}</span>
                    <p><em>{message.date}</em></p>
                    <p>{message.contents}</p>
              </li>
            </ul>
          </div>
        )
      }.bind(this));
    }
  },
  render: function() {
    return(
      <div id="message-container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field inline col s10">
                <input value={this.state.contents} onChange={this.handleChange}  id="contents" type="text" required/>
              </div>
              <button className="btn waves-effect waves-light inline col s2" type="submit" name="action">Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
       {this.renderMessages()}
     </div>
    )
  }
});
// Export the module back to the route
module.exports = MessageBoard;