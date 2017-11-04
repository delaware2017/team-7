angular.module("lacc")
.controller("studentFormController", ["$scope", "$rootScope", function($scope, $rootScope) {
	$scope.add = function() {
	    var f = $('.filereader')[0].files[0],
	        r = new FileReader();

	    r.onloadend = function(e) {
	      var data = e.target.result;
	      //send your binary data via $http or $resource or do anything else with it
		  console.log(data);
		    r.readAsBinaryString(f);
		};
	};
}]);
