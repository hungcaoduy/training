define(['marionette',
    'tpl!templates/itemsLayout.html',
    'collections/items',
    'views/itemsCompositeV',
    'views/addItemV',
    'views/itemsPanel'],
function(Marionette, layoutTemplate, Items, ItemsView, AddItemView, ItemsPanel){
    ItemsLayout = Marionette.LayoutView.extend({
        template: layoutTemplate,
        regions: {
            formRegion: "#form-region",
            panelRegion: "#panel-region",
            listRegion: "#list-region"
        },
        onBeforeShow: function() {
            var items = new Items();
            // var itemData = {
            //     title: 'default title',
            //     description: 'Unknown',
            //     url: 'Unknown',
            //     image: 'img/placeholder.jpg',
            //     keywords: 'None',
            //     effectiveDate: new Date().getTime(),
            //     createdDate: 'Unknown',
            //     createdBy: 'Unknown',
            //     updatedDate: 'Unknown',
            //     updatedBy: 'Unknown'
            // };
            var vent = _.extend({}, Backbone.Events);
            var addItemView = new AddItemView({vent: vent}); //({model: items.create(itemData), vent: vent});
            var itemsView = new ItemsView({collection: items});

            this.showChildView('formRegion', addItemView);
            this.showChildView('panelRegion', new ItemsPanel());
            this.showChildView('listRegion', itemsView);
            items.fetch();
        },
        onChildviewPanelSaveClick: function() {
            //this.vent.trigger("save:click");
            console.log("layout passing the save command");
            var v = this.formRegion.currentView;
            Marionette.triggerMethodOn(v, "save:new:item", this.listRegion.currentView.collection);
        },
        onChildviewPanelMassDelete: function() {
            //var items = this.listRegion.currentView.collection.models;
            var items = this.listRegion.currentView.collection.toJSON();
            console.log("colletion is being cleaned, records=", items.length);
            //items.reset();
            _.each(items, function(item, i, items) {
                console.log("destroy", i, " ",item);
                // console.log(i);
                // console.log(items[i]);
                if (!item) item.destroy();
            }, this);
        }
    });
    return ItemsLayout;
});
