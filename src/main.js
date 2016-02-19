"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitatializeActions = require('./actions/initializeActions');

InitatializeActions.initApp();

//Router.HistoryLocation - clean URL add as second parameter - needs backend config
Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('app'));
});











//var Home = require('./components/homePage');
//var About =  require('./components/about/aboutPage');
//var Authors =  require('./components/authors/authorPage');
//var Header =  require('./components/common/header');


//(function(win){
//  "use strict";

  //var App = React.createClass({
  //  render: function(){
  //    var Child;
  //
  //    switch(this.props.route){
  //      case 'about': Child = About; break;
  //      case 'authors': Child = Authors; break;
  //      default: Child = Home;
  //    }
  //    return (
  //      <div>
  //        <Header />
  //        <Child />
  //      </div>
  //    );
  //  }
  //});


  //function render(){
  //  var route = window.location.hash.substr(1);
  //  React.render(<App route={route}/>, document.getElementById('app'));
  //}
  //
  //win.addEventListener('hashchange', render);
  //render();


//})(window)



//React.render(<Home />, document.getElementById('app'));

