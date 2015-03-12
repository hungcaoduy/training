define(['backbone', 'text!templates/addEdititem.html'], function(Backbone, itemTemplate) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        template: _.template(itemTemplate),
        initialize: function(options) {
            //_.bindAll(this, "editItem");
            //options.vent.bind("editItem", this.editItem)
        },
        render: function() {
            //console.log(this.template);
            this.$el.html(this.template(this.model.toJSON()));
            //console.log(this.$el.html());

            return this;
        },
        events: {
            'click .delete': 'deleteItem'
        },
        deleteItem: function() {
            this.model.destroy();
            this.remove();
        },
        editItem: function(item) {
            this.model = item;
            this.render();
        }
    });
    return ItemView;
});
