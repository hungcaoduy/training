define(['app','common/views',
    'tpl!items/edit/templates/editItem.tpl',
    'tpl!items/edit/templates/missingItem.tpl',
    'jquery-ui', 'jquery-dateFormat',
    'backbone.syphon'],
    function(App, CommonViews, EditItemTpl, MissingItemTpl) {
    App.module('ItemsApp.Edit.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({
        	template: MissingItemTpl
        });

        View.Item = CommonViews.Form.extend({
        });
    });

    return App.ItemsApp.Edit.View;
});
