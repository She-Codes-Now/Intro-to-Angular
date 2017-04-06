(function (angular) {
  'use strict';

  // declare a module
  var myAppModule = angular.module('myApp', []);

  // configure the module
  myAppModule.filter('greet', function() {
    return function(name) {
      return 'Hello ' + name + '!';
    };
  });

})(window.angular);
