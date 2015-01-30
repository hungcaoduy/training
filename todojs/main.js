// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        helper: '../app/helper'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/todo'],
    function (todo) {
        //console.log(data.color);
        //console.log(data.ANCESTRY_FILE);
    });
