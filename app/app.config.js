'use strict';

angular.
  module('angularApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/example-one', {
          template: '<example-one></example-one>'
        }).
        when('/example-two', {
          template: '<example-two></example-two>'
        }).
		    when('/', {
          template: '<main></main>'
        }).
        otherwise('/');
    }
  ]);
