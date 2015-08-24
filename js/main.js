require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
		
		demo1: '../js/demo1'
    },
	 shim: {
		'demo1': ['jquery']
    }
});
 
require(['jquery','demo1'], function($,demo1) {
   
});