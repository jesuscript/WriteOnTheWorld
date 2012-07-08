define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/template.html.ejs',
  'views/wall/form',
  'views/wall/list'
], function($, _, Backbone, Vm, appTemplate, WallFormView, 
            WallListView){
  var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      $(this.el).html(appTemplate);
      
      // Create new Backbone views using the view manager (does some extra goodies);
      var vent = _.extend({},Backbone.Events);
      this.wallFormView = Vm.create(this,'WallFormView',WallFormView,
                                    vent);
      this.wallFormView.render();
      
      
      this.wallListView = Vm.create(this,'WallListView',WallListView,
                                    vent);
      this.wallListView.render();
    }
  });
  return DashboardPage;
});