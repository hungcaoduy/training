define(['marionette', 'tpl!templates/addItem.html'], function(Marionette, itemTemplate) {
    var AddItemView = Marionette.ItemView.extend({
        template: itemTemplate
    });
    return AddItemView;
});
