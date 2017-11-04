

angular.module("lacc")

.controller("studentFormController", [
	"$scope",
	"$rootScope",
	function($scope, $rootScope) {
		var files = {};

		var userId = $rootScope.user.uid;

		var storageRef = firebase.storage().ref(userId);


	}
])

.directive('filechange', ["$parse", function($parse) {
	return function(scope, element, attrs) {
		element.bind('change', function() {
			var files = element[0].files;
			Array.from(files).forEach(function(f) {
				var r = new FileReader();
				r.onloadend = function(e) {
					var data = e.target.result;

					var mountainsRef = storageRef.child('mountains.jpg');
					console.log(data);
				};

				var ref = storageRef.child()
				ref.put(file).then(function(snapshot) {
				  console.log('Uploaded a blob or file!');
				});

				r.readAsBinaryString(f);
			});
		});
	};
}])
;
