
var channels = {};
channels.itemDataChannel = Backbone.Wreqr.radio.channel('item.data');
channels.globalItemChannel = Backbone.Wreqr.radio.channel('global.item');

module.exports = channels;
