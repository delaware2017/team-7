angular.module("lacc", ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './templates/login.html',
			controller: "loginController"
        })
		.state('register', {
            url: '/register',
            templateUrl: './templates/register.html',
			controller: "loginController"
        });
}])

.run(['$rootScope', function($rootScope) {

}])

.controller('main', ['$scope', "$state", "$rootScope", function($scope, $state, $rootScope) {
}])


;
