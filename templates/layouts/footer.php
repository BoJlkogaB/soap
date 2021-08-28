<footer class="footer">
    <nav class="footer__nav">
        <p class="footer__copyright">
            © ООО «Соуп»
        </p>

        <ul class="footer__menu">
            <li class="footer__menu-item">
                <a href="#" class="footer__menu-link">
                    Мыло
                </a>
            </li>
            <li class="footer__menu-item">
                <a href="#" class="footer__menu-link">
                    Рубашки
                </a>
            </li>
            <li class="footer__menu-item">
                <a href="#" class="footer__menu-link">
                    Жир
                </a>
            </li>
        </ul>

        <form action="#" class="footer__form-subscription">
            <label for="email">Подписка на рассылку</label>
            <input
                    type="email"
                    class="footer__input"
                    id="email"
                    placeholder="Ваш e-mail"
            >
            <button
                type="submit"
                class="footer__button"
            >Отправить</button>
        </form>
    </nav>
</footer>

    <script src="./scripts/js/responseToSubscription.js"></script>
    <script src="./scripts/js/showMore.js"></script>
    <script src="./scripts/js/productInfoSwitch.js"></script>
    <script src="./scripts/js/slider.js"></script>
    <script src="./scripts/js/menu.js"></script>

    <script>
        responseToSubscription();
        showMore();
        productInfoSwitch();
        slider();
        secondMenu();
        hamburgerMenu();
    </script>
</body>
</html>