define(['app', 'items/edit/editView'], function(App, View) {
    App.module('ItemsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = {
            editItem: function(itemId) {
                require(['entities/item'], function(Item) {
                        // console.log('editItem: function(itemId)', itemId);
                        var fetchingItem = App.request("item:entity", itemId);
                        $.when(fetchingItem).done(function(item){
                        var itemView;
                        // console.log('item to edit: ', itemId);
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
