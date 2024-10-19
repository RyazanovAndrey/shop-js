import {products} from "./products.js";
let productWrapper = document.querySelector('.product-wrapper')

function productRender(products, firstIndex, lastIndex) {

    let currentProduct = products.slice(firstIndex, lastIndex)

    currentProduct.forEach(item => {

        const productItem = `
        <div class="product" id="${item.id}">
            <img src="img/${item.img}" alt="" class="img">
            <div class="product-content">
                <p class="title">${item.title}</p>
                <div class="product-info">
                    <div class="price">${item.price}</div>
                    <p>₴</p>
                </div>
                <button class="btn-add">В корзину</button>
            </div>
        </div>
        `
        productWrapper.insertAdjacentHTML('beforeend', productItem)
        
    })
}

export { productRender }