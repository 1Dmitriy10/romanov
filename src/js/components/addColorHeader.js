// ======================================================Изменение цвета хедера при скроле===================================

export function getColorHeader() {
    const header = document.querySelector("._header-js")
    window.addEventListener('scroll', getColor)
    function getColor() {
        if (window.pageYOffset === 0) {
            header.style.cssText = `background-color: transparent;`
        } else {
            header.style.cssText = `background-color: #09AFF4;`
        }
    }
}
getColorHeader()