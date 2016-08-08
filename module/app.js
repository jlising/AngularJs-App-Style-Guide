//The application bootstrap
(function(){
	 'use strict';
	
      angular.element(document).ready(function () {
    	  angular.bootstrap(document.documentElement, 
    			  [	'ui.router',
    	            "ui.bootstrap",
    			   	'ngSanitize',
    			   	'ngResource',
    			   	
    			   	'core.module',
    			   	'photo.module',
    			   	'posts.module']);
      });
})();