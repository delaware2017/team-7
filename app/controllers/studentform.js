var storageRef = firebase.storage().ref();

angular.module("lacc")

.controller("studentFormController", [
	"$scope",
	"$rootScope",
	function($scope, $rootScope) {
		var files = {};

		$scope.save = function(){
			console.log($scope.user);
			var x = {"personalStatement":"gg","gpa":"4","classRank":"4","classesTaken":"g","honorsClassesTaken":"g","sat":"2200","academicAwards":"g","HonorSociety":"g","performingArtLink":"g","ScienceTechnologyAwards":"g","communityService":"g","atheletics":"g"};
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
			var fileName = attrs.ngModel;
			Array.from(files).forEach(function(f) {
				var ref = storageRef.child(fileName);
				ref.put(f).then(function(snapshot) {
				  console.log('Uploaded a blob or file!');
				});
			});
		});
	};
}])
;
