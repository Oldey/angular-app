'use strict';

angular.
  module('core.getData').
  factory('getData', ['$resource',
    function($resource) {
      return $resource('getData', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
