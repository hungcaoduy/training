define([
    'app',
    'tpl!items/list/templates/itemRow.tpl',
    'tpl!items/list/templates/itemTable.tpl',
    'jquery-ui', 'jquery-dateFormat'
    ], function(App, ItemRowTpl, ItemTableTpl) {

    App.module('ItemsApp.List.View', function(View, App, Backbone, Marionette, $, _) {
        View.Item = Marionette.ItemView.extend({
            template: ItemRowTpl,
            tagName: 'tr',
            triggers: {
            'click td a.js-show': 'item:show',
            'click td a.js-edit': 'item:edit',
            'click button.js-delete': 'item:delete'
            }
        });

        View.Items = Marionette.CompositeView.extend({
            tagName: 'table',
            className: 'table table-hover',
            template: ItemTableTpl,
            childView: View.Item,
            childViewContainer: 'tbody',
        });
    });

    return App.ItemsApp.List.View;
});
