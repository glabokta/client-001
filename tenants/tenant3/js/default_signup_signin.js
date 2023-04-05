$(document).ready(function () {
    $("#api #localAccountForm").wrap("<div class='col-lg-6 col-md-6 col-xs-12 local-container'></div>");
    var localContainer = $('.local-container');
    var socialElement = $("#api .social");
    socialElement.addClass('col-lg-6 col-md-6 col-xs-12');
    socialElement.before(localContainer);

    var accountTitle = $('#account_title_signin').detach().removeClass('no_display');

    socialElement.find('div.intro').after(accountTitle);

    var idpContainer = $(socialElement).find('div.options');
    $(idpContainer).find('button.accountButton').parent().addClass('col-lg-6 col-md-6 col-sm-6 col-xs-6 social-button');
});