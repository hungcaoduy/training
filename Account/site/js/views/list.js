define(['collections/items', 'views/item'],
    function(Items, ItemView){
    ListView = Backbone.View.extend({
        el: '#items',
        initialize: function() {
            this.collection = new Items();
            this.collection.fetch({reset: true});
            this.render();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.listenTo(this.collection, 'reset', this.render);
        },
        render: function() {
            this.collection.each(function(item) {
                this.renderItem(item);
            }, this);
        },
        renderItem: function(item) {
            var itemView = new ItemView({model: item});
            this.$el.append(itemView.render().el);
        },
        events: {
            'click #add': 'addItem'
        },
        addItem: function(e) {
            e.preventDefault();
            var formData = {};
            $('#addItem div').children('input').each(function(i, el) {
                if($(el).val() != '') {
                    if (el.id === 'keywords') {
                        formData[el.id] = [];
                        _.each($(el).val().split(' '), function(keyword) {
                            formData[el.id].push({'keyword': keyword});
                        });
                    } else if (el.id === 'effectiveDate') {
                        formData[el.id] = $('#effectiveDate').datepicker('getDate').getTime();
                    } else {
                        formData[el.id] = $(el).val();
                    }
                    //update current date
                    //formData['createdDate'] =
                }
            });
            this.collection.create(formData);
            //console.log(this.collection);
        }
    });
    return ListView;
});
