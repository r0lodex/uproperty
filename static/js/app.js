//@codekit-prepend "../../bower_components/jquery/dist/jquery.min.js"
//@codekit-prepend "../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
//@codekit-prepend "../../bower_components/angular/angular.min.js"
//@codekit-prepend "_uibootstrap.js"
var uprop = angular.module('uprop', [ 'ui.bootstrap' ])
.controller('root', ['$scope', '$http', function($scope, $http) {
	$http.get('resources/properties.json').then(function(response) {
		$scope.properties = response.data;
		$scope.links = ['Buy', 'Rent', 'New Properties', 'Commercial', 'Overseas', 'Find An Agent', 'Sell', 'Tips & Guide', 'News'];
	})
}])