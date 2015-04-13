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
                'items/new': 'newItem',
                'items/:id': 'showItem',
                'items/:id/edit': 'editItemById'
                // 'items/:id/edit': 'editItem',
            },
            onRoute: function(name, path, arguments) {
                console.log('name, path, arguments:', name, path, arguments);
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
                console.log('itemsApp API.newItem');
                require(['apps/items/new/newController'], function(newController) {
                    console.log('I will call newController.newItem');
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
            App.navigate('items');
            // API.listItems(); //don't need such call with help of {trgger: true} of Backbone.history.navigate({trigger: true})
        });

        App.on('item:show', function(item) {
            var id = item.id;
            App.navigate('items/' + id);
            // API.showItem(id);
        });

        App.on('item:edit', function(item) {
            var id = item.id;
            App.navigate('items/' + id + '/edit');
        });

        App.on('item:new', function() {
            console.log('I catch item:new, App say');
            App.navigate('items/new');
            // API.newItem();
        });

        App.on('item:save', function(args) {
            args.model.set(args.data);
            args.model.save();
        });
        

        App.addInitializer(function() {
            new ItemsAppRouter.Router({
                controller: API
            });
        });

    });
    return App.ItemsAppRouter;

});
