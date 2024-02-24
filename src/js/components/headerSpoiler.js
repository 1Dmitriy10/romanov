// ======================================================Спойлер===================================
/*
добавить класс _spoiler-js:
<div class = "_spoiler-js">
<h3>Заголовок спойлера</h3>
<p>Текст спойлера</p>
</div>
*/
export function headerSpoiler() {
    const spoilers = document.querySelectorAll("._header-spoiler-js");
    let titles = [];
    let text = [];
    spoilers.forEach(el => {
        titles.push(el.children[0]);
        text.push(el.children[1]);
    })

    titles.forEach(el => {
        el.classList.add("spoiler-title")
    })

    let height = 0;

    for (let i = 0; i < spoilers.length; i++) {
        titles[i].addEventListener("click", toggleClass);
        height = titles[i].clientHeight;
        spoilers[i].style.cssText = `height: ${height + 11}px;`
    }

    function toggleClass(ev) {
        const title = ev.target;
        const spoiler = ev.target.parentElement;
        const text = ev.target.nextElementSibling;
        text.classList.toggle('active');
        title.classList.toggle('active');
        let lastClass = spoiler.classList.length - 1;
        if (spoiler.classList[lastClass] !== "active") {
            spoiler.classList.add('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler + 0.8;
                if (heightSpoiler >= (title.clientHeight + text.clientHeight)) {
                    clearInterval(count)
                }
            }, 0.1);
        } else if (spoiler.classList[1] === "active") {
            spoiler.classList.remove('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler - 0.8;
                if (heightSpoiler <= title.clientHeight) {
                    clearInterval(count)
                }
            }, 0.1);
        }
    }
}
headerSpoiler()
