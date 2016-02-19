//"use strict";

var React = require('react');
var Header =  require('./common/header');
var Routehandler = require('react-router').RouteHandler;
$ = jQuery = require('jQuery');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
          <div className="container-fluid">
            <Routehandler />
          </div>
      </div>
    );
  }
});

module.exports = App;