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
            url: '/register/:type',
            templateUrl: './templates/register.html',
			controller: "loginController"
        })
        .state('homepage',{
        	url: '/homepage',
        	templateUrl: './templates/homepage.html',
        	controller: "homepageController"
        })
        .state('firstpage',{
        	url: '/firstpage',
        	templateUrl: './templates/firstpage.html'
        })
	.state('grader', {
	url: '/graderpage',
	templateUrl: './templates/grader.html',
	controller: "graderController"
})
        ;
}])

.run(['$rootScope', function($rootScope) {

}])

.controller('main', ['$scope', "$state", "$rootScope", function($scope, $state, $rootScope) {
}])


;
