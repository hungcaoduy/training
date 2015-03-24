require.config({
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'marionette': 'lib/backbone.marionette',
        'jquery': 'lib/jquery',
        'text': 'lib/text',
        'tpl': 'lib/underscore-tpl',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'jquery-ui': 'lib/jquery-ui',
        'syphon': 'lib/backbone.syphon',
        'itemManager': 'apps/items',
        'itemManagerApp': 'apps/items/itemManagerApp'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        'jquery-dateFormat': {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'tpl': {
            deps: ['text']
        },
        'syphon': {
            deps: ['backbone']
        }
    },
    deps: ['jquery', 'underscore']
});


require([
    'itemManagerApp',
    'backbone',
    'routers/router',
    'controllers/controller'
], function (app, Backbone, Router, Controller) {
    'use strict';

    app.start();
    new Router({ controller: Controller });

    Backbone.history.start();
});

