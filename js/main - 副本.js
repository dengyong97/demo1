require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
		less: '../bower_components/less/dist/less',
		demo1: '../js/demo1'
    },
	 shim: {
		'demo1': ['jquery']
    }
});
 
require(['jquery','less','demo1'], function(jquery,less,demo1) {
   
});