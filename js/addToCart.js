let productWrapper = document.querySelector('.product-wrapper')
let cartList = document.querySelector('.cart-list-wrapper')
let emptyCart = document.querySelector('.empty-cart')
let cartBox = document.querySelector('.cart-box')

let productInfo = {}

emptyCartList()

function addToCart() {

    productWrapper.addEventListener('click', (event) => {
        let currentClick = event.target

        if(currentClick.matches('.btn-add')) {
            let productItem = event.target.closest('.product')

            productInfo.id = productItem.id
            productInfo.img = productItem.querySelector('.img').getAttribute('src')
            productInfo.title = productItem.querySelector('.title').textContent
            productInfo.price = productItem.querySelector('.price').textContent

            let id = productInfo.id

            let findProduct = cartList.querySelector(`#${id}`)

            if(findProduct) {
                let countPlus = findProduct.querySelector('.count')
                countPlus.textContent = ++countPlus.textContent
                countTotal()
                emptyCartList()
            }else {
                addToCartList(productInfo)
                countTotal()
                emptyCartList()
            }
        }
    })

    cartList.addEventListener('click', (event) => {
        if(event.target.matches('.close-btn')) {
            let findeMain = event.target.closest('.cart-list')
            findeMain.remove()
            countTotal()
        }
    })

    cartBox.addEventListener('click', (event) => {

        let a = event.target.closest('.cart-line')
        let countTarget = a.querySelector('.count')
        let minusBtn = a.querySelector('.minus')

        if(event.target.matches('.plus')) {
            countTarget.textContent = ++countTarget.textContent
            minusBtn.removeAttribute('disabled')
            countTotal()
        }
        if(event.target.matches('.minus')) {
            if(countTarget.textContent <= 2) {
                countTarget.textContent = --countTarget.textContent
                minusBtn.setAttribute('disabled', true)
            }else {
                countTarget.textContent = --countTarget.textContent
            }
        }
    })
}

function addToCartList() {
    let cartNewProduct = `
    <div class="cart-list" id="${productInfo.id}">
        <img src="${productInfo.img}" width="180" alt="">
        <div class="content">
            <div class="cart-line">
                <div class="cart-list-title">${productInfo.title}</div>
                <div class="close-btn">&times;</div>
            </div>
            <div class="cart-line">
                <div class="box-count">
                    <button class="minus" disabled>-</button>
                    <div class="count">1</div>
                    <button class="plus">+</button>
                </div>
                <div class="price-item">${productInfo.price}</div>
            </div>
        </div>
    </div>
    `
    cartList.insertAdjacentHTML('beforeend', cartNewProduct)
}

function countTotal() {
    let cartListItem = document.querySelectorAll('.cart-list')
    let totalSum = 0

    if(document.querySelector('.cart-list')) {
        cartListItem.forEach(item => {
            let countItem = +item.querySelector('.count').textContent
            let priceItem = +item.querySelector('.price-item').textContent

            totalSum = totalSum + countItem * priceItem

            document.querySelector('.sum-count').textContent = totalSum
        })
    }else {
        document.querySelector('.sum-count').textContent = 0
        emptyCartList()
    }
}

function emptyCartList() {
    if(document.querySelector('.cart-list')) {
        emptyCart.classList.add('hidden')
    }else {
        emptyCart.classList.remove('hidden')
    }
}

export { addToCart }