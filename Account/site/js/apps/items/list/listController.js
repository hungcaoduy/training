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
                    $.when(fetchingItems).done(function(items){
                        console.log("items.length=", (items || "-").length);
                        var itemList = new View.Items({collection: items});

                        itemList.on('childview:item:show', function(childView, args) {
                            //App.trigger('')
                            console.log("trying to show item, should be trigger up");
                        });

                        App.mainRegion.show(itemList);
                    });
                });
            }
        };
    });

    return App.ItemsApp.List.Controller;
});
