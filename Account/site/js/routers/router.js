/*global define */
/*define([
    'marionette'
], function (Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            '*filter': 'setFilter'
        }
    });
});
*/
define(['backbone'], function(Backbone) {
    var Workspace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter',
            'hello': 'sayHello'
        },
        setFilter: function(param) {
            //set the current filter to be used
            //app.TodoFilter = param;
            //trigger a collection filter event, causing hiding/unhiding of todo view items
            //window.app.Todos.trigger('filter');
        },
        sayHello: function() {
            console.log('Saying hello');
        }
    });
    return Workspace;
});

