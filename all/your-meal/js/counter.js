'use strict'
window.addEventListener('click', clickQuantity)

function clickQuantity(e){
    let currentElement = e.target
    let counter
    if(currentElement.closest('.quantity')){
        const counterWrapper = currentElement.closest('.quantity')
        counter = counterWrapper.querySelector('[data-counter]')
        if(currentElement.dataset.action === 'plus'){
            counter.value = ++counter.value
        }
        if(currentElement.dataset.action === 'minus'){
            if(parseInt(counter.value) > 1){
                counter.value = --counter.value
            }
            else if(currentElement.closest('.basket__items') && parseInt(counter.value) === 1){
                currentElement.closest('.basket__item ').remove()
                toggleCartStatus()
                calcBasketPrice()
            }
        }
    }
    if(currentElement.hasAttribute('data-action') && currentElement.closest('.basket__inner')){
        calcBasketPrice()
    }
}

