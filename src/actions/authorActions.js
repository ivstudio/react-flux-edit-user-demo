'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
      //web API goes here
      var newAuthor = AuthorApi.saveAuthor(author);

      //dispatchers informs stores that an author was created
      Dispatcher.dispatch({
          actionType: ActionTypes.CREATE_AUTHOR,
          author: newAuthor
      });
    }
};

module.exports = AuthorActions;