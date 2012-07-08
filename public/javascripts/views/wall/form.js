define([
  'jquery',
  'underscore',
  'backbone',
  'models/message',
  'text!templates/message/form.html.ejs',
  'minicolors'
], function($, _, Backbone, MessageModel, 
            messageFormTemplate){
  var WallForm = Backbone.View.extend({
    el: '.message-widget',
    initialize: function(vent){
      this.vent = vent;
      _.bindAll(this,"show");

      // event bindings:
      vent.bind("wallClick",this.show);
    },
    render: function () {
      $(this.el).html(messageFormTemplate);
      $("#color-picker").miniColors();
    },
    show: function(eHandle){
      this.X = eHandle.pageX;
      this.Y = eHandle.pageY;

      $(this.el).fadeIn(200);
      $("#new-message").val("");
      $(this.el).css({top: this.Y + "px", 
                      left: this.X + "px"});
    },
    close: function(){
      $(this.el).fadeOut(200);
    },
    events: {
      'click .js-post-message': 'postMessage',
      'click .close-widget' : 'close'
    },
    postMessage: function() {
      var that = this;

      var message = new MessageModel();

      message.save({ 
        message: $('#new-message').val(),
        X: this.X,
        Y: this.Y,
        color: $("#color-picker").val()
      }, {
        success: function () {
          that.vent.trigger('postMessage');
          that.close();
        }
      });
    }
  });
  return WallForm;
});