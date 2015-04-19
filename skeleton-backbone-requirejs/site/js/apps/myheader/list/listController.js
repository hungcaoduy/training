define(['app', 'apps/myheader/list/listView', 'backbone.picky'], function (App, View) {
	App.module('Myheader.List', function(List, App, Backbone, Marionette, $, _) {
		List.Controller = {
			listHeader: function() {
				require(['entities/header'], function() {
                    var links = App.request('header:entities');
                    var headers = new View.Headers({collection: links});

                    headers.on('brand:clicked', function(){
                        App.trigger('items:list');
                    });

                    headers.on('childview:navigate', function(childView, model){
                        var trigger = model.get('navigationTrigger');
                        App.trigger(trigger);
                    });

                    App.headerRegion.show(headers);
				});
			},
	        setActiveHeader: function(headerUrl){
	            require(['entities/header'], function(){
	                var links = App.request('header:entities');

	                var headerToSelect = links.find(function(header){ return header.get('url') === headerUrl; });

	                headerToSelect.on('select', function() {
	                	// console.log('I am selected');
	                });

    				var SelectableModel = Backbone.Model.extend({
    				  initialize: function(){
    				    var selectable = new Backbone.Picky.Selectable(this);
    				    _.extend(this, selectable);
    				  }
    				});

                    links.select(headerToSelect);
                    links.trigger('reset');
    	            });
	        }
		};
	});

	return App.Myheader.List.Controller;
});
