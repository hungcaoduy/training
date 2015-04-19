define(['app', 'tpl!items/show/templates/showItem.tpl', 'tpl!items/show/templates/missingItem.tpl', 'jquery-ui', 'jquery-dateFormat'], function(App, ShowItemTpl, MissingItemTpl) {
    App.module('ItemsApp.Show.View', function(View, App, Backbone, Marionette, $, _) {
        View.MissingItem = Marionette.ItemView.extend({
        	template: MissingItemTpl
        });

        View.Item = Marionette.ItemView.extend({
            template: ShowItemTpl,
            events: {
                'click .js-edit': 'itemEdit'
            },
            itemEdit: function(e) {
                e.preventDefault();
                //is this acceptable to trigger global event here?
                console.log('model ', this.model);
                App.trigger('item:edit', {model: this.model, id: this.model.id});
            }
        });
    });

    return App.ItemsApp.Show.View;
});
