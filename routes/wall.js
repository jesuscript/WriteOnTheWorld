var db = require('../db');


exports.r = {
  index : function(req, res, next){
    res.render('index');
  },

  getMessages : function(req, res, next){
    db.models.Message.find().execFind(function(arr,data){
      res.send(data);
    });
  },

  postMessage : function(req, res, next){
    var message = new db.models.Message();
    message.message = req.params.message;
    message.X = req.params.X;
    message.Y = req.params.Y;
    message.Z = req.params.Z;
    message.save(function () {
      res.send(req.body);
    });
  }
}