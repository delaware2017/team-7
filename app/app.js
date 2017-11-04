angular.module("lacc", ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './templates/login.html',
			controller: "loginController"
        });
}])

.run(['$rootScope', function($rootScope) {

}])

.controller('main', ['$scope', "$state", "$rootScope", function($scope, $state, $rootScope) {
}])

.controller('loginController', ['$scope', "$state", "$rootScope", function($scope, $state, $rootScope) {
    $scope.login = function() {
		var username = $scope.user.email;
		var password = $scope.user.password;
		console.log(username, password);
		console.log(firebase);
	};

	$scope.signup = function() {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function() {
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
