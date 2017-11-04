var database = firebase.database();

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


}]);
