'use strict';

// Register `exampleOne` component, along with its associated controller and template
angular.
  module('exampleOne').
  component('exampleOne', {
    templateUrl: 'example-one/example-one.template.html',
    controller: ['getData',
      function ExampleOneController(getData) {
		    this.loadData = function() {
			    this.data = getData.query();
		    };
        //this.orderProp = 'country';
      }
    ]
  });
