define(['backbone', 'text!templates/item.html'], function(Backbone, itemTemplate) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        //className: 'itemContainer',
        template: _.template(itemTemplate),
        initialize: function(options) {
            this.vent = options.vent;
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events: {
            'click .delete': 'deleteItem',
            'click .edit': 'editItem'
        },
        deleteItem: function(e) {
            console.log("I will raise the delete event");
            //this.model.destroy();
            //this.remove();
        },
        editItem: function(e) {
            this.vent.trigger("editItem", this.model);
            console.log("editItem event raised!");
        }
    });
    return ItemView;
});
