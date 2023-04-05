$(document).ready(function () {
    $("#PasswordResetUsingEmailAddressExchange").removeClass("accountButton");
    $("#forgotPassword").replaceWith($("#PasswordResetUsingEmailAddressExchange").detach())
    $("#PasswordResetUsingEmailAddressExchange").attr("style", "background: none!important; color:#337ab7; border:none; position: absolute; bottom: 0; left:0; clear:right; float: right; text-align: right; cursor: pointer");
});