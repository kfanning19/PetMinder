// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components

var UserProfile = require("../components/UserProfile");
var PetProfile = require("../components/PetProfile");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
      {/* If user selects UserProfile or PetProfile show the appropriate component */}
      <Route path="/user/profile" component={UserProfile} />
      <Route path="/pet/profile/:petId" component={PetProfile} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={UserProfile} />

  </Router>
);
