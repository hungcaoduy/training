define(['marionette',
    'tpl!items/templates/itemsLayout.html',
    'items/collections/items',
    'items/views/itemsCompositeV',
    'items/views/addItemV',
    'items/views/itemsPanel',
    'items/views/editItemV',
    'apps/config/marionette/regions/dialog'],
function(Marionette, layoutTemplate, Items, ItemsView, AddItemView, ItemsPanel, EditItemView, DialogRegion){
    ItemsLayout = Marionette.LayoutView.extend({
        template: layoutTemplate,
        regions: {
            formRegion: "#form-region",
            panelRegion: "#panel-region",
            listRegion: "#list-region",
            dialogRegion: DialogRegion.extend({el:'#dialog-region'})
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
            this.listenTo(itemsView, "show:item:modal", this.showItemModal);
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
        },
        onChildviewShowItemModal: function() {
            console.log("Why does not this fired");
        },
        showItemModal: function(childView, args) {
            console.log("showing childView", childView);
            var editView = new EditItemView({model: childView.model});
            this.listenTo(editView, 'item:update', this.updateList);
            //var modal = new DialogRegion();
            //modal.show(editView);
            this.showChildView('dialogRegion', editView);
        },
        updateList: function() {
            console.log("please update list");
            Marionette.triggerMethodOn(this.listRegion.currentView, 'childview:updateItem');
        }
    });
    return ItemsLayout;
});
