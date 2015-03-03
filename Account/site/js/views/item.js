define(['backbone', 'text!templates/item.html'], function(Backbone, itemTemplate) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        className: 'itemContainer',
        template: _.template(itemTemplate),
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
        }
    });
    return ItemView;
});
