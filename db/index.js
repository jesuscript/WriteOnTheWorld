var mongoose = require('mongoose/');
var schemas = require("./schemas.js");

// registering models
mongoose.model("Message", schemas.schemas.MessageSchema);

exports.models = {
  Message : mongoose.model('Message')
}