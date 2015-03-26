define(['app', 'items/edit/editView'], function(App, View) {
    App.module('ItemsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = {
            editItem: function(id) {
                require(['entities/item'], function(Item) {
                        var fetchingItem = App.request("item:entity", id);
                        $.when(fetchingItem).done(function(item){
                        var itemView;
                        if(item !== undefined){
                            itemView = new View.Item({
                                model: item
                            });

                            itemView.on("item:edit", function(item){
                                App.trigger("item:edit", item.get("id"));
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
