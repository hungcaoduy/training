/*require.config({
    waitSeconds: 10,
    paths: {
        'backbone': 'lib/backbone',
        'backbone.picky': 'lib/backbone.picky',
        'backbone.syphon': 'lib/backbone.syphon',
        'jquery': 'lib/jquery',
        'jquery-dateFormat': 'lib/jquery-dateFormat',
        'jquery-ui': 'lib/jquery-ui',
        'json2': 'lib/json2',
        'localstorage': 'lib/backbone.localstorage',
        'marionette': 'lib/backbone.marionette',
        'spin': 'lib/spin',
        'spin.jquery': 'lib/spin.jquery',
        'text': 'lib/text',
        'tpl': 'lib/underscore-tpl',
        'underscore': 'lib/underscore',
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
        localstorage: ['backbone'],
        'spin.jquery': ['spin', 'jquery'],
        'backbone.picky': ['backbone']
    },
    deps: ['jquery', 'underscore']
});*/

requirejs.config({
  baseUrl: "js",
  paths: {
    backbone: "lib/backbone",
    "backbone.picky": "lib/backbone.picky",
    "backbone.syphon": "lib/backbone.syphon",
    jquery: "lib/jquery",
    'jquery-dateFormat': 'lib/jquery-dateFormat',
    "jquery-ui": "lib/jquery-ui",
    json2: "lib/json2",
    localstorage: "lib/backbone.localstorage",
    marionette: "lib/backbone.marionette",
    spin: "lib/spin",
    "spin.jquery": "lib/spin.jquery",
    text: "lib/text",
    tpl: "lib/underscore-tpl",
    // underscore: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore",
    underscore: "lib/underscore",
    'items': 'apps/items',
    'header': 'apps/myheader'
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    "spin.jquery": ["spin", "jquery"],
    tpl: ["text"]
  }
});

require([
    'app',
    //'header/header_app'
    'header/myheaderApp'
], function (App) {
    'use strict';

    App.start();

});

