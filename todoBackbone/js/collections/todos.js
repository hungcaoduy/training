var app = app || {};

var TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Backbone.LocalStorage('todos-backbone'),
    //filter down the list of all todo items that are finised
    completed: function() {
        return this.filter(function(todo) {
            return todo.get('completed');
        });
    },
    //filter down the list to only todo ites that are still not finished
    remaining: function() {
        return this.without.apply(this, this.completed());
    },
    //Generate the next order number for new items
    nextOrder: function() {
        if (!this.length) {
            return 1;
        }
        return this.last().get('order') + 1;
    },
    comparator: function(todo) {
        return todo.get('order');
    }
});

app.Todos = new TodoList();
