<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" type="text/css" href="..\css\style.css" /> Черновая версия - > и . шрифтовые, (. before li), (> before span) -->
    <!-- <link rel="stylesheet" type="text/css" href="..\css\style.css" /> -->
    <link rel="stylesheet" type="text/css" href="css\style.css" />

    <title> Адресация склада </title>
</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <header class="header-top">
            <!-- TOP - Панель с заголовком -->

            <div class=""> </div>

        </header>

        <!--  Sub-TOP - панель навигации -->

        <!--  Sub-TOP - панель выбора элемента -->
        <section class="">

            <div class="mainInput dropdown wide-100" tabindex="0">
                <label class="" for="inpName"> Начать с </label>
                <input class="mainInput" size="5" type="text" id="inpAddr">
            </div>
            <button class="" id="btnEdit"> Расчет </button>
        </section>

        <?php
            @require_once 'setAddres.php';
        ?>


        <!-- Строка статуса -->
        <section class="status-bar">
            <div class="">
                <label class="status-label" id="lblStatusEdit"> </label>
                <label class="status-label"> | </label>
                <label class="status-label-changed" id="lblStatusChanged"> </label>
                <label class="status-label"> | </label>
                <label class="status-label" id="lblStatus"> </label>
                <label class="status-label"> | </label>
                <label class="status-label" id="lblStatusInfo"> </label>
                <label hidden class="status-label"> | </label>
            </div>
        </section>
    </div>

    <!--скрипты для стилей -->
    <script src="../jquery/jquery-3.4.1.min.js"></script>
    <script src="../jquery/jquery.validate.js"></script>
    <script src="settings.js?n=1"></script>
    <script src="warehouse.js?n=1"></script>
    <script src="../package/place.js?n=1"></script>
    <script src="../package/subblock.js"></script>
    <script src="../searchList/searchList.js?n=1"></script>
    <script src="main.js?n=1"></script>
</body>

<footer>
</footer>

<dialog class="dialog-modal" id="dialog_modal">
    <!-- <div class="gridContainer__modal modal-alert"> -->
    <div class="gridContainer__modal">
        <header class="header-top__modal">

            <!-- TOP - Панель с заголовком -->
            <div id="title" class=""> </div>

        </header>

        <!-- Тело сообщения -->
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
            <section class="right-block__buttons--modal">

                <button class="button-right" id="btnOk_modal"> OK </button>
                <button class="button-right" id="btnCancel_modal"> Cancel </button>
                <button class="button-right" id="btnClose_modal"> Close </button>

            </section>

        </main>
    </div>
</dialog>


</html>