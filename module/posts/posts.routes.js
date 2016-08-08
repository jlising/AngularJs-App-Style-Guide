//Module specific routings
(function(){
	'use strict';
	
	angular.module('posts.module')
		.config(routeConfig);
	
	routeConfig.$inject = ['$stateProvider'];
	
	function routeConfig($stateProvider){
			$stateProvider
	        .state('posts', {
                url: '/posts',
                templateUrl: './module/posts/view/posts/index.html',
                controller: "PostsController",
                controllerAs: "postsController"
            });
	}
})();