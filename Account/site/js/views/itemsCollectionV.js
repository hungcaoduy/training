define(['models/item', 'collections/items', 'views/itemView', 'views/addItem'],
                                function(Item, Items, ItemView, AddItemView){
    ListView = Marionette.CollectionView.extend({
        childView: ItemView
    });
    return ListView;
});
