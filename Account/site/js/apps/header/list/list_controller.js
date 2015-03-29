define(['app', 'apps/header/list/list_view'], function(App, View){
    App.module('HeaderApp.List', function(List, App, Backbone, Marionette, $, _){
        List.Controller = {
            listHeader: function(){
                require(['entities/header'], function(){
                    var links = App.request('header:entities');
                    var headers = new View.Headers({collection: links});

                    headers.on('brand:clicked', function(){
                        App.trigger('contacts:list');
                    });

                    headers.on('childview:navigate', function(childView, model){
                        var trigger = model.get('navigationTrigger');
                        App.trigger(trigger);
                    });
                    console.log('I am here');
                    App.headerRegion.show(headers);
                });
            },

            setActiveHeader: function(headerUrl){
                require(['entities/header'], function(){
                    var links = App.request('header:entities');
                    console.log('links:', links);
                    var headerToSelect = links.find(function(header){ return header.get('url') === headerUrl; });
                    console.log('headerToSelect', headerToSelect);
                    headerToSelect.select();
                    // links.select(headerToSelect);
                    links.trigger('reset');
                });
            }
        };
    });

    return App.HeaderApp.List.Controller;
});
