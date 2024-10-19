import { renderSortProducts } from "./renderSortProducts.js";
let inputField = document.querySelector('.input-field')
let sortList = document.querySelector('.sort-item')

let tabsBtn = document.querySelector('.tabs')

function filterProducts(products) {

    let sortTab = ''
    let sortPrice = ''

    tabsBtn.addEventListener('click', (event) => {

        document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'))
        event.target.classList.add('active')

        if(event.target.dataset.tab !== 'all') {
            sortTab = event.target.dataset.tab
        }else {
            sortTab = ''
        }

        let newSortItem = filterItem(products, sortTab)
        renderSortProducts(newSortItem)
    })

    inputField.addEventListener('input', () => {
        let inputValue = inputField.value
        let newSortItem = filterItem(products, sortTab, inputValue)
        renderSortProducts(newSortItem)
    })

    sortList.addEventListener('click', (event) => {
        let a = event.target.closest('.sort-menu')
        a.classList.add('open')

        document.querySelectorAll('.drop-link').forEach(item => {
            item.addEventListener('click', () => {
                event.target.textContent = item.textContent
                a.classList.remove('open')

                sortPrice = item.dataset.sort
                let sortOnPage = filterItem(products, sortTab, inputField.value, sortPrice)
                renderSortProducts(sortOnPage)
            })
        })
    })
}

function filterItem(products, sortTab, inputValue, sortPrice) {
    let a = products.filter(item => {
        if(sortTab && item.category !== sortTab) {
            return false
        }
        if(inputValue && !item.title.toLowerCase().includes(inputValue.toLowerCase())) {
            return false
        }
        return true
    })

    if(sortPrice === 'asc') {
        a.sort((a, b) => a['price'] - b['price'])
    }
    if(sortPrice === 'desc') {
        a.sort((a, b) => b['price'] - a['price'])
    }

    return a
}

export { filterProducts }