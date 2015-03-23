define(['app', 'marionette'],
                    function(app, Marionette) {
    var DialogRegion = Marionette.Region.extend({
        el: '#dialog-region',
        onShow: function(view) {
            this.listenTo(view, "dialog:close", this.closeDialog);
            var self = this;
            this.$el.dialog({
                modal: true,
                title: view.title,
                width: 'auto',
                close: function(e, ui) {
                    self.closeDialog();
                }
            });
        },
        closeDialog: function() {
            this.stopListening();
            this.empty();
            this.$el.dialog('destroy');//does this actually work? such that it remove the region completely?
        }
    });
    return DialogRegion;
});
