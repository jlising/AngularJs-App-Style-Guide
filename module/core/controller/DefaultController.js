(function(){
	'use strict';
	
	angular.module('core.module')
		.controller('DefaultController', DefaultController);
	
	DefaultController.$inject = ['$log', 'QuoteService'];
	
	function DefaultController($log, QuoteService){
		//ControllerAs scope variable
		var DefaultController = this;		
		
		angular.extend(DefaultController, {
			/** variables here...**/
			message : ""});
		
		DefaultController.hello = function(){
			DefaultController.message = "Hello!";
			$log.debug("Hello!");
		};

		QuoteService.get({path:"posts"},function(){
			$log.debug('test');
		});
		
		//DefaultController.hello();
	}
})();