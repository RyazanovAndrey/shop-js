let cartBtn = document.querySelector('.bx-cart-alt')
let cart = document.querySelector('.cart')
let closeUp = document.querySelectorAll('.close-up')

function openCart() {
    cartBtn.addEventListener('click', () => {
        cartGo()
    })
}

function closeCart() {
    closeUp.forEach(item => {
        item.addEventListener('click', (event) => {
            if(event.target.matches('.close-up')) {
                cartGo()
            }
        })
    })
}

function cartGo() {
    cart.classList.toggle('open')
}


export { openCart, closeCart }