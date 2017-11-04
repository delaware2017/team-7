var database = firebase.database();

<<<<<<< HEAD
angular.module("lacc").controller("academicRubricController", ["$scope", "$rootScope", function($scope, $rootScope) {
//	$scope.people = $rootScope.people;

$scope.sumInputs = function() {
    var result = document.getElementById('totalScore');
    var sum = 0;
    $('.form-control').each (function() {
        var q = ($(this).val());
        sum  = sum + parseInt(q);  
      })
    result.value = (sum);
  }


=======
angular.module("lacc")
.controller("graderrController", ["$scope", "$rootScope", "$stateParams", function($scope, $rootScope, $stateParams) {
	var userid = $stateParams.id;
	var data = $rootScope.listofusers[userid];
	$scope.student = data;
>>>>>>> 527f0e4a0a6ef36c49a05ff326defec5b3e76e60
}]);
