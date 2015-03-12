define(['models/item', 'collections/items', 'views/itemView', 'views/addItem', 'tpl!templates/itemsTable.html'],
                                function(Item, Items, ItemView, AddItemView, tableTemplate){
    ListView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        childView: ItemView,
        template: tableTemplate,
        childViewContainer: "tbody"
    });
    return ListView;
});
//read more: https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.compositeview.md#compositeviews-appendhtml
