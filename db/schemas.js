var mongoose = require('mongoose/');
mongoose.connect('mongodb://:@localhost:27017/local');
Schema = mongoose.Schema;

exports.schemas = {
  MessageSchema : new Schema({
    message: String,
    color: String,
    X : Number,
    Y : Number,
    Z : Number
  })
};