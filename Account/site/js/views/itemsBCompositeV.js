define(['models/item', 'collections/items', 'views/item', 'views/addEditItem'],
    function(Item, Items, ItemView, AddItemView){
    ListView = Backbone.View.extend({
        el: '#list',
        initialize: function(options) {
            this.collection = options.collection;
            this.vent = options.vent;
            this.collection.fetch({reset: true});
            this.render();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'reset', this.render);
            _.bindAll(this, saveItem);
            this.vent.bind('saveItem', this.saveItem);
        },
        render: function() {
            this.collection.each(function(item) {
                this.renderItem(item);
            }, this);
        },
        renderItem: function(item) {
            var itemView = new ItemView({model: item, vent: this.vent});
            this.$el.append(itemView.render().$el);
        },
        events: {
        },
        saveItem: function(item) {
            this.collection.create(item);
            console.log('item ', item.title, 'saved!');
        }
    });
    return ListView;
});
