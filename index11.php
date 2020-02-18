<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
        <!-- Подключаем шрифтовые иконки для меню -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="css/ant/style.css">
    <style>
    .section__main {
    display: flex;
    grid-area: 2 / 1 / 3 / 3;
    min-width: 83vw;
}

.section__main .links {
    /* display: flex;
    flex: 1 0 auto; */
}

.section__main .links p {
    /* display: block; */
    /* width: 100%; */
}

.section__main .links p a {
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    padding: 10px;
}
.section__main .links p a:hover {
    background-color: var(--color-chateauGrey);
}

/* a.button {
    font-family: 'CoreSansDS25Light';
    text-align: center;
    color: var(--color-black);
    background-color: transparent;
    border: 1px solid var(--color-black);
    font-size: inherit;
    padding: 0 0.75rem;
    margin: 0 0.75rem;
} */
</style>
    <!-- <link rel="stylesheet" href="css/fonts.css"> -->
    <link rel="apple-touch-icon" href="icon.png">
    <title> Упаковка </title>
</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">

        <header class="header-top">
            <!-- TOP - Панель с заголовком -->

            <div class="">
                <!--Заголовок-->
            </div>

        </header>

        <!--  Sub-TOP - панель выбора элемента -->
        <section class="section__main">

            <div class="links">
                <p><a  href="http://sobzav.ru/webApp/warehouse/">Склад</a> </p>
            <p><a  href="http://sobzav.ru/webApp/package/">Место хранения</a></p></div>
           
        </section>

        <!-- Информация об упаковке -->

 
    </div>

    <!--скрипты для стилей -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="webApp/package/main.js"></script>
    <script src="webApp/package/package.js"></script>
    <script src="webApp/package/subblock.js"></script>
    <!-- <script src="http://10.30.50.10/webapp/package/main.js"></script> -->

</body>





<footer>
</footer>

</html>