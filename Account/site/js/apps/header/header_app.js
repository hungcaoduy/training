define(['app', 'apps/header/list/list_controller'], function(App, ListController){
    App.module('HeaderApp', function(HeaderApp, App, Backbone, Marionette, $, _){

        HeaderApp.onStart = function() {
            console.log('header is onStart');
            API.listHeader();
        };

        HeaderApp.on('before:start', function() {
            console.log('HeaderApp is about to start');
        });

        var API = {
            listHeader: function(){
                ListController.listHeader();
            }
        };

        App.commands.setHandler('set:active:header', function(name){
            ListController.setActiveHeader(name);
        });

        // HeaderApp.on('start', function(){
        // });
    });
    return App.HeaderApp;
});
