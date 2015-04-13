define([
    'app',
    'tpl!items/list/templates/itemRow.tpl',
    'tpl!items/list/templates/itemTable.tpl',
    'tpl!items/list/templates/panel.tpl',
    'tpl!items/list/templates/layout.tpl',
    'jquery-ui', 'jquery-dateFormat', 'apps/config/marionette/regions/dialog',
    'backgrid.paginator'
    ], function(App, ItemRowTpl, ItemTableTpl, PanelTpl, LayoutTpl) {

    App.module('ItemsApp.List.View', function(View, App, Backbone, Marionette, $, _) {
        View.Item = Marionette.ItemView.extend({
            template: ItemRowTpl,
            tagName: 'tr',
            triggers: {
            'click td a.js-show': 'item:show',
            'click td a.js-edit': 'item:edit',
            'click button.js-delete': 'item:delete'
            },
            events: {
            'click': 'highlightName'
            },
            highlightName: function(e) {
                this.$el.toggleClass('warning');
            },
            remove: function(){
                var self = this;
                this.$el.fadeOut(function(){
                    Marionette.ItemView.prototype.remove.call(self);
                });
            }
        });

        View.Items = Marionette.CompositeView.extend({
            // tagName: 'table',
            className: 'table table-hover',
            template: ItemTableTpl,
            childView: View.Item,
            childViewContainer: 'tbody',
            ui: {
                paginator: '.js-paginator'
            },
            onRenderCollection: function() {
                this.showPaginator(this.collection);
            },
            showPaginator: function(collection) {
                var paginator = new Backgrid.Extension.Paginator({
                    collection: collection
                });
                this.ui.paginator.empty();
                if (collection.length>0) {
                    this.ui.paginator.append(paginator.render().$el);
                }
            }
        });

        View.Panel = Marionette.ItemView.extend({
            template: PanelTpl,
            initialize: function(options) {
            },
            events: {
                'submit #filter-form': 'filterItems', //do next: for this, I want to search remotely
                'keyup #filter-form input': 'filterItems' //for this, I want to filter current collection on local
            },
            triggers: {
                'click .js-new': 'item:new',
                'click .js-save': 'item:save',
                'click .js-mass-delete': 'item:mass:delete'
            },
            config: {
                searchTimeout: {},
                searchDelay: 300
            },
            filterItems: function (e) {
                //only trigger the filter when user stop typing for a certain of time
                e.preventDefault();
                var self = this;
                clearTimeout(this.config.searchTimeout);
                this.config.searchTimeout = setTimeout(function() {
                    var criterion = this.$(".js-filter-criterion").val();
                    self.trigger("item:filter", criterion);
                    console.log("panel:item:filter is triggered");
                }, this.config.searchDelay);
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
