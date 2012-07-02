require.config({
  paths: {
    // Major libraries
    jquery: 'lib/jquery/jquery-min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone-min',
    

    // Require.js plugins
    text: 'lib/require/text',
    require: 'lib/require/require',


    templates: '../../templates'
  },
  urlArgs: "bust=" +  (new Date()).getTime()

});

// Let's kick off the application

require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  Router.initialize({appView: appView});
  appView.render();
});

