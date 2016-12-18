'use strict';

// Register `exampleTwo` component, along with its associated controller and template
angular.
  module('exampleTwo').
  component('exampleTwo', {
    templateUrl: 'example-two/example-two.template.html',
    controller: ['$http', 'getDataTwo',
      function ExampleTwoController($http, getDataTwo) {
        var self = this;
        self.add = function() {
          $http.post('/postData', self.campaign).
            success(function(data) {
              self.preview = getDataTwo.query();
              self.error = {};
            }).error(function(data) {
              // we got error
              self.error = {};
              if (data[0]) self.error.name = true;
              if (data[1]) self.error.url = true;
              if (data[2]) self.error.type = true;
              if (data[3]) self.error.cost = true;
            });
        };
        self.reset = function() {
          self.error = {};
          self.campaign = {};
          self.campaign.type = '1';
        };
        self.reset();
        self.preview = getDataTwo.query();
      }
    ]
  });