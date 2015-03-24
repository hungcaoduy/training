define(['marionette', 'tpl!templates/login.html'], function(Marionette, loginTemplate) {
    var LoginView = Marionette.ItemView.extend({
        template: loginTemplate,
        events: {
            'click #showLogin': 'fadeIn'
        },
        fadeIn: function() {
            console.log('I am here');
            //Fade in the Popup
            var loginBox = '#login-box';
            //Fade in the Popup
            $(loginBox).fadeIn(3000);

            //Set the center alignment padding + border see css style
             var popMargTop = ($(loginBox).height() + 24) / 2;
             var popMargLeft = ($(loginBox).width() + 24) / 2;

            $(loginBox).css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            //$('body').append('<div id="mask"></div>');
            //$('#mask').fadeIn(300);

            return false;
        },
    });
    return LoginView;
});
