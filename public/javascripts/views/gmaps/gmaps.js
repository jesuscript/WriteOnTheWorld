define([
  'jquery',
  'underscore',
  'backbone',
  'collections/messages',
  'overlays/message_overlay',
  'text!templates/gmaps/gmaps.html.ejs'
], function($, _, Backbone,MessagesCollection, MessageOverlay,
            gmapsTemplate){
  var GmapsView = Backbone.View.extend({
    el: ".gmaps-container",
    initialize: function(vent){
      this.vent = vent;
    },
    render: function(){
      var self = this;
      var messages = new MessagesCollection();

      $(this.el).html(gmapsTemplate);

      $(document).ready(function(){
        self.map = new google.maps.Map(
          document.getElementById("map-container"),{
            center: new google.maps.LatLng(48.0, 15.0),//europe :)
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
          });
        self.map.setOptions({
          styles:[
            {featureType: "all",
             elementType: "labels",
             stylers: [
               { visibility: "off" }]
            }
          ]
        });

        messages.fetch({
          success: function(messages){
            _.each(messages.models, function(message){
              var mo = new MessageOverlay(message,self.map);
            });
          }
        });

      });


    }
  });
  return GmapsView;
});