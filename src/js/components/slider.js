// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";

//========================
export const msmSlider = new Swiper('.msm-slider', {
    // Стрелки
    navigation: {
        nextEl: '.msm-btn-next',
        prevEl: '.msm-btn-prev',
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

//========================

export const resultSlider = new Swiper('.result-slider', {
    // Стрелки
    navigation: {
        nextEl: '.result-btn-next',
        prevEl: '.result-btn-prev',
    },


    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,

    /*Брек-поинты*/
    breakpoints: {
        1430: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    // При достижении конца, перепрыгнуть в начало
    rewind: true,

});

//============================

export const expertSlider = new Swiper('.expert-slider', {
    // Стрелки
    navigation: {
        nextEl: '.expert-btn-next',
        prevEl: '.expert-btn-prev',
    },


    /*Отступ у карточек*/
    spaceBetween: 20,
    /*Показывать по n карточек*/
    slidesPerView: 1,

    /*Брек-поинты*/
    breakpoints: {
        // 1430: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        // },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        999: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    // При достижении конца, перепрыгнуть в начало
    rewind: true,

});