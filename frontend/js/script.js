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
            for (var j = 0; j < type.length; j++) {
                type[j].style.backgroundColor = '#49cbcd';
            }
        });
        buttonBuyNow[i].addEventListener("mouseleave", function () {
            var type = this.parentElement.parentElement.getElementsByClassName('services__item--type');
            for (var j = 0; j < type.length; j++) {
                type[j].style.backgroundColor = '#485460';
            }
        });
    }

    var navBarToggle = document.getElementsByClassName('navbar__toggle');
    navBarToggle[0].addEventListener("click", function () {
        var navDisplay = document.getElementsByTagName('nav')[0].style.display;
        console.log(document.getElementsByTagName('nav')[0].style);
        if(navDisplay === ''){
            document.getElementsByTagName('nav')[0].style.display = 'block';
        } else {
            document.getElementsByTagName('nav')[0].style.display = '';
        }
    });


};