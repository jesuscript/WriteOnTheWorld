define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/layout.html.ejs' 
], function($, _, Backbone, Vm, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: $('.container'),
    initialize: function () {
      
    },
    render: function () {
      var that = this;
      $(this.el).html(layoutTemplate);
      Backbone.history.start();
    } 
  });
  return AppView;
});