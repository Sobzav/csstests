<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" type="text/css" href="..\css\reset.css" /> -->
    <!-- <link rel="stylesheet" type="text/css" href="..\css\style.css" /> -->
    <!-- <link rel="stylesheet" type="text/css" href="..\css\table.css" /> -->
    <link rel="stylesheet" type="text/css" href="css\style.css" />
    <title> Прототипы </title>

</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <div class="local-grid">
        <div class="table"> <!-- Пока не определенный класс -->
            <header class="header-top">
                <!-- TOP - Панель с заголовком -->
                <div class="logo-left"> </div><!-- Логотип -->
                <div class="menu-name">  </div><!-- Имя страницы -->
                <!-- <div class="user">User <span><a class="out" href="#"></a></span> </div> User -->
            </header>
            <main>
                <?php
                @require_once 'getPlacePattern.php';
                ?>
            </main>

        </div>



    <!-- Строка статуса -->
    <!-- <section class="status-bar">
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
    </section> -->
    </div></div>

    <!--скрипты для стилей -->
    <script src="../jquery/jquery-3.4.1.min.js"></script>
    <script src="../jquery/jquery.validate.js"></script>
    <script src="settings.js?n=1"></script>
    <script src="package.js?n=1"></script>
    <script src="subblock.js?n=1"></script>
    <script src="../searchList/searchList.js?n=1"></script>
    <script src="main.js?n=1"></script>
</body>

<footer>
</footer>

<!-- <dialog class="dialog-modal" id="dialog_modal">

    <div class="gridContainer__modal">
        <header class="header-top__modal">


            <div id="title" class=""> </div>

        </header>



            <header class="header__modal">
                <div id="header" class="label-heading"> Подзаголовок id="header" </div>
            </header>

            <section id="mess" class="section-modal">
                <div>
                    <p id="" class=""><span style="font-weight: bold;">id="mess"</span> - Сообщение на одну строчку</p>
                </div>
            </section>


            <section class="right-block__buttons--modal">

                <button class="button-right" id="btnOk_modal"> OK </button>
                <button class="button-right" id="btnCancel_modal"> Cancel </button>
                <button class="button-right" id="btnClose_modal"> Close </button>

            </section>

    </div>
</dialog> -->


</html>