define([
  'jquery',
  'underscore',
  'backbone',
  'models/message',
  'text!templates/message/form.html.ejs'
], function($, _, Backbone, MessageModel, messageFormTemplate){
  var WallForm = Backbone.View.extend({
    el: '.message-form-container',
    render: function () {
      $(this.el).html(messageFormTemplate);
    },
    events: {
      'click .post-message': 'postMessage'
    },
    postMessage: function() {
      var that = this;

      var message = new MessageModel();

      message.save({ 
        message: $('.message').val()
      }, {
        success: function () {
          that.trigger('postMessage');
        }
      });
    }
  });
  return WallForm;
});