//= require cable
//= require_self
//= require_tree .

var App = {};
App.cable = Cable.createConsumer('ws://localhost:28080');
