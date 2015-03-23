/*global define */

define([
    'marionette',
    'collections/items',
    'views/itemsCompositeV',
    'views/itemsLayout',
    'views/loginView',
    'jquery-dateFormat',
    'jquery-ui',
    'syphon'
    // 'views/Header',
    // 'views/TodoListCompositeView',
    // 'views/Footer'
], function (Marionette, Items, ItemsView, ItemsLayout, LoginView) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        header: '#header-region',
        main: '#main-region',
        footer: '#footer-region'/*,
        dialog: 'dialog-region'*/
    });

    app.addInitializer(function () {
        //var vent = _.extend({}, Backbone.Events);
        var login = new LoginView();
        var itemsLayout = new ItemsLayout();

        // $("#effectiveDate").datepicker();

        app.header.show(login);
        app.main.show(itemsLayout);


    });


    return app;
});
