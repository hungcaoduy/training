define(['marionette', 'tpl!templates/addItem.html'], function(Marionette, itemTemplate) {
    var AddItemView = Marionette.ItemView.extend({
        template: itemTemplate,
        initialize: function(options) {
            this.vent = options.vent;
            _.bindAll(this, "showItem");
            this.vent.bind("showItem", this.showItem);
        },
        /*modelEvents: {
            "change": "modelChanged"
        },*/
        showItem: function(item) {
            this.model = item;
            //this.render();
            console.log("showed ", item);
        }
    });
    return AddItemView;
});
