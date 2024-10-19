import { products } from "./products.js";
import {productRender} from "./productRender.js";
import {renderMore} from "./renderMore.js";
import {addToCart} from "./addToCart.js";
import {filterProducts} from "./filterProducts.js";
import {closeCart, openCart} from "./cartDraiwer.js";

let firstIndex = 0
let lastIndex = 8

productRender(products, firstIndex, lastIndex)
renderMore(products, firstIndex, lastIndex)

openCart()
closeCart()
addToCart()

filterProducts(products)