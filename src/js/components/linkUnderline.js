export function linkUnderline() {
    let links = document.querySelectorAll("._link-underline-js");

    links.forEach(el => {
        let text = el.innerText;
        el.innerHTML = "";
        el.insertAdjacentHTML("beforeend", `
        <span class = "_underline-js">${text}</span>
        `);
    })
}
linkUnderline()