require.config({
    paths: {
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'marionette': 'lib/backbone.marionette',
        'jquery': 'lib/jquery',
        "backbone.picky": "lib/backbone.picky",
        json2: "lib/json2",
        localstorage: "lib/backbone.localstorage",
        spin: "lib/spin",
        "spin.jquery": "lib/spin.jquery",
        'text': 'lib/text',
        'tpl': 'lib/underscore-tpl',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'jquery-ui': 'lib/jquery-ui',
        'syphon': 'lib/backbone.syphon',
        'items': 'apps/items',
        'contacts': 'apps/contacts'
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
        },
        localstorage: ["backbone"],
        "spin.jquery": ["spin", "jquery"],
        "backbone.picky": ["backbone"]
    },
    deps: ['jquery', 'underscore']
});


require([
    'app'
], function (App) {
    'use strict';

    App.start();

});

