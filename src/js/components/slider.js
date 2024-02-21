// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";

export const swiper = new Swiper('.swiper', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        //можно кликать по булетам
        clickable: true
    },
    // Скрол
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    /*Бесконечная прокрутка*/
    loop: true,
    /*Эффект трансформации при перелисывании*/
    effect: 'coverflow',
    coverflowEffect: {
        /*Поворачивает карточки*/
        rotate: 0,
        stretch: 0,
        depth: 60,
        modifier: 3,
        slideShadows: false
    },
    /*Отступ у карточек*/
    spaceBetween: 15,
    /*Показывать по n карточек*/
    slidesPerView: 1,
    /*Поставить карточку в центр*/
    centeredSlides: true,
    /*Брек-поинты*/
    breakpoints: {
        780: {
            slidesPerView: 2,
        }
    },
    // При достижении конца, перепрыгнуть в начало
    rewind: true,
    // Автовоспроизведение
    autoplay: {
        delay: 1000,
        //остановка при наведении
        pauseOnMouseEnter: true
    },
    //скорость перелистывания
    speed: 1000,
});