define(['app', 'tpl!items/show/templates/showItem.tpl'], function(App, ShowItemTpl) {
    App.module('ItemsApp.Show.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({

        });

        View.Item = Marionette.ItemView.extend({
            template: ShowItemTpl
        });
    });
});
