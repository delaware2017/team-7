angular.module("lacc")

.controller("nominatorController", ["$scope", function($scope) {
	$scope.login = function() {
		var email = $scope.user.email;
		var password = $scope.user.password;
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function(data) {
			$rootScope.user = data;
			window.localStorage.setItem("userinfo", JSON.stringify(data));
			console.log(data);
			var ref = database.ref("users");
			// Attach an asynchronous callback to read the data at our posts reference
			ref.on("value", function(snapshot) {
			  var info = snapshot.val();
			  $rootScope.people = info;
			  $rootScope.userData = info[data.uid];

			  $state.go("dashboard");
			}, function (errorObject) {
			  console.log("The read failed: " + errorObject.code);
			  $scope.invalid = true;
			  // <div ng-show="invalid">Incorrect username or password</div>
			});

		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

	};
}]);