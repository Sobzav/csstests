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

            <!-- Выбор Типа -->
            <div style="" class="">
                <!-- выпадающий список элементов -->
                <label class="" for="selCode"> Обозначение </label>
                <select class="select-type" id="selCode" name="package_code">

                    <!-- Список всех элементов в базе  -->
                    <option id=“0”> Новый </option>
                </select>
                <input class="hidden" size="4" type="text" id="inpCodeEdit" name="package_code">
            </div>
            <!-- Растягивающийся блок с input  -->
            <div class="input-flex">
                <label class="" for="inpName"> Наименование </label>
                <input class="" type="text" id="inpName" name="package_name">
            </div>
            <!-- Кнопка справа  -->
            <div style="" class="dr">
                <button class="" id="btnEdit"> Редактировать </button>
            </div>

        </section>

        <!-- Информация об упаковке -->

        <!-- Изображение и характеристики -->
        <main role="main">
            <!-- Центральная главная область с двумя блоками: Left и Right -->

            <!-- Left item -->
            <div class="item-1">
                <input type="hidden" name="package_id">

                <!-- Изображение -->
                <div class="">
                    <canvas class="" id="canvas">
                        success: {
                        }
                        error: Browser does not support canvas element.
                    </canvas>
                </div>
            </div>
            <!-- характеристики -->
            <!-- Right item -->
            <div class="item-2">
                <header class="header__general">
                    <div class="label-heading"> Размеры прямоугольника </div>
                </header>
                <section class="section-general">
                    <div class="section-general__grid">
                        <!-- Grid таблица 3х2 для отображения inputs для ввода Размеров прямоугольника -->
                        <div class="section-general__grid--3x2">

                            <div class="frst">
                                <label class="" for="inpSizeWx"> Ширина </label>
                                <input class="mainInput" size="5" type="text" min="2" max="20" pattern="[0-9]+" id="inpSizeWx" placeholder="" name="package_wx" required>
                                <span class="fa fa-info-circle icospan"></span>
                                <label class="" for="sizeWx"> мм </label>
                            </div>

                            <div class="scnd">
                                <label class="" for="inpSizeWy"> Высота </label>
                                <input class="mainInput" size="5" type="text" id="inpSizeWy" name="package_wy" required>
                                <label class="" for="sizeWy"> мм </label>
                            </div>

                            <div class="thrd">
                                <label class="" for="inpSizeH"> Глубина </label>
                                <input class="mainInput" size="5" type="text" id="inpSizeH" name="package_h" required>
                                <label class="" for="sizeH"> мм </label>
                            </div>
                            <div class="frth">
                                <label class="" for="inpColor"> Цвет: </label>
                                <input class="mainInput" type="color" id="inpColor" name="package_color" required>
                            </div>

                            <div class="ffth">
                                <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="hidden mainInput" size="6" type="text" id="inpPayload" name="package_payload" required>
                            </div>

                            <div class="sxth">
                                <label class="summ" for="inpVolume"> Объем = </label>
                                <label class="summ" type="text" id="inpVolume" name="package_value"> 0 </label>
                                <label class="summ" for="inpVolume"> мм&sup2 </label>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="section-subs">
                    <!-- элемент имеет внутреннее содержимое -->
                    <header class="header__sub">

                        <div class="inputBlock">
                            <input class="mainInput" type="checkbox" id="checkBoxHasContent" name="checkBoxHasContent">
                            <label class="label-heading" for="checkBoxHasContent"> Внутренние прямоугольники </label>
                        </div>

                    </header>

                    <section id="subBlockTamplate" class="section-sub hidden">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->

                        <div class="section-sub__grid--5x2">
                            <div class="nmbr"><label class="" id="subLabel"> 1. </label></div>
                            <div class="frst">
                                <label class="" for="inpSizeWx_">Ширина</label>
                                <input class="disabled" size="5" type="text" id="inpSizeWx_" name="package_wx_">
                                <label class="" for="inpSizeWx_">мм</label>
                            </div>

                            <div class="scnd">
                                <label class="" for="inpSizewY_">Высота</label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy_" name="package_wy_">
                                <label class="" for="inpSizewY_">мм</label>
                            </div>

                            <div class="thrd">

                                <select class="subInput" id="selCode_" name="package_code_">
                                    <option value=""> Тип </option>
                                    <!-- Список всех элементов в базе -->
                                </select>

                            </div>
                            <!-- Second grid Line -->
                            <div class="frth">
                                <label class="" for="inpNy_"> Количество<br>по вертикали </label>
                                <input class="subInput" size="1" type="text" id="inpNy_" name="package_wy_">
                                <label class="" for="inpNy_"> шт </label>
                            </div>

                            <div class="ffth">
                                <label class="" for="inpNx_"> Количество<br>по горизонтали </label>
                                <input class="subInput" size="1" type="text" id="inpNx_" name="package_wx_">
                                <label class="" for="inpNx_"> шт </label>
                            </div>

                            <div class="sxth">
                                <label class="summ" for="inpTotal_"> Всего = </label>
                                <label class="summ" type="text" id="inpTotal_" name="package_total_"> 0 </label>
                                <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                            </div>
                        </div>


                    </section>


                </section>
                <section class="section__subsumm">

                    <div class="">
                        <label class="" for="inpTotal"> Общее количество = </label>
                        <label class="" type="text" id="inpTotal" name="package_total"> 0 </label>
                        <label class="" for="inpTotal"> шт </label>
                    </div>

                </section>
            </div>
            <!--right item-->


        </main>

        <!-- кнопки -->
        <section class="bottom-block__buttons">

            <button class="button-right" id="btnCopy"> Копировать </button>
            <!-- <button class="" id="btnDelete"> Удалить </button> -->
            <!-- <button class="" id="btnAdd"> Добавить </button> -->
            <button class="button-right" id="btnApply"> Сохранить </button>

        </section>

        <!-- Строка статуса -->
        <section class="status-bar">
            <div class="">
                <label class="status-label"> | </label>
                <label class="status-label" id="lblStatusChanged"> </label>
                <label class="status-label"> | </label>
                <label class="status-label" id="lblStatus"> </label>
                <label class="status-label"> | </label>
                <label hidden class="status-label" id="lblStatusInfo"> </label>
                <label hidden class="status-label"> | </label>
            </div>
        </section>
    </div>

    <!--скрипты для стилей -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/main.js"></script>
    <script src="js/package.js"></script>
    <script src="js/subblock.js"></script>
    <script src="js/main.js"></script>
    <!-- <script src="http://10.30.50.10/webapp/package/main.js"></script> -->

</body>

<!-- MODAL DIALOG OPEN -->
<div class="dialog-modal">
    <!-- - block -->
    <!-- <div class="gridContainer__modal modal-alert"> Если красный цвет -->
    <!-- <div class="gridContainer__modal modal-info"> Если синий цвет -->
    <div class="center-modal">
        <div class="gridContainer__modal">
            <!-- inline-block; -->
            <header class="header-top__modal">

                <!-- TOP - Панель с заголовком -->
                <div id="title" class=""> Заголовок id="title" </div>

            </header>
            <!-- Контейнер диалогового окна -->
            <div class="dialog-form">

                <header class="header__modal">
                    <div id="header" class="label-heading"> Подзаголовок id="header" </div>
                </header>

                <section id="mess" class="section-modal">
                    <div>
                        <p id="" class=""><span style="font-weight: bold;">id="mess"</span> - Сообщение на одну строчку Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quia consectetur autem eligendi beatae. Cupiditate tenetur molestiae officia aliquid numquam quam molestias fugiat distinctio eaque. Minus suscipit corporis placeat, voluptates id libero quod rerum perferendis officiis? In nisi nam ab. Fuga nemo reiciendis quasi vitae consectetur, voluptatem praesentium consequuntur excepturi deserunt. Sunt sint natus facilis ipsam soluta fuga accusamus maxime quisquam consequatur, reprehenderit aut maiores reiciendis corrupti rem nulla dicta beatae ipsa officia doloribus error magnam ab, iusto consectetur exercitationem. A consectetur maxime aliquid qui tempora rem explicabo quia nam, quibusdam voluptatibus voluptatum. Ratione error facilis alias culpa sit consectetur a vitae delectus dolore cupiditate, quas, nihil magnam itaque ipsam, quasi iste porro voluptates nemo. Illum totam nisi non vero ratione voluptatibus eaque temporibus animi fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis atque dolor, incidunt molestias omnis fugit eius velit, vel voluptatibus, quas obcaecati tempore accusamus! Assumenda reprehenderit odit debitis tenetur corrupti nisi vero, sunt repellendus deleniti voluptates et ad blanditiis, cum eaque, commodi quia veritatis consectetur sequi fuga dolorem porro ducimus non facilis. Aliquid ducimus nisi, amet voluptatibus commodi </p>
                    </div>
                </section>

                <!-- Блок кнопок -->
                <section class="bottom-block__buttons--modal">

                    <button class="button-right" id="btnOk_modal"> OK </button>
                    <button class="button-right" disabled="disabled" id="btnCancel_modal"> Cancel </button>
                    <!-- <button class="" id="btnAdd"> Добавить </button> -->
                    <button class="button-right" id="btnClose_modal"> Close </button>

                </section>

            </div>
        </div>
    </div>
</div>
<!-- MODAL DIALOG END -->



<footer>
</footer>

</html>