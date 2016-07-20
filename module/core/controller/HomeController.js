(function(){
	'use strict';
	
	angular.module('core.module')
		.controller('HomeController', HomeController);
	
	HomeController.$inject = ['$log'];
	
	function HomeController($log){
		//ControllerAs scope variable
		var homeController = this;		
		
		angular.extend(homeController, {
			/** variables here...**/
			message : ""});
		
		homeController.hello = function(){
			homeController.message = "Hello!";
			$log.debug("Hello!");
		};
		
		homeController.hello();
	}
})();