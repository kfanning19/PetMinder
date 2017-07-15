var React = require("react");
var Link = require("react-router").Link;

var settings = React.createClass({

  render: function() {

    return (
    <div className="main-container">
        <div className="container">
        <div class="row">
  
  <h4>Shared with</h4>

  <div class="row">
  <ul class="collection">
    <li class="collection-item avatar">
      <img src="images/yuna.jpg" alt="" class="circle"> </img> 
      <span class="title">Husband</span>
      <p>John Smith <br/>
      </p>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Groomer</span>
      <p>Name <br/>
      </p>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Vet</span>
      <p>Name <br/>
      </p>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Walker</span>
      <p>Name <br/>
      </p>
    </li>
  </ul>

  <a class="waves-effect waves-light btn">Share pet</a>

  <a class="waves-effect waves-light btn-large">Remove pet</a>
            
</div>
</div>
</div>
  

</div> 

module.exports = settings;  