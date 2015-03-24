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
    });
});