//=======================================================табы====================================================

/*
cтруктура
<div class="_tabs-js">
        <div class="tabs__title-box">
            <span class="tabs__title">первая вкладка</span>
            <span class="tabs__title">вторая вкладка</span>
            <span class="tabs__title">третья вкладка</span>
        </div>
        <div class="tabs__item-box">
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
        </div>
    </div>
*/
export function tabs() {
    let tabs = document.querySelectorAll("._tabs-js");
    let count = 1;
    let countTabs = 1;

    tabs.forEach(el => {
        el.addEventListener("click", (ev) => {
            let titles = el.children[0].children;
            let items = el.children[1].children;
            for (const el of titles) {
                el.dataset.number = `tab_${count} `;
                count++
            }

            for (const el of items) {
                el.dataset.number = `tab_${countTabs} `;
                countTabs++
            }

            let number = ev.target.dataset.number;
            getActiveTab(titles, items, number)
        })
    });


    function getActiveTab(titles, items, number) {
        for (const el of items) {
            let item = el.dataset.number;
            el.classList.remove("active");
            if (number === item) {
                el.classList.add("active")
            }
        }

        for (const el of titles) {
            let item = el.dataset.number;
            el.classList.remove("active");
            if (number === item) {
                el.classList.add("active")
            }
        }
    }
}
tabs()