define(['models/item', 'collections/items', 'views/itemView', 'views/addEditItemV', 'tpl!templates/itemsTable.html'],
                                function(Item, Items, ItemView, AddItemView, tableTemplate){
    ListView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        childView: ItemView,
        childViewOptions: {
            vent: this.vent //why does not this work
        },
        buildChildView: function(child, ChildViewClass, childViewOptions){
            // build the final list of options for the childView class
            var options = _.extend({model: child}, {vent: this.vent});
            // create the child view instance
            console.log(options);
            //console.log(this.vent);
            var view = new ChildViewClass(options);
            // return it
            return view;
        },
        template: tableTemplate,
        childViewContainer: "tbody",
        initialize: function(options) {
            this.vent = options.vent;
            _.bindAll(this, 'showItem');
            this.vent.bind('showItem', this.showItem);

        },
        showItem: function(e) {
            this.vent.trigger("showItem", this.model);
            console.log("collection view catch the showItem");
        }

    });
    return ListView;
});
//read more: https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.compositeview.md#compositeviews-appendhtml
