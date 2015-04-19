define(['backbone', 'text!templates/login.html'], function(Backbone, loginTemplate) {
    var LoginView = Backbone.View.extend({
        tagName: 'div',
        template: _.template(loginTemplate),
        initialize: function(){
            this.$el.html(this.template());
            $('body').append(this.$el.html());
            //this.render();
        },

        render: function() {
            this.fadeIn();
            return this;
        },
        events: {
            'click #mask': 'fadeOut',
            'click .close': 'fadeOut'
        },
        fadeIn: function() {
            //Fade in the Popup
            var loginBox = '#login-box';
            //Fade in the Popup
            $(loginBox).fadeIn(300);

            //Set the center alignment padding + border see css style
            var popMargTop = ($(loginBox).height() + 24) / 2;
            var popMargLeft = ($(loginBox).width() + 24) / 2;

            $(loginBox).css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);

            return false;
        },
        fadeOut: function(e) {
            //e.preventDefault();
            //e.stopPropagation();
            console.log('I am get here');
            this.$el.fadeOut(300 , function() {
                $('#mask').remove();
            });
        }
    });
    return LoginView;
});
