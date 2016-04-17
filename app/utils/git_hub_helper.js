var axios = require('axios');
var env = require('../config/env');

var git_hub_url = 'https://api.github.com/users/';

var param = "?client_id=" + env.id + "&client_secret=" + env.secret ;

function git_user(user){
    return axios.get(git_hub_url + user + param )
}

var helpers = {
    get_git_user_data: function(userNames){
    return axios.all(userNames.map(function(userName){
      return git_user(userName);
    })).then(function(info){
      return info.map(function(user){
          return user.data;
      })
    }).catch(function(err){
      console.warn('Error in get_git_user_data - ', err);  
    })
    }
}

module.exports = helpers;
