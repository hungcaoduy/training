define(['backbone', 'models/item'],function(Backbone, Item){
    Items = Backbone.Collection.extend({
        model: Item,
        url: '/api/items'
    });
    return Items;
});

