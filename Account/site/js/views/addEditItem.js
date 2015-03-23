define(['backbone', 'text!templates/editItem.html'], function(Backbone, itemTemplate) {
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
            'click .js-save': 'saveItem',
            'keyup input': 'keyup'
        },
        editItem: function(item) {
            console.log("now render ", "edititem", item);
            this.model = item;
            this.render();
        },
        saveItem: function() {
            console.log(this.model);
            this.vent.trigger("saveItem", this.model);
            console.log('saveItem event raised!');
        },
        keyup: function(e)
        {
            //console.log('keyup fired');
            //console.log("target name=" + e.target.id,"value=" + e.target.value);
            this.model.set(e.target.id, e.target.value, {silent: true});
        }
    });
    return ItemView;
});
