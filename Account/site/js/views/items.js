define(['models/item', 'collections/items', 'views/item', 'views/addItem'],
    function(Item, Items, ItemView, AddItemView){
    ListView = Backbone.View.extend({
        el: '#itemsView',
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
            //this.$('#itemsView').append(itemView.render().el);
        },
        events: {
            'click #add': 'addItem',
            'click #addFull': 'addFull',
            'click #toggleItemsView': 'toggleItemsView'
        },
        addItem: function(e) {
            e.preventDefault();//use to stop default behaviour, e.g link will not work
            e.stopPropagation(); //stop this element's parent to get this event
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
        },
        addFull: function(e) {
            event.preventDefault();
            event.stopPropagation();
            var modal = new AddItemView({model: new Item()});
            modal.render().showModal({
                x: e.pageX,
                y: e.pageY
            });
        },
        toggleItemsView: function(e) {
            event.preventDefault();
            event.stopPropagation();
            $('#itemsView').toggle();
        }
    });
    return ListView;
});
