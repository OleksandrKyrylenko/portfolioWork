const productBody = document.querySelector('.tabs-product__body')
const basketWrapper = document.querySelector('.basket__items')
productBody.addEventListener('click',toggleBasket)

function toggleBasket(e){
    const targetElement = e.target
    if(targetElement.closest('.basket__info') && basketWrapper.children.length > 0){
        document.documentElement.classList.toggle("basket-open");
    }
    quantity(targetElement)
}
function quantity(targetElement) {
    if (basketWrapper.children.length === 1) {
        const quantityCount = basketWrapper.querySelector('.item-basket__quantity input').value
        if(targetElement.dataset.action === 'minus' && parseInt(quantityCount) === 1){
            document.documentElement.classList.remove("basket-open");
        }
    }
}
