define(['backbone', 'items/models/item'],function(Backbone, Item){
    Items = Backbone.Collection.extend({
        model: Item,
        url: '/api/items',
        comparator: 'title'
    });
    return Items;
});

