define(['backbone'], function(Backbone) {
    Item = Backbone.Model.extend({
        defaults: {
            image: 'img/placeholder.jpg',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        },
        // parse: function(response) {
        //     response.id = response._id;
        //     return response;
        // },
        idAttribute: '_id'
    });
    return Item;
});

