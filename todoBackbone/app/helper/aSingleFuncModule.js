define([], function() {
    //define module as a function
    return function average ( array ) {
        function plus(a, b) { return a + b ; }
        return array.reduce(plus) / array.length ;
    };
});
