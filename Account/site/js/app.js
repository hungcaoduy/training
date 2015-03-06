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
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min',
        'modalview': 'lib/Backbone.ModalDialog'
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
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'modalview': {
            deps: ['backbone'],
            exports: 'ModalView'
        }
    }
});

require([
    'jquery',
    'backbone',
    'views/list',
    'routers/router',
    'views/login',
    'jquery-dateFormat',
    'jquery-ui',
    'bootstrap',
    'modalview'
], function ($, Backbone, AppView, Workspace, LoginView) {
    /*jshint nonew:false*/
    $('#effectiveDate').datepicker();
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();

    var login = new LoginView();

    //login
    $('a.login-window').click(function() {
        login.render();
    });


    //http://stackoverflow.com/questions/9963799/ajax-jquery-load-webpage-content-into-a-div-on-page-load
    //$("#siteloader").html('<object data="https://css-tricks.com/">');
});

/*define([],function(){

});
*/
