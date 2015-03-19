define(['models/item', 'collections/items', 'views/itemView', 'tpl!templates/itemsTable.html'],
                                function(Item, Items, ItemView, tableTemplate){
    ListView = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        childView: ItemView,
        /*childViewOptions: {
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
        },*/
        template: tableTemplate,
        childViewContainer: "tbody",
        initialize: function(options) {
            // this.vent = options.vent;
            // this.on("childview:showItem", this.showItem);
            this.on("childview:updateItem", this.updateItem);

        },
        showItem: function(childView, item) {
            //this.vent.trigger("childview:showItem", childView, item, this.collection);
            //this.trigger("showItem", childView, item, this.collection);
            console.log("collection view catch the showItem");
        },
        updateItem: function() {
            this.render();
        }

    });
    return ListView;
});
//read more: https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.compositeview.md#compositeviews-appendhtml
