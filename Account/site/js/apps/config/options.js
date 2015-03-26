define([], function() {
    var isOffline = false;
    return {
        isOffline: isOffline,
        itemUrl: function() {
            return isOffline? 'items' : '/api/items';
        }
    };
});
