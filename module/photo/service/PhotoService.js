(function(){
	'use strict';
	
	angular.module('photo.module')
		.factory('PhotoService', PhotoService);
	
	PhotoService.$inject = ['ENVIRONMENT', 'ResourceFactory'];
	
	function PhotoService(ENVIRONMENT, ResourceFactory){
		var url = ENVIRONMENT.proxyUrl + "/photos";
		
		//Custom methods here
		var methods = {
				'get' : {
					method : 'GET',
					isArray : true
				}
		};
		
		//Return new object. Passed arguments will be catch in .apply()
		return new ResourceFactory(url, {}, methods);
	}	
})();