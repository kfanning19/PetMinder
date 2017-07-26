var React = require("react");
var axios = require("axios");
var moment = require("moment")

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
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);

  },
  handleSubmit: function(event, new_contents) {
    event.preventDefault();
    console.log("CLICKED");
    var petId = this.props.petId;
    var newMessage={
      contents: this.state.contents, 
      PetId: petId
    };
    axios.post('/add/Messages/', newMessage)
      .then(()=>{
        
        axios.get(`/api/profile/pet/messages/${petId}`)
          .then((response)=> {
            console.log("axios results update", response);
            var messages = response.data
            this.setState({ 
              messages: messages,
              contents: '' 
            });
          });
      });

  },
  componentWillMount() {
    var petId = this.props.petId;
    axios.get(`/api/profile/pet/messages/${petId}`)
      .then((response)=> {
        console.log("axios results", response);
        var messages = response.data;
        this.setState({ 
          messages: messages
        });
      });
  },
  renderMessages() {
    if(!this.state.messages){
      return <h2>No Messages</h2>
    }else{
      return this.state.messages.map((message, index)=> {
        return (
          <div key={index}>
            <li className="collection-item avatar">
                <img src={message.User.image} alt={message.User.first_name} className="circle"/>
                  <span className="title">{message.User.first_name}{message.User.last_name}</span>
                    <p><em>{moment(message.createdAt).format("MM-DD-YYYY")}</em></p>
                    <p>{message.contents}</p>
              </li>
          </div>
        )
      });
    }
  },
  render: function() {
    return(
      <div id="message-container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field inline col s10">
                <textarea rows="5" cols="50" value={this.state.contents} onChange={this.handleChange}  id="contents"></textarea>
                <label htmlFor='contents'>Add a new Message</label>
              </div>
              <button className="btn waves-effect waves-light inline col s2" type="submit" name="action">Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
        <ul className="collection">
        {this.renderMessages()}
       </ul>
     </div>
    )
  }
});
// Export the module back to the route
module.exports = MessageBoard;