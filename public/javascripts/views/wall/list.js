define([
  'jquery',
  'underscore',
  'backbone',
  'collections/messages',
  'text!templates/message/list.html.ejs'
], function($, _, Backbone, MessagesCollection, wallListTemplate){
  var WallList = Backbone.View.extend({
    el: '.message-wall-container',
    initialize: function(vent){
      this.vent = vent;
      _.bindAll(this,"render");

      // event bindings:
      vent.bind("postMessage",this.render)
    },
    render: function () {
      var that = this;
      var messages = new MessagesCollection();
      messages.fetch({
        success: function(messages) {
          $(that.el).html(_.template(wallListTemplate, {messages: messages.models, _:_}));
        }
      });
    },events:{
      'click' : 'wallClick'
    },
    wallClick: function(e){
      this.vent.trigger("wallClick",e); //global trigger
    }
  });
  return WallList;
});