/*global define */

define([
    'marionette',
    'collections/items',
    'views/itemsBCompositeV',//'views/itemsCompositeV',
    'views/loginView',
    'views/addEditItem',//'views/addItem',
    'models/item',
    'jquery-dateFormat',
    'jquery-ui'
    // 'views/Header',
    // 'views/TodoListCompositeView',
    // 'views/Footer'
], function (Marionette, Items, ItemsView, LoginView, AddItem, Item) {
    'use strict';

    var app = new Marionette.Application();
    var items = new Items();
    var viewOptions = {
        collection: items
    };

    // var header = new Header(viewOptions);
    // var main = new TodoListCompositeView(viewOptions);
    // var footer = new Footer(viewOptions);

    app.addRegions({
        header: '#header',
        form: '#form',
        list: '#list',
        footer: '#footer'
    });

    app.addInitializer(function () {
        var vent = _.extend({}, Backbone.Events);
        var login = new LoginView();
        var addItemForm = new AddItem({model: new Item(), vent: vent});
        var itemsView = new ItemsView({collection: items, vent: vent});
        app.header.show(login);
        app.form.show(addItemForm);
        $("#effectiveDate").datepicker();
        //app.list.show(itemsView);


    });



    return app;
});
