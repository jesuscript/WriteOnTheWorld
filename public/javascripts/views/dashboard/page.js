define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/template.html.ejs',
  'views/wall/form',
  'views/wall/list',
  'views/gmaps/gmaps'
], function($, _, Backbone, Vm, appTemplate, WallFormView, 
            WallListView, GmapsView){
  var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      $(this.el).html(appTemplate);
      
      // Create new Backbone views using the view manager (does some extra goodies);
      var vent = _.extend({},Backbone.Events);
      var wallFormView = Vm.create(this,'WallFormView',WallFormView,
                                    vent);
      wallFormView.render();
      
      /*
      var wallListView = Vm.create(this,'WallListView',WallListView,
                                    vent);
      wallListView.render();
      */
      var gmapsView = Vm.create(this,'GmapsView', GmapsView, vent);
      gmapsView.render();
    }
  });
  return DashboardPage;
});