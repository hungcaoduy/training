define(['app'], function(App) {
    App.module('ItemsApp', function(ItemsApp, App, Backbone, Marionette, $, _){
        ItemsApp.startWithParent = false;

        ItemsApp.onStart = function () {
            // console.log('Starting ItemsApp');
        };

        ItemsApp.onStop = function() {
            // console.log('Stopping ItemsApp');
        };

    });

    App.module('Routers.ItemsApp', function(ItemsAppRouter, App, Backbone, Marionette, $, _){

        ItemsAppRouter.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'items': 'listItems',
                'items/:id': 'showItem',
                'items/:id/edit': 'editItem',
                'items/new': 'newItem'
            }
        });
        var API = {
            listItems: function(criterion) {
                require(['items/list/listController'], function(ListController) {
                    executeAction(ListController.listItems, criterion);
                });
            },
            showItem: function(id) {
                require(['apps/items/show/showController'], function(showController) {
                    executeAction(showController.showItem, id);
                });
            },
            editItem: function(id) {
                require(['apps/items/edit/editController'], function(editController) {
                    executeAction(editController.editItem, id);
                });
            },
            editItemModel: function(model) {
                require(['apps/items/edit/editController'], function(editController) {
                    // executeAction(editController.editItem, id);
                    executeAction(editController.editItemModel, model);
                });
            },
            editItemById: function(id) {
                require(['apps/items/edit/editController'], function(editController) {
                    executeAction(editController.editItemById, id);
                });
            },
            newItem: function() {
                // console.log('itemsApp API.newItem');
                require(['apps/items/new/newController'], function(newController) {
                    executeAction(newController.newItem);
                });
            }
        };

        var executeAction = function(action, arg){
            App.startSubApp('ItemsApp');
            action(arg);
            App.execute('set:active:header', 'items');
        };

        App.on('items:list', function() {
            // console.log('App.on:items:list');
            App.navigate('items');
            API.listItems();
        });

        App.on('item:show', function(id) {
            // console.log('handle item:show in itemsApp');
            App.navigate('items/' + id);
            API.showItem(id);
        });

        App.on('item:edit', function(item) {
            var id = item.id;
            console.log('item:edit id=', id);
            App.navigate('items/' + id + '/edit');
            API.editItemById(id);
            // API.editItemModel(item.model);
            // API.editItem(id);//why does not this work
        });

        App.on('item:new', function() {
            // console.log('handle item:new in itemsApp');
            App.navigate('items/new');
            API.newItem();
        });

        App.on('item:save', function(args) {
            // console.log('handle item:new in itemsApp');
            //App.navigate('items/new');
            args.model.set(args.data);
            args.model.save();
            window.history.back();
        });
        

        App.addInitializer(function() {
            new ItemsAppRouter.Router({
                controller: API
            });
        });

    });
    return App.ItemsAppRouter;

});
