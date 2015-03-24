define(['marionette', 'tpl!itemManager/templates/itemsPanel.html'], function(Marionette, panelTemplate) {
    var ItemsPanelView = Marionette.ItemView.extend({
        template: panelTemplate,
        initialize: function(options) {
        },
        events: {
            'click .js-save': "saveItem",
            'click .js-mass-delete': "massDelete"
        },
        saveItem: function() {
            console.log("panel save click!");
            this.triggerMethod("panel:save:click");
        },
        massDelete: function() {
            this.triggerMethod("panel:mass:delete");
        }
    });
    return ItemsPanelView;
});
