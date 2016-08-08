(function(){
	'use strict';
	
	angular.module('photo.module')
		.controller('PhotoController', PhotoController);
	
	PhotoController.$inject = ['$log','PhotoService'];
	
	function PhotoController($log, PhotoService){
		
		var photoController = this;		
		
		angular.extend(photoController, { 
						photos: [],
						currentPage : 0,
						pageSize : 12
		});
		
		/**
		 * Get the photo thumbnails
		 */
		photoController.getPhotos = function(){
			PhotoService.get({}, function(response){
				photoController.photos = response;
				photoController.numberOfPages =  Math.ceil(photoController.photos.length / photoController.pageSize);
			},function(error){
				$log.debug(error.status + " " + error.statusText);
			});
		};
		
		photoController.getPhotos();		
	}
})();