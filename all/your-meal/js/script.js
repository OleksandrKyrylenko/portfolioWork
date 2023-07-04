'use strict'
const itemProducts = document.querySelector('.tabs-product__item')
itemProducts.addEventListener('click', function(e){
    const targetElement = e.target
    if(targetElement.classList.contains('content-item-tabs__button')){
        const product = targetElement.closest('.item-tabs__content')
        const id = product.dataset.id
        const popup = document.querySelector('#popup-1 .modal-items__content')
        createPopup(product,popup,id)
    }
})

function createPopup(product,popup,id){
    const title = product.querySelector('.content-item-tabs__label').textContent
    const image = product.querySelector('.image picture')
    const price = product.querySelector('.content-item-tabs__price span').textContent
    const weight = product.querySelector('.content-item-tabs__weight span').textContent
    const popupContent = `
                            <h3 class="content-modal__title">${title}</h3>
                            <div data-id="${id}" class="content-modal__item">
                                <div class="content-modal__image image">
                                    ${image.outerHTML}
                                </div>
                                <div class="content-modal__info">
                                    <div class="content-modal__text">
                                        <p>
                                            Супер м'ясне задоволення! Велика рубана котлета зі свіжого яловичого м'яса підкорить вас своєю соковитістю, а хрусткі листя салату додають свіжості.
                                        </p>
                                    </div>
                                    <div class="content-modal__storage storage">
                                        <div class="storage__label">Склад:</div>
                                        <ul class="storage__list">
                                            <li class="storage__item">Пшенична булочка</li>
                                            <li class="storage__item">Котлета з яловичини</li>
                                            <li class="storage__item">Червона цибуля</li>
                                            <li class="storage__item">Листя салату</li>
                                            <li class="storage__item">Гірчичний соус</li>
                                        </ul>
                                    </div>
                                    <div class="content-modal__weight">
                                        <span>${weight}</span>,ккіл 430
                                    </div>
                                </div>
                            </div>
                            <div class="content-modal__footer">
                                <div class="content-modal__inner">
                                    <button id="addToBasket" type="button" class="content-modal__button button popup-close">Додати</button>
                                    <div class="content-modal__quantity quantity">
                                        <button type="button" data-action="minus" class="quantity__button quantity__button--minus"></button>
                                        <div class="quantity__input">
                                            <input autocomplete="off" type="text" data-counter value="1">
                                        </div>
                                        <button type="button" data-action="plus" class="quantity__button quantity__button--plus"></button>
                                    </div>
                                </div>
                                <div class="content-modal__price"><span>${price}</span> грн</div>
                            </div>
                        `
    popup.innerHTML = popupContent
}
