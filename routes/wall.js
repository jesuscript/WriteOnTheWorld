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

    if(req.body.X !== undefined && req.body.X !== null){
      message.X = req.body.X;
    }else{
      message.X = Math.random() * 900;
    }
    if(req.body.Y !== undefined && req.body.X !== null){
      message.Y = req.body.Y;
    }else{
      message.Y = Math.random() * 500;
    }

    message.Z = 0;

    message.save(function () {
      res.send(req.body);
    });
  }
}