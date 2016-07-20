(function(){
	'use strict';
	
	angular.module('mymodule.module')
		.controller('SampleController', SampleController);
	
	SampleController.$inject = ['$log'];
	
	function SampleController($log){
		//ControllerAs scope variable
		var sampleController = this;		
		
		angular.extend(sampleController, {
			/** variables here...**/
			message : ""});
		
		sampleController.hi = function(){
			sampleController.message = "Hi!";
			$log.debug("Hi!");
		};
		
		sampleController.hi();
	}
})();