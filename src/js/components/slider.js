// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";

export const msmSlider = new Swiper('.msm-slider', {
    // Стрелки
    navigation: {
        nextEl: '.msm-slider-btn-next',
        prevEl: '.msm-slider-btn-prev',
    },


    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,

    /*Брек-поинты*/
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    // При достижении конца, перепрыгнуть в начало
    rewind: true,

});