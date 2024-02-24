export function fixedHeader() {
    let header = document.querySelector(".header__row_white");
    let itemTop = header.getBoundingClientRect().top;

    window.addEventListener("scroll", getFixedHeader);

    function getFixedHeader() {
        if (pageYOffset > itemTop && pageYOffset > 0) {
            header.style.cssText = `position: fixed; top:0`
        } else if (pageYOffset == 0) {
            header.style.cssText = `position: static;`
            console.log(pageYOffset)
        }
        else {
            header.style.cssText = `position: static;`
        }
    }
}
fixedHeader()