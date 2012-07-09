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
      message.lat = req.body.lat;
      message.lng = req.body.lng;
      message.color=  req.body.color ;

      db.models.Message.count({},function(err,c){
        message.Z = c;

        message.save(function () {
          res.send(req.body);
        });
      });
    }
  }
}