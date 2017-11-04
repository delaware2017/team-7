
var database = firebase.database();

angular.module("lacc")
.controller("graderController", ["$scope", "$rootScope", function($scope, $rootScope) {
	$scope.people = $rootScope.people;
}]);
