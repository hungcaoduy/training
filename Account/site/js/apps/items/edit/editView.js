define(['app',
    'tpl!items/edit/templates/editItem.tpl',
    'tpl!items/edit/templates/missingItem.tpl',
    'jquery-ui', 'jquery-dateFormat'],
    function(App, EditItemTpl, MissingItemTpl) {
    App.module('ItemsApp.Edit.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({
        	template: MissingItemTpl
        });

        View.Item = Marionette.ItemView.extend({
            template: EditItemTpl
        });
    });

    return App.ItemsApp.Edit.View;
});
