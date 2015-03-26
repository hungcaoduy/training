define([
    'app',
    'items/list/listView'
    ], function(App, View) {

    App.module("ItemsApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            listItems: function(criteria) {
                require(['entities/item'], function() {
                    console.log("ItemsApp.List ListItem");
                    var fetchingItems = App.reqres.request("item:entities");
                    var layoutView = new View.Layout();
                    var panelView = new View.Panel();

                    panelView.on('panel:new:item', function() {
                        console.log("about to add new item");
                        App.trigger('item:new');
                    });

                    App.mainRegion.show(layoutView);
                    layoutView.showChildView('panelRegion', panelView);

                    $.when(fetchingItems).done(function(items){

                        var itemListView = new View.Items({collection: items});

                        itemListView.on('childview:item:show', function(childView, args) {
                            console.log("Triggering up the item:show to App");
                            App.trigger('item:show', childView.model.id);
                        });

                        itemListView.on('childview:item:edit', function(childView, args) {
                            console.log("Triggering up the item:edit to App");
                            App.trigger('item:edit', childView.model.id);
                        });

                        itemListView.on('childview:item:delete', function(childView, args) {
                            console.log('removing item ', args.model.get('title'));
                            args.model.destroy();
                        });

                        layoutView.showChildView('listRegion', itemListView);
                    });
                });
            },
            newItem: function() {
                console.log('now we actually new');
                require(['apps/items/new/newView'], function(NewItemView) {
                    var newItemView = new NewItemView();
                    App.dialogRegion.show(newItemView);
                });
            }
        };
    });

    return App.ItemsApp.List.Controller;
});
