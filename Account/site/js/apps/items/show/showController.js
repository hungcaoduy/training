define(['app', 'items/show/showView'], function(App, View) {
    App.module('ItemsApp.Show', function(Show, App, Backbone, Marionette, $, _) {
        Show.Controller = {
            showItem: function(id) {
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
                    else{
                      itemView = new View.MissingItem();
                    }

                    App.mainRegion.show(itemView);
                  });
                });
            }
        };
    });
    return App.ItemsApp.Show.Controller;
});
