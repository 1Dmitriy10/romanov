export function titleFonts() {
        let titles = document.querySelectorAll("._fonts-js");

        titles.forEach(el => {
                let title = el.innerText.split(" ");
                let firstWord = title[0];
                let letters = '';
                let firstLetter = firstWord[0];
                let finishTitle = '';

                //вырезать буквы
                letters = el.innerText.split("");
                letters.shift();
                finishTitle = letters.join("")

                //возвращаем заголовок без первой и последней буквы
                el.innerText = finishTitle;

                //добавляем первую и последнюю буквы
                el.insertAdjacentHTML("afterbegin", `
<span class = "ceremonious">${firstLetter}</span>
        `);
        })
}
titleFonts()