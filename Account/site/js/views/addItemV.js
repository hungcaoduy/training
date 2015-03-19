define(['marionette', 'tpl!templates/addItem.html', 'models/item'], function(Marionette, itemTemplate, Item) {
    var AddItemView = Marionette.ItemView.extend({
        template: itemTemplate,
        initialize: function(options) {
            this.vent = options.vent;
            // _.bindAll(this, "save:click");
            // this.vent.bind("save:click", this.saveItem);
        },
        saveItem: function(e) {
            e.preventDefault();
            //console.log("the model to be save: ",this.model);
            var data = Backbone.Syphon.serialize(this);
            console.log("saving data ",data);
            if (!this.model) {
                this.model = new Item(data);
            } else {
                this.model.set(data);
            }

            this.model.save();
            console.log(this.model,"saved");
        }
    });
    return AddItemView;
});
