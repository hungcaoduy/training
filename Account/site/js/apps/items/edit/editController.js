define(['app', 'items/edit/editView'], function(App, View) {
    App.module('ItemsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = {
            editItem: function(itemId) {
                require(['entities/item'], function(Item) {
                        // console.log('editItem: function(itemId)', itemId);
                        var fetchingItem = App.request("item:entity", itemId);
                        // $.when(fetchingItem)
                        fetchingItem.done(function(item){
                        var itemView;
                        // console.log('item to edit: ', itemId);
                        if(item !== undefined){
                            itemView = new View.Item({
                                model: item
                            });
                        }
                        else {
                            itemView = new View.MissingItem();
                        }

                        App.dialogRegion.show(itemView);
                    });
                });
            },
            editItemById: function(itemId) {
                require(['entities/item'], function(Item) {
                    // console.log('editItem: function(itemId)', itemId);
                    var fetchingItem = App.request("item:entityById", itemId);
                    //fetchingItem
                    $.when(fetchingItem)
                    .done(function(item){
                        var itemView;
                        console.log('item is fetched: ', itemId);
                        if(item !== undefined){
                            itemView = new View.Item({
                                model: item
                            });

                            // itemView.on("item:edit", function(item){
                            //     App.trigger("item:edit", item.get("itemId"));
                            // });
                        }
                        else {
                            itemView = new View.MissingItem();
                        }
                        App.dialogRegion.show(itemView);
                    });
                });
            }
        };
    });
    return App.ItemsApp.Edit.Controller;
});
