"use strict";

var React = require('react');

var About = React.createClass({
/* TransitionTo and TransitionFrom - ##Could be use for checking if user is login.##
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if (!confirm('Do you want to continue?')){
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component){
      if (!confirm('Are your sure?')){
        transition.about();
      }
    }
  },
*/
  render: function(){
    return (
      <div>
          <h1>About</h1>
          <p>
            This application uses the following technologies:
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
              <li>Browserify</li>
              <li>Bootstrap</li>
            </ul>
          </p>
      </div>
    );
  }
});

module.exports = About;