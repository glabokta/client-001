$(document).ready(function () {

     
        //var emailtxt = document.getElementById("email");
        //var email_labeltxt = document.getElementById("email_label");
        //alert(email_labeltxt.value);

 


    $("#signInName").bind('keydown',
        function (e) {
            if (e.which == 9) {
                $("#password").focus();
                e.preventDefault()
            }
        }
    );
    $("#password").bind('keydown',
        function (e) {
            if (e.which == 9) {
                $("#PasswordResetUsingEmailAddressExchange").focus();
                e.preventDefault()
            }
        }
    );
    $("#signInName").keypress(function (event) {
        if (event.keyCode === 13) {
            $("#password").focus();
            return false;
        }

    });
    $("#password").keypress(function (event) {
        if (event.keyCode === 13) {
            $("#next").focus();
            return false;
        }

    });


});

