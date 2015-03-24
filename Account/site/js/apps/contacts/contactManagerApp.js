define(['marionette'], function(Marionette) {
    'use strict';

    var ContactManager = new Marionette.Application();

    ContactManager.on("initialize:after", function() {
        var contacts = ContactManager.request("contact:entities");

    });

    return ContactManager;
})
