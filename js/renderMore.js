import {productRender} from "./productRender.js";

let showMore = document.querySelector('.show-more')
let showBtn = document.querySelector('.btn-up')

function renderMore(products, firstIndex, lastIndex) {

    const plusMore = 4

    showMore.addEventListener('click', () => {

        firstIndex = lastIndex
        lastIndex = lastIndex + plusMore

        productRender(products, firstIndex, lastIndex)

        showMore.scrollIntoView({
            behavior: "smooth"
        })

        if(lastIndex > products.length) {
            showMore.classList.add('hidden')
        }

        let x = window.scrollY

        if(x > 1500) {
            showBtn.classList.add('show')
        }else {
            showBtn.classList.remove('show')
        }
    })
}

export { renderMore }