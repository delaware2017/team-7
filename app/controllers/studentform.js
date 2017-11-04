var storageRef = firebase.storage().ref();

angular.module("lacc")

.controller("studentFormController", [
	"$scope",
	"$rootScope",
	function($scope, $rootScope) {
		var files = {};

		$scope.save = function(){
			console.log($scope.user);
		}

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

				ref.put(file).then(function(snapshot) {
				  console.log('Uploaded a blob or file!');
				});

				r.readAsBinaryString(f);
			});
		});
	};
}])
;
