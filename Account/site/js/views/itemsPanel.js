define(['marionette', 'tpl!templates/itemsPanel.html'], function(Marionette, panelTemplate) {
    var ItemsPanelView = Marionette.ItemView.extend({
        template: panelTemplate,
        initialize: function(options) {
        },
        events: {
            'click .js-save': "saveItem"
        },
        saveItem: function() {
            this.triggerMethod("save:click");
        }
    });
    return ItemsPanelView;
});
