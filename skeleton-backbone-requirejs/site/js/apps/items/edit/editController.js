define(['app', 'items/edit/editView'], function(App, View) {
    App.module('ItemsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = {
            editItem: function(itemId) {
                require(['entities/item'], function(Item) {
                        var fetchingItem = App.request("item:entity", itemId);
                        $.when(fetchingItem)
                        .done(function(item){
                        var itemView;
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
                    var fetchingItem = App.request("item:entityById", itemId);
                    $.when(fetchingItem)
                    .done(function(item){
                        var itemView;
                        console.log('item is fetched: ', itemId);
                        if(item !== undefined){
                            itemView = new View.Item({
                                model: item
                            });

                            itemView.on("item:save", function(data){
                                App.trigger("item:save", data);
                            });
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
