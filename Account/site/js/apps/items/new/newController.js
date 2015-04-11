define(['app', 'apps/items/new/newView'], function(App, View) {
    App.module('ItemsApp.New', function(New, App, Backbone, Marionette, $, _) {
        New.Controller = {
            newItem: function() {
                require(['entities/item'], function(Item) {
                        var fetchingItem = App.request("item:entity:new");
                        $.when(fetchingItem).done(function(item){
                        var itemView;
                        if(item !== undefined){
                            itemView = new View.Item({
                                model: item
                            });
                        }
                        App.dialogRegion.show(itemView);
                    });
                });
            }
        };
    });
    return App.ItemsApp.New.Controller;
});
