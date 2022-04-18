import  tabs  from './mudules/tabs';
        import calc from './mudules/calc';
        import cards from './mudules/cards';
        import forms from './mudules/forms';
        import modals from './mudules/modals';
        import slider from './mudules/slider';
        import timer from './mudules/timer';
        import {openModal} from './mudules/modals';



window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    cards();
    forms('form', modalTimerId);
    modals('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'    
    });
    timer('.timer', '2023-06-11');

});
