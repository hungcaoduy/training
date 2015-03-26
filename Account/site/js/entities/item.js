/*define([], function() {
    App.module('', function(, App, Backbone, Marionette, $, _) {

    });
    return ;
});*/

define(['app', 'apps/config/options', 'apps/config/storage/localstorage'
    ], function(App, Options) {
    App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
        Entities.Item = Backbone.Model.extend({
            defaults: {
                title: 'default title',
                description: 'Unknown',
                url: 'Unknown',
                image: 'img/placeholder.jpg',
                keywords: 'None',
                effectiveDate: new Date(2015,02,01).getTime(),
                createdDate: 'Unknown',
                createdBy: 'Unknown',
                updatedDate: 'Unknown',
                updatedBy: 'Unknown'
            },
            initialize: function(options) {
                //console.log('Entities.Item is initialized!');
            },
            idAttribute: '_id',
            urlRoot: Options.itemUrl()
        });

        Entities.ItemCollection = Backbone.Collection.extend({
            model: Entities.Item,
            url: Options.itemUrl(),
            comparator: 'title'
        });

        if (Options.isOffline) {
            Entities.configureStorage(Entities.Item);
            Entities.configureStorage(Entities.ItemCollection);
        }

        var initializeItems = function(){
            console.log('initializing data');
            var items = new Entities.ItemCollection([
                {id: 1, title: 'default title', description: 'Unknown', url: 'Unknown', image: 'img/placeholder.jpg', keywords: 'None', effectiveDate: new Date(2015,02,01).getTime(), createdDate: new Date(2015,02,01).getTime(), createdBy: 'Unknown', updatedDate: new Date(2015,02,01).getTime(), updatedBy: 'Unknown' },
                {id: 2, title: 'default title', description: 'Unknown', url: 'Unknown', image: 'img/placeholder.jpg', keywords: 'None', effectiveDate: new Date(2015,02,01).getTime(), createdDate: new Date(2015,02,01).getTime(), createdBy: 'Unknown', updatedDate: new Date(2015,02,01).getTime(), updatedBy: 'Unknown' },
                {id: 3, title: 'default title', description: 'Unknown', url: 'Unknown', image: 'img/placeholder.jpg', keywords: 'None', effectiveDate: new Date(2015,02,01).getTime(), createdDate: new Date(2015,02,01).getTime(), createdBy: 'Unknown', updatedDate: new Date(2015,02,01).getTime(), updatedBy: 'Unknown' },
                {id: 4, title: 'default title', description: 'Unknown', url: 'Unknown', image: 'img/placeholder.jpg', keywords: 'None', effectiveDate: new Date(2015,02,01).getTime(), createdDate: new Date(2015,02,01).getTime(), createdBy: 'Unknown', updatedDate: new Date(2015,02,01).getTime(), updatedBy: 'Unknown' }
            ]);
            items.forEach(function(item){
                item.save();
            });
            console.log(items.models);
            return items.models;
        };

        var API = {
            getItemEntities: function(){
                console.log('geting item:entities');
                var items = new Entities.ItemCollection();

                var defer = $.Deferred();
                items.fetch({
                    success: function(data){
                        defer.resolve(data);
                    }
                });
                var promise = defer.promise();
                $.when(promise).done(function(items){
                    if(items.length === 0){
                        // if we don't have any items yet, create some for convenience
                        console.log('we need to initialize data');
                        var models = initializeItems();
                        items.reset(models);
                    }
                });
                return promise;
            },

            getItemEntity: function(itemId){
                var item = new Entities.Item({id: itemId});
                var defer = $.Deferred();
                setTimeout(function(){
                    item.fetch({
                        success: function(data){
                        defer.resolve(data);
                        },
                        error: function(data){
                            defer.resolve(undefined);
                        }
                    });
                }, 2000);
                return defer.promise();
            }
        };

        App.reqres.setHandler('item:entities', function() {
            return API.getItemEntities();
            //return new Entities.ItemCollection();
        });
        App.reqres.setHandler('item:entity', function() {
            return API.getItemEntity();
        });
        App.reqres.setHandler('item:entity:new', function() {
            return new Entities.Item();
        });

    });
    return ;
});
