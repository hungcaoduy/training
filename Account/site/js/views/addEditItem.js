define(['backbone', 'text!templates/addEdititem.html'], function(Backbone, itemTemplate) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        template: _.template(itemTemplate),
        initialize: function(options) {
            this.vent = options.vent;
            _.bindAll(this, "editItem");
            this.vent.bind("editItem", this.editItem);
        },
        render: function() {
            //console.log(this.template);
            this.$el.html(this.template(this.model.toJSON()));
            //console.log(this.$el.html());

            return this;
        },
        events: {
            'click .js-save': 'saveItem'
        },
        saveItem: function() {
            this.vent.trigger("saveItem", this.model);
        }
    });
    return ItemView;
});
