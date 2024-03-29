define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var views = {};
  var create = function (context, name, View, options) {
    if(typeof views[name] !== 'undefined') {
      views[name].undelegateEvents();
      if(typeof views[name].clean === 'function') {
        views[name].clean();
      }
    }
    var view = new View(options);

    views[name] = view;
    if(typeof context.children === 'undefined'){
      context.children = {};
      context.children[name] = view;
    } else {
      context.children[name] = view;
    }
    return view;
  }


  return {
    create: create
  };
});