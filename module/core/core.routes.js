//Module specific routings
(function(){
	'use strict';
	
	angular.module('core.module')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function routeConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider
	        .when('', '/')	        
	        .otherwise('/page-not-found');
		
		$stateProvider
	        .state('404', {
	            url: '/page-not-found',
	            templateUrl: './module/core/view/error/404.html'
	        })
	        .state('home', {
                url: '/',
                templateUrl: './module/core/view/default/index.html',
                controller: "DefaultController",
                controllerAs: "defaultController"
            });
	}
})();