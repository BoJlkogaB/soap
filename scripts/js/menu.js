function secondMenu() {
    let menuBranching = document.querySelector('.menu-branching');
    let menuSecond = document.querySelector('.header__menu-second');

    menuBranching.onclick = function () {
        menuSecond.classList.toggle('hidden');
    }
}

function hamburgerMenu() {
    let menuHamburger = document.querySelector('.header__menu-button');
    let otherMenu = document.querySelector('.header__second-wrapper');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');

    let state = false;

    menuHamburger.onclick = function () {
        if (state) {
            state = false;
            otherMenu.style.display = "none";
            main.style.display = "block";
            footer.style.display = "block";
        }
        else {
            state = true;
            otherMenu.style.display = "flex";
            main.style.display = "none";
            footer.style.display = "none";
        }
    }
}