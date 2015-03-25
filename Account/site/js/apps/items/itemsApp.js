define(["app"], function(App) {
    App.module("ItemsApp", function(ItemsApp, App, Backbone, Marionette, $, _){
        ItemsApp.startWithParent = false;

        ItemsApp.onStart = function () {
            console.log("Starting ItemsApp");
        };

        ItemsApp.onStop = function() {
            console.log("Stopping ItemsApp");
        };

    });

    App.module("Routers.ItemsApp", function(ItemsAppRouter, App, Backbone, Marionette, $, _){

        ItemsAppRouter.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "items": "listItems",
                "items/:id": "showItem",
                "items/:id/edit": "editItem"
            }
        });
        var API = {
            listItems: function(criterion) {
                console.log("itemsApp API.listItems");
                require(["items/list/listController"], function(ListController) {
                    executeAction(ListController.listItems, criterion);
                });
            },
            showItem: function(id) {
                console.log("itemsApp API.showItem");
            },
            editItem: function(id) {
                console.log("itemsApp API.showItem");
            }
        };

        var executeAction = function(action, arg){
            App.startSubApp("ItemsApp");
            action(arg);
            //App.execute("set:active:header", "items");
        };

        /*var API = {
            listContacts: function(criterion){
                require(["apps/contacts/list/list_controller"], function(ListController){
                    executeAction(ListController.listContacts, criterion);
                });
            },

            showContact: function(id){
                require(["apps/contacts/show/show_controller"], function(ShowController){
                    executeAction(ShowController.showContact, id);
                });
            },

            editContact: function(id){
                require(["apps/contacts/edit/edit_controller"], function(EditController){
                    executeAction(EditController.editContact, id);
                });
            }
        };*/

        App.on("items:list", function() {
            console.log("App.on:items:list");
            App.navigate("items");
            API.listItems();
        });

        App.addInitializer(function() {
            new ItemsAppRouter.Router({
                controller: API
            });
        });

        return ItemsAppRouter.Router;
    });

});
