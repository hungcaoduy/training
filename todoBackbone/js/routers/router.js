var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },
    setFilter: function(param) {
        //set the current filter to be used
        app.TodoFilter = param;
        //trigger a collection filter event, causing hiding/unhiding of todo view items
        window.app.Todos.trigger('filter');
    }
});

app.TodoRouter = new Workspace();
Backbone.history.start();
