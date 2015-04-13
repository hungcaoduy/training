define([
    'app',
    'items/list/listView',
    'entities/common'
    ], function(App, View) {

    App.module("ItemsApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            listItems: function(criteria) {
                require(['entities/item'], function() {
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
                        var filteredItems = new App.Entities.FilteredCollection({
                            collection: items,
                            filterFunction: function(filterCriterion) {
                                var criterion = filterCriterion.toLowerCase();
                                return function (item) {
                                    if (item.get("title").toLowerCase().indexOf(criterion) !== -1 ||
                                        item.get("description").toLowerCase().indexOf(criterion) !== -1) {
                                        return item;
                                    }
                                };
                            }
                        });
                        // var itemListView = new View.Items({collection: filteredItems});
                        var itemListView = new View.Items({collection: items});

                        itemListView.on('childview:item:show', function(childView) {
                            App.trigger('item:show', {model: childView.model, id: childView.model.id});
                        });

                        itemListView.on('childview:item:edit', function(childView) {
                            App.trigger('item:edit', {model: childView.model, id: childView.model.id});
                        });

                        itemListView.on('childview:item:delete', function(childView) {
                            childView.model.destroy();
                        });

                        panelView.on('item:filter', function(criterion) {
                            filteredItems.filter(criterion);
                            console.log('items is filtered');
                        });

                        layoutView.on('childview:item:new', function() {
                            console.log('catch item:new from childview, about to delegate to App');
                            App.trigger('item:new');
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
