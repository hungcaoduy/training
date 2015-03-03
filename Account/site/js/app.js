/*global require*/
'use strict';

require.config({
    baseUrl: "js",
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'jquery': 'lib/jquery',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'jquery-ui': 'lib/jquery-ui',
        'text': 'lib/text',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: '$'
        },
        'jquery-dateFormat': {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        }
    }
});

require([
    'jquery',
    'backbone',
    'views/list',
    'routers/router',
    'jquery-dateFormat',
    'jquery-ui'
], function ($, Backbone, AppView, Workspace) {
    /*jshint nonew:false*/
    $('#effectiveDate').datepicker();
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});

/*define([],function(){

});
*/
