/*require.config({
    baseUrl: "js",
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'marionette': 'lib/backbone.marionette',
        'jquery': 'lib/jquery',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'jquery-ui': 'lib/jquery-ui',
        'text': 'lib/text',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min',
        'modalview': 'lib/Backbone.ModalDialog'
    },
    shim: {
        // 'underscore': {
        //     exports: '_'
        // },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: 'backbone',
            exports: 'Backbone.Marionette'
        },
        // 'jquery': {
        //     exports: '$'
        // },
        'jquery-dateFormat': {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'modalview': {
            deps: ['backbone'],
            exports: 'ModalView'
        }
    },
    deps: ['jquery', 'underscore']
});*/

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
        }
    },
    deps: ['jquery', 'underscore']
});


require([
    'app',
    'backbone',
    'routers/router',
    'controllers/controller'
], function (app, Backbone, Router, Controller) {
    'use strict';

    app.start();

    new Router({ controller: Controller });

    Backbone.history.start();
});


/*define([],function(){

});
*/
