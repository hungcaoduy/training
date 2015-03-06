define(['backbone','modalview', 'text!templates/addItem.html'], function(Backbone,ModalView, itemTemplate) {
    var AddItemView = ModalView.extend({
        tagName: 'div',
        className: 'addItemFullForm',
        template: _.template(itemTemplate),
        initialize: function(){
            //_.bindAll( this, "render");
            this.$el.html(this.template());
        },

        render: function() {
            console.log(this.template());
            this.$el.html(this.template());
            $('body').append(this.$el.html());
            return this;
        }
    });
    return AddItemView;
});
