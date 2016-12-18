'use strict';

angular.
  module('core.getDataTwo').
  factory('getDataTwo', ['$resource',
    function($resource) {
      return $resource('getDataTwo', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);