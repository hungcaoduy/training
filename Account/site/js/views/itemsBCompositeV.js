define(['models/item', 'collections/items', 'views/item', 'views/addEditItem'],
    function(Item, Items, ItemView, AddItemView){
    ListView = Backbone.View.extend({
        el: '#itemsView',
        initialize: function(options) {
            this.collection = options.collection;
            this.addEditItemView = options.addEditItemView;
            this.vent = options.vent;
            this.collection.fetch({reset: true});
            this.render();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function() {
            //this.addEditItemView.render();
            this.collection.each(function(item) {
                this.renderItem(item);
            }, this);
        },
        renderItem: function(item) {
            var itemView = new ItemView({model: item, vent: this.vent});
            this.$el.append(itemView.render().$el);
            //this.$('#itemsView').append(itemView.render().el);
        },
        events: {
            'click #add': 'addItem',
            'click #save': 'saveItem'
        },
        addItem: function() {
            this.addEditItemView.render();
        }
    });
    return ListView;
});
