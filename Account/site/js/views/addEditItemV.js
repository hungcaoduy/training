define(['marionette', 'tpl!templates/addEditItem.html'], function(Marionette, itemTemplate) {
    var AddItemView = Marionette.ItemView.extend({
        template: itemTemplate,
        initialize: function(options) {
            this.vent = options.vent;
            // _.bindAll(this, "showItem");
            // this.vent.bind("showItem", this.showItem);
        },
        events: {
            'click .js-save': "saveItem"
        },
        /*modelEvents: {
            "change": "modelChanged"
        },*/
        showItem: function(item) {
            this.model = item;
            //this.render();
            console.log("showed ", item);
        },
        saveItem: function(e) {
            e.preventDefault();
            console.log("the model to be save: ",this.model);
            var data = Backbone.Syphon.serialize(this);
            console.log("data ",data);
            this.model.set(data);
            this.model.save();
            console.log(this.model,"saved");
        }
    });
    return AddItemView;
});
