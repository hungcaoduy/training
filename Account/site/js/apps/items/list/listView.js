define([
    'app',
    'tpl!items/list/templates/itemRow.tpl',
    'tpl!items/list/templates/itemTable.tpl',
    'tpl!items/list/templates/panel.tpl',
    'tpl!items/list/templates/layout.tpl',
    'jquery-ui', 'jquery-dateFormat', 'apps/config/marionette/regions/dialog'
    ], function(App, ItemRowTpl, ItemTableTpl, PanelTpl, LayoutTpl) {

    App.module('ItemsApp.List.View', function(View, App, Backbone, Marionette, $, _) {
        View.Item = Marionette.ItemView.extend({
            template: ItemRowTpl,
            tagName: 'tr',
            triggers: {
            'click button.js-delete': 'item:delete'
            },
            events: {
            'click td a.js-show': 'itemShow',
            'click td a.js-edit': 'itemEdit',
            'click': 'highlightName'
            },
            itemShow: function(e) {
                e.preventDefault();
                this.trigger('item:show', this.model);
            },
            itemEdit: function(e) {
                e.preventDefault();
                this.trigger('item:edit', this.model);
            },
            highlightName: function(e) {
                console.log($(e.target).text());
                this.$el.toggleClass('warning');
            },
        });

        View.Items = Marionette.CompositeView.extend({
            tagName: 'table',
            className: 'table table-hover',
            template: ItemTableTpl,
            childView: View.Item,
            childViewContainer: 'tbody',
        });

        View.Panel = Marionette.ItemView.extend({
            template: PanelTpl,
            initialize: function(options) {
            },
            events: {
                'click .js-save': 'saveItem',
                'click .js-new': 'newItem',
                'click .js-mass-delete': 'massDelete'
            },
            newItem: function(e) {
                console.log('panel new item click!');
                this.triggerMethod('panel:new:item');
            },
            saveItem: function(e) {
                console.log('panel save click!');
                this.triggerMethod('panel:save:item');
            },
            massDelete: function(e) {
                this.triggerMethod('panel:mass:delete');
            }
        });


        View.Layout = Marionette.LayoutView.extend({
            template: LayoutTpl,
            regions: {
                formRegion: '#form-region',
                panelRegion: '#panel-region',
                listRegion: '#list-region',
                dialogRegion: Marionette.Region.Dialog.extend({el:'#dialog-region'})
            }
        });
    });

    return App.ItemsApp.List.View;
});
