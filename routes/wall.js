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

    message.message = req.body.message;

    if(message.message){
      message.X = (req.body.X !== undefined) ? req.body.X  
        : Math.random() * 1280;

      message.Y = (req.body.Y !== undefined) ? req.body.Y 
        : Math.random() * 1024;

      message.color= (req.body.color !== undefined ) ? req.body.color 
        : "#000000"
        
      message.Z = 0;

      message.save(function () {
        res.send(req.body);
      });
    }
  }
}