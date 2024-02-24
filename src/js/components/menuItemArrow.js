export function menuItemArrow() {
    let items = document.querySelectorAll(".nav-item");
    let items_lv2 = document.querySelectorAll(".nav-item-lv-2");

    items.forEach(item => {
        let elements = [];
        elements = [...item.children];
        elements.forEach(el => {
            let firstEl = el.className.split(" ")[0];
            if (firstEl == "nav-2lv") {
                let parent = el.parentElement;
                parent.classList.add("_arrow-js")
            }
        })
    })

    items_lv2.forEach(item => {
        let elements = [];
        elements = [...item.children];
        elements.forEach(el => {
            let firstEl = el.className.split(" ")[0];
            if (firstEl == "nav-3lv") {
                let parent = el.parentElement;
                parent.classList.add("_arrow-90deg-js")

                //дополнительно убираю радиус
                let parentBlock = parent.parentElement;
                parentBlock.style.cssText = `border-radius: 10px 0px 0px 10px;`;
            }
        })
    })
}
menuItemArrow()