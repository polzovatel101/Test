'use strict';

window.onload = function () {
    $('#button').on('click', function(){
        var date = new Date();
        var comment = $("#comment");
        var month = date.getMonth();
        switch (month) {
            case 0 :
                month = "января";
                break;
            case 1 :
                month = "февраля";
                break;
            case 2 :
                month = "марта";
                break;
            case 3 :
                month = "апреля";
                break;
            case 4 :
                month = "мая";
                break;
            case 5 :
                month = "июня";
                break;
            case 6 :
                month = "июля";
                break;
            case 7 :
                month = "августа";
                break;
            case 8 :
                month = "сентября";
                break;
            case 9 :
                month = "октября";
                break;
            case 10 :
                month = "ноября";
                break;
            case 11:
                month = "декабря";
                break;
            default:
                month = "Ошибка";
        }
        $('.message__header').after('<div class="message__item"><h2 class="message__item--name">Вася Пупкин</h2><span class="message__item--data">' + " " + date.getDate() + " " + month + " " + date.getFullYear()  + '</span><p class="message__item--message">' + comment.val() + '</p> </div>');
        comment.val(" ");
    });
};



