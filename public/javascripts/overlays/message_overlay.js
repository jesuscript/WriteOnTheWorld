define([
  'jquery',
  'text!templates/gmaps/message.html.ejs'
],function($,messageTemplate){
  var MessageOverlay = function(message,map){
    this.message = message;
    this.map = map;
    this.setMap(map);
  };

  MessageOverlay.prototype = new google.maps.OverlayView();

  MessageOverlay.prototype.onAdd = function(x){
    this.$el = $(_.template(messageTemplate,{message: this.message}));
    var panes = this.getPanes();
    $(panes.overlayLayer).append(this.$el);
  };

  MessageOverlay.prototype.draw = function(){
    var overlayProjection = this.getProjection();
    var bounds = new google.maps.LatLng(
      this.message.get("lat"),
      this.message.get("lng")
    );
    var sw = overlayProjection.fromLatLngToDivPixel(bounds);
    this.$el.css({left:sw.x, top:sw.y });
  }

  return MessageOverlay;
});