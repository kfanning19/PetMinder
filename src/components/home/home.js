// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Home = React.createClass({

	  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  // This code handles the sending of the username/pw to the parent App component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    setQuery(this.state.email, this.state.password);
  },

  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text.
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  setQuery: function (email, password) {

  	TODO
  	  	TODO
  	  	  	TODO
  	  	  	  	TODO
  	  	  	  	  	TODO

  },

  render: function() {

    return (

		<div className="container" id="greeting-page">
				<div className="row header">
					<div className="col s12 center-align" id="title">
						<a id="greeting-link" className="smooth"></a>
					    <h1 id="landing-header">PhiloPet</h1>
					</div>
				</div>

				<div className="row" id="sign-in">
					<div className="col s10 offset-s1 col m6 offset-m3">
						<form action="/login" method="post">
							<div className="row">
								<h4 className="center-align">For the love of your pets.</h4>

								<div className="input-field col s12">
								    <input id="existing-email" name="username" type="text" className="validate" required />
								    <label for="email">Email</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
								    <input id="existing-password" name="password" type="password" className="validate" required />
								    <label for="password">Password</label>
								</div>
							</div>

						<div className="row">
							<div className="input-field col s12 center-align">
							    <button className="waves-effect waves-meeshteal btn" type="submit" id="user-login"> SUBMIT </button>
							</div>
						</div>
					</form>


					<div className="col s12 center-align">
					    <span className="flow-text">

                  <li><Link to="/">Forgot Password?</Link></li>
                  <li><Link to="/signup">Create a New Account</Link></li>

						</span>
					</div>
				</div>
			</div>
		</div>


module.exports = Home;