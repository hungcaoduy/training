define(['backbone', 'text!templates/item.html'], function(Backbone, itemTemplate) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        //className: 'itemContainer',
        template: _.template(itemTemplate),
        initialize: function(options) {
            this.vent = options.vent;
        },
        render: function() {
            //console.log(this.template);
            this.$el.html(this.template(this.model.toJSON()));
            //console.log(this.$el.html());
            $('#list').append(this.$el.html());
            return this;
        },
        events: {
            'click .delete': 'deleteItem'
        },
        deleteItem: function(e) {
            console.log("I will raise the delete event");
            //this.model.destroy();
            //this.remove();
        },
        editItem: function(e) {
            console.log("I will raise the editItem event");
            this.vent.trigger("editItem", this.model);
        }
    });
    return ItemView;
});
