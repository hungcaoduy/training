define(['app', 'tpl!items/show/templates/showItem.tpl', 'tpl!items/show/templates/missingItem.tpl', 'jquery-ui', 'jquery-dateFormat'], function(App, ShowItemTpl, MissingItemTpl) {
    App.module('ItemsApp.Show.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({
        	template: MissingItemTpl
        });

        View.Item = Marionette.ItemView.extend({
            template: ShowItemTpl
        });
    });

    return App.ItemsApp.Show.View;
});
