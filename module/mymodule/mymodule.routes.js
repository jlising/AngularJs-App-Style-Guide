//Module specific routings
(function(){
	'use strict';
	
	angular.module('mymodule.module')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider'];
	
	function routeConfig($stateProvider){
			$stateProvider
	        .state('sample', {
                url: '/',
                templateUrl: './module/mymodule/view/sample/index.html',
                controller: "SampleController",
                controllerAs: "sampleController"
            });
	}
})();