define([
  'jquery',
  'underscore',
  'backbone',
  'collections/messages',
  'text!templates/message/list.html.ejs'
], function($, _, Backbone, MessagesCollection, wallListTemplate){
  var WallList = Backbone.View.extend({
    el: '.wall-list-container',
    render: function () {
      var that = this;
      var messages = new MessagesCollection();
      messages.fetch({
        success: function(messages) {
          $(that.el).html(_.template(wallListTemplate, {messages: messages.models, _:_}));
        }
      });
    }
  });
  return WallList;
});