/*define([], function() {
    App.module('', function(, App, Backbone, Marionette, $, _) {

    });
    return ;
});*/

define(['app', 'apps/config/options',
    'apps/config/storage/localstorage',
    'backbone.paginator'
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
                // console.log('Entities.Item is initialized!', this);
            },
            idAttribute: '_id',
            urlRoot: function() {
                return Options.itemUrl(); // + '/' + this._id;
                // console('this isNew?', this.id, this.isNew);
                /*if (!this.id){
                    return Options.itemUrl();
                } else {
                    return Options.itemUrl() + '/' + this.id;
                }*/
            }
        });

        Entities.ItemCollection = Backbone.PageableCollection.extend({
        // Entities.ItemCollection = Backbone.Collection.extend({
            model: Entities.Item,
            url: function() {
                return Options.itemUrl();
            },
            comparator: 'title',
            mode: 'client',
            state: {
                firstPage: 0,
                pageSize: 10,
                currentPage: 0
            },
            hasPrevious: function() {
                return this.hasPreviousPage();
            },

            hasNext: function() {
                return this.hasNextPage();
            },

            // Get total records
            parseState: function(res) {
                return {
                totalRecords: res.totalEntries
                };
            }/*,

            // Get data of page that we want to get
            parseRecords: function(res) {
                var results = res.results || [];

                return results;
            }*/

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
                        var models = initializeItems();
                        items.reset(models);
                    }
                });
                return promise;
            },

            getItemEntity: function(itemId){
                console.log('this is itemid', itemId);

                // var item = new Entities.Item({id: itemId, url: '/api/items/' + itemId});
                var item = new Entities.Item({id: itemId});
                console.log('getting item with id=', itemId, item.url(), item);
                var defer = $.Deferred();
                item.fetch({
                    success: function(data){
                        defer.resolve(data);
                        console.log('getItemEntity, data', data);
                    },
                    error: function(data){
                        console.log('item is NOT fetched, something wrong');
                        defer.resolve(undefined);
                    }
                });
                return defer.promise();
            },

            getItemEntityById: function(itemId){
                var item;
                var defer = $.Deferred();
                $.ajax({
                    url: '/api/items/' + itemId
                }).done(function(data) {
                    console.log('data is', data);
                    item = new Entities.Item(data);
                    defer.resolve(item);
                    console.log('next will return this item:', item);
                    return item;
                });
                return defer.promise();
            }
        };

        App.reqres.setHandler('item:entities', function() {
            return API.getItemEntities();
        });
        App.reqres.setHandler('item:entity', function(itemId) {
            return API.getItemEntity(itemId);
        });
        App.reqres.setHandler('item:entityById', function(itemId) {
            return API.getItemEntityById(itemId);
        });
        App.reqres.setHandler('item:entity:new', function() {
            return new Entities.Item();
        });

    });
    return ;
});
