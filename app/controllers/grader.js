var database = firebase.database();

angular.module("lacc")
.controller("graderController", ["$scope", "$rootScope", "$stateParams", function($scope, $rootScope, $stateParams) {
	var userid = $stateParams.id;
	var data = $rootScope.listofusers[userid];
	$scope.student = data;
}]);
