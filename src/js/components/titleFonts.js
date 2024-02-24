export function titleFonts() {
    let titles = document.querySelectorAll("._fonts-js");

    titles.forEach(el => {
        let title = el.innerText.split(" ");
        let firstWord = title[0];
        let lastWord = title[title.length - 1];
        let letters = '';
        let firstLetter = firstWord[0];
        let lastLetter = lastWord[lastWord.length - 1];
        let finishTitle = '';

        //вырезать буквы
        letters = el.innerText.split("");
        letters.pop();
        letters.shift();
        finishTitle = letters.join("")

        //возвращаем заголовок без первой и последней буквы
        el.innerText = finishTitle;

        //добавляем первую и последнюю буквы
        el.insertAdjacentHTML("afterbegin", `
<span class = "ceremonious">${firstLetter}</span>
        `);

        el.insertAdjacentHTML("beforeend", `
<span class = "ceremonious">
        ${lastLetter}
</span>
        `);
        console.log(finishTitle)
    })
}
titleFonts()