export function twoColumns() {
    let items = document.querySelectorAll(".two-col");

    items.forEach(el => {
        let parent = el.parentElement;
        parent.style.cssText = `    flex-direction: row;`;
    })

}
twoColumns()