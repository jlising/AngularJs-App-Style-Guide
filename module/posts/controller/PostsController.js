(function(){
	'use strict';
	
	angular.module('posts.module')
		.controller('PostsController', PostsController);
	
	PostsController.$inject = ['$log','PostsService','UserService'];
	
	function PostsController($log, PostsService, UserService){
		
		var postsController = this;		
		
		angular.extend(postsController, { 
						posts: [],
						currentPage : 0,
						pageSize : 12,
						users : []
		});
		
		/**
		 * Get the photo thumbnails
		 */
		postsController.getPosts = function(){
			UserService.get({}, function(response){
				postsController.users = response;
				
				PostsService.get({}, function(response){
					postsController.posts = response;
					postsController.numberOfPages =  Math.ceil(postsController.posts.length / postsController.pageSize);
					
					angular.forEach(postsController.posts, function(value, key) {
						value.user = _getUser(value.userId);
					});
				},function(error){
					$log.debug(error.status + " " + error.statusText);
				});
			},function(error){
				$log.debug(error.status + " " + error.statusText);
			});
		};
				
		postsController.getPosts();		
		
		function _getUser(userId){
			var user = {};
			angular.forEach(postsController.users, function(value, key) {
				if(value.id === userId){
					user = value;
					return;	
				}
			});
			
			return user;
		}
	}
})();