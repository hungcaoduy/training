define(['models/item', 'collections/items', 'views/itemView', 'views/editItemV'],
                                function(Item, Items, ItemView, AddItemView){
    ListView = Marionette.CollectionView.extend({
        childView: ItemView
    });
    return ListView;
});
