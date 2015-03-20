define(['marionette', 'tpl!templates/addItem.html', 'models/item'], function(Marionette, itemTemplate, Item) {
    var AddItemView = Marionette.ItemView.extend({
        template: itemTemplate,
        initialize: function(options) {
            this.vent = options.vent;
            // _.bindAll(this, "save:click");
            // this.vent.bind("save:click", this.saveItem);
        },
        saveItem: function(collection) {
            //console.log("the model to be save: ",this.model);
            var data = Backbone.Syphon.serialize(this);
            console.log("saving data ",data);
            if (!this.model) {
                console.log("creating new model");
                this.model = collection.add(data);
            } else {
                console.log("saving existing model");
                this.model.set(data);
            }
                this.model.save();

            
            console.log(this.model,"saved");
        },
        onSaveNewItem: function(collection) {
            console.log("addView getting the save command, about to save now");
            this.saveItem(collection);
        }
    });
    return AddItemView;
});
