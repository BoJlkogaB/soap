function productInfoSwitch() {
    let buttonProductDescription = document.querySelector('.product-description-button');
    let buttonProductSpecifications = document.querySelector('.product-specifications-button');

    let productDescription = document.querySelector('.main__product-info-description-wrapper');
    let productSpecifications = document.querySelector('.main__product-info-specifications-wrapper');

    buttonProductDescription.onclick = function () {
        buttonProductDescription.parentNode.classList.add('button-selected');
        buttonProductSpecifications.parentNode.classList.remove('button-selected');
        productDescription.classList.remove('hidden');
        productSpecifications.classList.add('hidden');
    }

    buttonProductSpecifications.onclick = function () {
        buttonProductDescription.parentNode.classList.remove('button-selected');
        buttonProductSpecifications.parentNode.classList.add('button-selected');
        productDescription.classList.add('hidden');
        productSpecifications.classList.remove('hidden');
    }
}