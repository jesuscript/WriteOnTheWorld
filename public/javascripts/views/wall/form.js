define([
  'jquery',
  'underscore',
  'backbone',
  'models/message',
  'text!templates/message/form.html.ejs'
], function($, _, Backbone, MessageModel, messageFormTemplate){
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
    },
    show: function(eHandle){
      this.X = eHandle.pageX;
      this.Y = eHandle.pageY;

      $(this.el).fadeIn(200);
      $("#new-message").val("");
      $(this.el).css({top: this.Y + "px", 
                      left: this.X + "px"});
    },
    events: {
      'click .js-post-message': 'postMessage'
    },
    postMessage: function() {
      var that = this;

      var message = new MessageModel();

      message.save({ 
        message: $('#new-message').val(),
        X: this.X,
        Y: this.Y
      }, {
        success: function () {
          that.vent.trigger('postMessage');
          $(that.el).fadeOut(200);
        }
      });
    }
  });
  return WallForm;
});