define(['app',
    'tpl!common/templates/loading.tpl',
    'tpl!common/templates/form.tpl',
    'spin.jquery', 'backbone.syphon'], function(
        App,
        LoadingTpl,
        FormTpl
        ){
    App.module('Common.View', function(View, App, Backbone, Marionette, $, _){
        View.Loading = Marionette.ItemView.extend({
            template: LoadingTpl,

            title: 'Loading Data',
            message: 'Please wait, data is loading.',

            serializeData: function(){
                return {
                    title: Marionette.getOption(this, 'title'),
                    message: Marionette.getOption(this, 'message')
                };
            },

            onShow: function(){
                var opts = {
                    lines: 13, // The number of lines to draw
                    length: 20, // The length of each line
                    width: 10, // The line thickness
                    radius: 30, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    color: '#000', // #rgb or #rrggbb
                    speed: 1, // Rounds per second
                    trail: 60, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    top: '30px', // Top position relative to parent in px
                    left: 'auto' // Left position relative to parent in px
                };
                $('#spinner').spin(opts);
            }
        });

        View.Form = Marionette.ItemView.extend({
            template: FormTpl,

            events: {
                'click .js-save': 'itemSave',
                'click .js-save-close': 'itemSaveClose',
            },
            triggers: {
                'click .js-cancel': 'dialog:close'
            },
            itemSave: function(e) {
                e.preventDefault();
                this.saveData();
            },
            itemSaveClose: function(e) {
                e.preventDefault();
                this.saveData();
                this.trigger('dialog:close');
            },
            saveData: function() {
                var data = Backbone.Syphon.serialize(this);
                console.log('the serialized data is ', data);
                this.trigger('item:save', {model: this.model, data: data});
            }

        });
    });


  return App.Common.View;
});
