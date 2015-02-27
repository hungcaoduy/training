/*global require*/
'use strict';

require.config({
    baseUrl: "js",
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'jquery': 'lib/jquery',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'text': 'lib/text',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery', 'jquery-dateFormat'],
            exports: 'Backbone'
        }
    }
});

require([
    'backbone',
    'views/list',
    'routers/router'
], function (Backbone, AppView, Workspace) {
    /*jshint nonew:false*/
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});

/*define([],function(){

});
*/
