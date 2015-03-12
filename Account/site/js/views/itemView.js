define(['app', 'marionette', 'tpl!templates/itemRow.html', 'views/addEditItem'],
                    function(app, Marionette, itemTemplate, ItemShow) {
    var ItemView = Marionette.ItemView.extend({
        tagName: 'tr',
        //className: 'itemContainer',
        template: itemTemplate,
        events: {
            'click .delete': 'deleteItem',
            'click': 'highlightName',
            'click .js-show': 'showItem'
        },
        deleteItem: function() {
            this.model.destroy();
        },
        highlightName: function(e) {
            console.log($(e.target).text());
            this.$el.toggleClass("warning");
        },
        showItem: function(e) {
            e.preventDefault();//use to stop default behaviour, e.g link will not work
            e.stopPropagation(); //stop this element's parent to get this event
            //app.list.show(this)
            itShow = new ItemShow({model: this.model});
            itShow.render();
        },
        remove: function() {
            var self = this;
            this.$el.fadeOut(1000, function() {
                //Marionette.ItemView.prototype.remove.call(self);
            });
        }
    });
    return ItemView;
});
