(function(){
	'use strict';
	
	angular.module('core.module')
		.controller('HomeController', HomeController);
	
	HomeController.$inject = ['$log', 'SampleService'];
	
	function HomeController($log, SampleService){
		//ControllerAs scope variable
		var homeController = this;		
		
		angular.extend(homeController, {
			/** variables here...**/
			message : ""});
		
		homeController.hello = function(){
			homeController.message = "Hello!";
			$log.debug("Hello!");
		};
		
		SampleService.customMethod();
		SampleService.myCommonFunction();
		
		homeController.hello();
	}
})();