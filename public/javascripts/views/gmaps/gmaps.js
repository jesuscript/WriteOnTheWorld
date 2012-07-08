define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/gmaps/gmaps.html.ejs'
], function($, _, Backbone, gmapsTemplate){
  var GmapsView = Backbone.View.extend({
    el: ".gmaps-container",
    initialize: function(vent){
      this.vent = vent;
    },
    render: function(){
      var self = this;

      $(this.el).html(gmapsTemplate);

      $(document).ready(function(){
        this.map = new google.maps.Map(
          document.getElementById("map-container"),{
            center: new google.maps.LatLng(48.0, 15.0),//europe :)
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
          });
      });
    }
  });
  return GmapsView;
});