(function(){
	'use strict';
	
	angular.module('core.module')
		.factory('SampleService', SampleService);
	
	SampleService.$inject = ['ResourceFactory'];
	
	function SampleService(ResourceFactory){
		var url = "";
		
		//Custom methods here
		var methods = {
				'customMethod' : {
					method : 'GET'
				}
		};
		
		//Return new object. Passed arguments will be catch in .apply()
		return new ResourceFactory(url, {}, methods);
	}	
})();