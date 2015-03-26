define(["marionette", "apps/config/marionette/regions/dialog"], function(Marionette){
    var App = new Marionette.Application();

    App.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
        dialogRegion: Marionette.Region.Dialog.extend({
            el: "#dialog-region"
        })
    });

    App.navigate = function(route,  options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function(){
        return Backbone.history.fragment;
    };

    App.startSubApp = function(appName, args){
        var currentApp = appName ? App.module(appName) : null;
        if (App.currentApp === currentApp){ return; }

        if (App.currentApp){
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        if(currentApp){
            currentApp.start(args);
        }
    };

    App.on("start", function(){
        if(Backbone.history){
            require(["apps/items/itemsApp"], function () {
                Backbone.history.start();
                console.log("app starting, current route is ", App.getCurrentRoute() || "Default");
                if(App.getCurrentRoute() === ""){
                    App.trigger("items:list");
                }
            });
            /*require(["apps/contacts/contactsApp", "apps/about/about_app"], function () {
                Backbone.history.start();

                if(App.getCurrentRoute() === ""){
                    App.trigger("contacts:list");
                }
            });*/

        }
    });

    //App.isOffline = true;
    return App;
});
