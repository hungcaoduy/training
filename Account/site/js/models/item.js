define(['backbone'], function(Backbone) {
    Item = Backbone.Model.extend({
        defaults: {
            title: 'default title',
            description: 'Unknown',
            url: 'Unknown',
            image: 'img/placeholder.jpg',
            keywords: 'None',
            effectiveDate: new Date(2015,02,01).getTime(),
            createdDate: 'Unknown',
            createdBy: 'Unknown',
            updatedDate: 'Unknown',
            updatedBy: 'Unknown'
        },
        initialize: function(options) {
            // var defaultDate = new Date(2015,03,10);
            // var date = (defaultDate.getMonth() + 1) + '/' + defaultDate.getDate() + '/' + defaultDate.getFullYear();
            //this.set('birthday', date);
        },
        // parse: function(response) {
        //     response.id = response._id;
        //     return response;
        // },
        idAttribute: '_id'
    });
    return Item;
});

