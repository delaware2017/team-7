var storageRef = firebase.storage().ref();
var database = firebase.database();

angular.module("lacc")

.controller("studentFormController", [
	"$scope",
	"$rootScope",
	function($scope, $rootScope) {
		var files = {};

		$scope.save = function(){
			console.log($scope.user);
			var userId = $rootScope.userr.uid;
			console.log(userId);
			database.ref().child("users/" +userId).child("profile").set($scope.user);
		};
		$scope.user = {};

		$scope.addFile = function(fileName) {
			var f = $('.filereader')[0].files[0],
				r = new FileReader();

			r.onloadend = function(e) {
				var data = e.target.result;
				//send your binary data via $http or $resource or do anything else with it
				console.log(data);
				r.readAsBinaryString(f);
			};
		};
	}
])

.directive('filechange', ["$rootScope", function($rootScope) {
	return function(scope, element, attrs) {
		element.bind('change', function() {
			var files = element[0].files;
			var fileName = attrs.ngModel;
			Array.from(files).forEach(function(f) {
				var ref = storageRef.child(fileName + $rootScope.userr.uid);
				ref.put(f).then(function(snapshot) {
					scope.user[attrs.ngModel] = snapshot.downloadURL;
				});
			});
		});
	};
}])
;
