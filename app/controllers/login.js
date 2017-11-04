var database = firebase.database();

angular.module("lacc")

.controller('loginController', ['$scope', "$state", "$rootScope", "$stateParams", function($scope, $state, $rootScope, $stateParams) {
    $scope.login = function() {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(data) {
			console.log(data);
		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

	};

	$scope.signupType = $stateParams.type;

	$scope.signup = function() {
		var email = $scope.user.email;
		var password = $scope.user.password;
		var user_type = $stateParams.type ?  $stateParams.type+"s" : $scope.user.user_type;
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(function() {
				database.ref('user_types/' + user_type).push(email);
				console.log("done");
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			});
	};
}])

;
