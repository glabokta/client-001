
const animationElement = document.querySelector('.animation-element')
animationElement.addEventListener('click', () => {
    document.body.classList.toggle('animate')
})

$(document).ready(function () {
    $("#PasswordResetUsingEmailAddressExchange").removeClass("accountButton");
    $("#forgotPassword").replaceWith($("#PasswordResetUsingEmailAddressExchange").detach())
    $("#PasswordResetUsingEmailAddressExchange").attr("style", "background: none!important; color:blue; border:none;  bottom: 0; left:0; clear:right; float: center; text-align: right; cursor: pointer;text-decoration: underline;font-size: 17px");
});

document.getElementById('vid').play();