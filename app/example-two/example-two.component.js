'use strict';

// Register `exampleTwo` component, along with its associated controller and template
angular.
  module('exampleTwo').
  component('exampleTwo', {
    templateUrl: 'example-two/example-two.template.html',
    controller: ['$http',
      function ExampleTwoController($http) {
        this.campaign = {};
        this.campaign.type = '1';
        this.add = function() {
          $http.post('/postData', this.campaign).
            success(function(data) {
              console.log("posted successfully");
            }).error(function(data) {
              console.error("error in posting");
            });
        };
      }
    ]
  });
