define(['marionette', 'tpl!itemManager/templates/editItem.html'], function(Marionette, itemTemplate) {
    var EditItemView = Marionette.ItemView.extend({
        template: itemTemplate,
        initialize: function(options) {
            this.vent = options.vent;
            // _.bindAll(this, "showItem");
            // this.vent.bind("showItem", this.showItem);
        },
        events: {
            'click .js-save': "saveItem",
            'click .js-save-close': "saveItemThenClose",
            'click .js-cancel': "cancelChange"
        },
        saveItemThenClose: function(e) {
            this.saveItem();
            this.trigger("dialog:close");
        },
        saveItem: function() {
            var data = Backbone.Syphon.serialize(this);
            console.log("data ",data);
            this.model.set(data);
            this.model.save();
            console.log(this.model,"saved");
            this.trigger("item:update");
        },
        cancelChange: function(e) {
            this.destroy();
            this.trigger("dialog:close");
        }
    });
    return EditItemView;
});
