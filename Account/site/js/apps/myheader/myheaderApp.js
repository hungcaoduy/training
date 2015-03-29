//define(['app', 'apps/myheader/list/listController'], function(App, ListController) {
	define(['app'], function(App) {
	App.module('Myheader', function(Myheader, App, Backbone, Marionette, $, _) {
		Myheader.onBeforeStart = function() {
			console.log('Myheader module is onStart');
			API.listHeader();
		};

		Myheader.onStop = function() {
			console.log('Myheader module is onStop');
		};

		var API = {

			listHeader: function() {
				require(['apps/myheader/list/listController'], function(ListController) {					
					ListController.listHeader();
					console.log('I am API.listHeader, ', 'ListController:');
				});
			}
		};

		App.commands.setHandler('set:active:header', function(name) {
			require(['apps/myheader/list/listController'], function(ListController) {					
				ListController.setActiveHeader(name);
			});
		});
	});
	return App.Myheader;
});