<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/ant/reset.css">
    <!-- <link rel="stylesheet" href="css/ant/style-orig.css"> -->
    <link rel="stylesheet" href="css/ant/style.css">
    <!-- <link rel="stylesheet" href="http://10.30.50.10/webapp/css/style.css"> -->
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="apple-touch-icon" href="icon.png">
    <title> Модальное окно </title>
</head>

<body class="">

    <!-- <div class="gridContainer__modal modal-alert"> -->
    <div class="gridContainer__modal" >
        <header class="header-top__modal">

            <!-- TOP - Панель с заголовком -->
            <div id="title" class=""> Заголовок id="title" </div>

        </header>
        <!-- Изображение и характеристики -->
        <main role="main">

            <header class="header__modal">
                <div id="header" class="label-heading"> Подзаголовок id="header" </div>
            </header>

            <section id="mess" class="section-modal">
                <div>
                    <p id="" class=""><span style="font-weight: bold;">id="mess"</span> - Сообщение на одну строчку</p>
                </div>
            </section>

            <!-- кнопки -->
            <section class="bottom-block__buttons--modal">

                <button class="button-right" id="btnCopy"> OK </button>
                <button class="button-right" id="btnDelete"> Cancel </button>
                <!-- <button class="" id="btnAdd"> Добавить </button> -->
                <button class="button-right" id="btnApply"> Close </button>

            </section>

        </main>
    </div>
    <!--скрипты для стилей -->
    <!-- <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/main.js"></script> -->
    <!-- <script src="http://10.30.50.10/webapp/package/main.js"></script> -->
</body>

</html>