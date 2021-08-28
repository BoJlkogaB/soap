function showMore() {
    let buttonDescriptionFull = document.querySelector('.main__button-description-full');
    let productInfoDescription = document.querySelector('.main__product-info-description');

    buttonDescriptionFull.onclick = function () {
        productInfoDescription.classList.add('description-full');
        buttonDescriptionFull.classList.add('hidden');
    }
}