//= require cable
//= require_self
//= require_tree .

let App = {};
App.cable = Cable.createConsumer('ws://localhost:28080');
