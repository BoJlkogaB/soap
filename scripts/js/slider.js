function slider() {
    let buttonLeft = document.querySelector('.button-left');
    let buttonRight = document.querySelector('.button-right');

    let itemsFirst = document.querySelectorAll('.item-1');
    let itemsSecond = document.querySelectorAll('.item-2');

    let colorList = document.querySelector('.main__product-colors-list');
    let colors = document.querySelectorAll('.main__product-color');

    let buttonBasket = document.querySelector('.main__product-basket');
    let buttonBasketAttr = buttonBasket.attributes;

    let countImages = 0;
    let countColors = 1;

    buttonRight.onclick = function () {
        checkImage(countColors, countImages, itemsFirst, itemsSecond);
    }

    buttonLeft.onclick = function () {
        checkImage(countColors, countImages, itemsFirst, itemsSecond);
    }

    for (let color of colors) {
        color.onclick = function () {
            if (color.classList.contains("color-fervent-pink")) {
                countColors = 0;
            }
            else if (color.classList.contains("color-violet")) {
                countColors = 1;
            }

            for(let i = 0; i < colorList.children.length ; i++){
                colorList.children[i].classList.remove('color-selected');
            }

            color.classList.add('color-selected');
            buttonBasketAttr.setNamedItem(document.createAttribute('disabled'));

            switchImage(countColors, itemsFirst, itemsSecond);
        }
    }
}

function sliderFun(i, images) {
    // function sliderFun(i, images) {
    // if (i === 0) {
    //     console.log(i);
    //     images[i].classList.add('hidden');
    //     i++;
    //     images[i].classList.remove('hidden');
    // }
    // else {
    //     console.log(i);
    //     images[i].classList.add('hidden');
    //     i--;
    //     images[i].classList.remove('hidden');
    // }
    //
    // return i;

    images[0].classList.toggle('hidden');
    images[1].classList.toggle('hidden');
}

function checkImage(countColors, countImages, itemsFirst, itemsSecond) {
    if (countColors === 0) {
        // countImages = sliderFun(countImages, itemsFirst);
        sliderFun(countImages, itemsSecond);
    }
    else if (countColors === 1) {
        // countImages = sliderFun(countImages, itemsFirst);
        sliderFun(countImages, itemsFirst);
    }
}

function switchImage(countColors, itemsFirst, itemsSecond) {
    if (countColors === 0) {
        itemsSecond[0].classList.remove('hidden');
        itemsSecond[1].classList.add('hidden');

        itemsFirst[0].classList.add('hidden');
        itemsFirst[1].classList.add('hidden');
    }
    else if (countColors === 1) {
        itemsFirst[0].classList.remove('hidden');
        itemsFirst[1].classList.add('hidden');

        itemsSecond[0].classList.add('hidden');
        itemsSecond[1].classList.add('hidden');
    }
}