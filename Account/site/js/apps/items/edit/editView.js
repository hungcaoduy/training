define(['app',
    'tpl!items/edit/templates/editItem.tpl',
    'tpl!items/edit/templates/missingItem.tpl',
    'jquery-ui', 'jquery-dateFormat',
    'backbone.syphon'],
    function(App, EditItemTpl, MissingItemTpl) {
    App.module('ItemsApp.Edit.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({
        	template: MissingItemTpl
        });

        View.Item = Marionette.ItemView.extend({
            template: EditItemTpl,
            events: {
                'click .js-save': 'itemSave',
                'click .js-save-close': 'itemSaveClose',
            },
            triggers: {
                'click .js-cancel': 'dialog:close'
            },
            itemSave: function(e) {
                e.preventDefault();
                this.saveData();
            },
            itemSaveClose: function(e) {
                e.preventDefault();
                this.saveData();
                this.trigger('dialog:close');
            },
            saveData: function() {
                var data = Backbone.Syphon.serialize(this);
                console.log('the serialized data is ', data);
                this.trigger('item:save', {model: this.model, data: data});
            }
        });
    });

    return App.ItemsApp.Edit.View;
});
