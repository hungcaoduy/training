var app = app || {};
app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template($('#bookTemplate').html()),
    render: function() {
        //console.log(this.template);
        this.$el.html(this.template(this.model.toJSON()));
        //console.log(this.$el.html());
        return this;
    },
    events: {
        'click .delete': 'deleteBook'
    },
    deleteBook: function() {
        this.model.destroy();
        this.remove();
    }
});
