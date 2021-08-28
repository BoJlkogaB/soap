function responseToSubscription() {
    let footerInput = document.querySelector('.footer__input');
    let footerButton = document.querySelector('.footer__button');

    footerButton.onclick = function () {
        if (footerInput.value != null
            && footerInput.value.length >= 6
            && footerInput.value.length <= 32)
        {
            alert("Подписка оформлена!");
        }
        else {
            alert("Что-то пошло не так!");
        }
    }
}