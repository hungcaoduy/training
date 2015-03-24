/*global define */

define([
    'marionette',
    'itemManager/collections/items',
    'itemManager/views/itemsCompositeV',
    'itemManager/views/itemsLayout',
    'jquery-dateFormat',
    'jquery-ui',
    'syphon'
    // 'views/Header',
    // 'views/TodoListCompositeView',
    // 'views/Footer'
], function (Marionette, Items, ItemsView, ItemsLayout) {
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
        var itemsLayout = new ItemsLayout();

        // $("#effectiveDate").datepicker();

        app.main.show(itemsLayout);


    });


    return app;
});
