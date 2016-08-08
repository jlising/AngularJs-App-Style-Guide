//Module specific routings
(function(){
	'use strict';
	
	angular.module('photo.module')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider'];
	
	function routeConfig($stateProvider){
			$stateProvider
	        .state('photo', {
                url: '/photo',
                templateUrl: './module/photo/view/photo/index.html',
                controller: "PhotoController",
                controllerAs: "photoController"
            });
	}
})();