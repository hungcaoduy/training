define(['backbone'], function(Backbone) {
    Item = Backbone.Model.extend({
        defaults: {
            title: 'No title',
            description: 'Unknown',
            url: 'Unknown',
            image: 'img/placeholder.jpg',
            keywords: 'None',
            effectiveDate: 'Unknown',
            createdDate: 'Unknown',
            createdBy: 'Unknown',
            updatedDate: 'Unknown',
            updatedBy: 'Unknown'
        },
        // parse: function(response) {
        //     response.id = response._id;
        //     return response;
        // },
        idAttribute: '_id'
    });
    return Item;
});

