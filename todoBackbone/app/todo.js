define(['backbone', 'app/todoView'], function (Backbone, todoView_) {

    console.log('Todo app');

    var Todo = new Backbone.Model({
        defaults: {
            title: '',
            completed: false
        },
        validate: function (attribs) {
            if (attribs.title === undefined) {
                return "remember to set a title for your model";
                //raise invalid?
            }
        },
        initialize: function() {
            console.log('This new model has been initialized.');
            this.on('change', function() {
                console.log('model ',this.title,'model changed.');
            });
            this.on('invalid', function(model, error){
                    console.log(error);
            });
        }
    });

    var TodoView = Backbone.View.extend({
        tagName: 'li',
        todoTpl: _template("An example"),
        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },
        render: function() {
            this.$el.html(this.todoTpl(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
        },
        edit: function() {

        },
        close: function() {

        },
        updateOnEnter: function(e) {

        }
    });
});
