/**
 * Created by polzo on 15.01.2017.
 */

'use strict';

window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        loop: true
    });

    var buttonBuyNow = document.getElementsByClassName('buy_now');
    for (var i = 0; i < buttonBuyNow.length; i++) {
        buttonBuyNow[i].addEventListener("mouseenter", function () {
            var type = this.parentElement.parentElement.getElementsByClassName('services__item--type');
            for(var j = 0; j < type.length; j++) {
                type[j].style.backgroundColor = '#49cbcd';
            }
        });
        buttonBuyNow[i].addEventListener("mouseleave", function () {
            var type = this.parentElement.parentElement.getElementsByClassName('services__item--type');
            for(var j = 0; j < type.length; j++) {
                type[j].style.backgroundColor = '#485460';
            }
        });
    }
};


