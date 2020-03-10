<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="..\css\reset.css" />
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />
    <link rel="stylesheet" type="text/css" href="css/package.css" />
    <title> Упаковка </title>

</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <div class="local-grid">
            <header class="header-top">
                <!-- TOP - Панель с заголовком -->

                <div class=""> </div>

            </header>

            <!--  Sub-TOP - панель выбора элемента - FIRST VAR -->
            <section class="section__main" id="selectPanel">
                <!-- Выбор Типа -->
                <!-- Выпадающий список элементов -->
                <div class="wide-100">
                    <label class="" for="selCode"> Тип </label>

                    <!-- Поисковая строка с выпадающим списком -->
                    <div class="dropdown wide-100" tabindex="0">
                        <input class="wide-100" type="text" placeholder="Поиск.." id="myInput">
                        <ul id="packList" class="dropdown-content hidden" tabindex="0">
                        </ul>
                        <button class="dropbtn">&#9013</button>
                    </div>

                    <!-- END Выпадающий список элементов -->
                    <!-- Кнопка справа  -->
                    <div>
                        <button class="" id="btnEdit"> Редактировать </button>
                    </div>
                </div>
            </section> <!-- END FIRST VAR  -->

            <!-- Sub-TOP - панель редактирования элемента - SECOND VAR -->
            <section class="section__main hidden" id="editPanel">
                <div>
                    <label class="" for="selCode"> Обозначение </label>
                    <input class="mainInput" size="4" type="text" id="inpCodeEdit" name="package_code">
                </div>
                <div class="input-flex">
                    <label class="" for="inpName"> Наименование </label>
                    <input class="mainInput" type="text" id="inpName" name="package_name">
                </div>
                <!-- Кнопка справа  -->
                <div>
                    <button class="" id="btnBack"> Назад </button>
                </div>
            </section> <!-- END SECOND VAR -->

            <!-- Информация об упаковке -->
            <!-- Изображение и характеристики -->
            <main role="main">
                <!-- Центральная главная область с двумя блоками: Left и Right -->

                <!-- Left item -->
                <input type="hidden" name="package_id">
                <div class="item-1">
                    <div class="canvas-wrap">
                        <!-- Изображение -->
                        <canvas class="" id="canvas">
                            success: {
                            }
                            error: Browser does not support canvas element.
                        </canvas></div>
                </div> <!-- характеристики -->
                <!-- Right item -->
                <div class="item-2">
                    <!-- кнопки -->
                    <section class="right-block__buttons">
                        <button class="button-right" id="btnTurn"> Повернуть отображение </button>
                        <button class="button-right" id="btnCopy"> Копировать </button>
                        <!-- <button class="" id="btnDelete"> Удалить </button> -->
                        <!-- <button class="" id="btnAdd"> Добавить </button> -->
                        <button class="button-right" id="btnApply"> Сохранить </button>

                    </section>
                    <!-- <header class="header__general">
                    <div class="label-heading"> Размеры прямоугольника </div>
                </header> -->
                    <section class="section-general">

                        <div class="title">Наружные размеры</div>
                        <!-- Flex 3х1 для отображения inputs для ввода Размеров прямоугольника -->
                        <div class="section-general__flex">
                            <div class="">
                                <label class="" for="inpSizeWx"> Ширина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWx" name="package_wx"
                                    pattern=“[0-9]+” required>
                                <label class="" for="sizeWx"> мм </label>
                            </div>

                            <div class="">
                                <label class="" for="inpSizeWy"> Высота </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWy" name="package_wy"
                                    pattern=“[0-9]+” required>
                                <label class="" for="sizeWy"> мм </label>
                            </div>

                            <div class="">
                                <label class="" for="inpSizeWz"> Глубина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWz" name="package_wz"
                                    pattern=“[0-9]+” required>
                                <label class="" for="inpSizeWz"> мм </label>
                            </div>
                        </div>

                        <div class="title">Внутренние размеры</div>

                        <div class="section-general__flex">
                            <div class="">
                                <label class="" for="inpInternalSizeWx"> Ширина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWx"
                                    name="package_iwx" pattern=“[0-9]+” required>
                                <label class="" for="sizeWx"> мм </label>
                            </div>

                            <div class="">
                                <label class="" for="inpInternalSizeWy"> Высота </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWy"
                                    name="package_iwy" pattern=“[0-9]+” required>
                                <label class="" for="sizeWy"> мм </label>
                            </div>

                            <div class="">
                                <label class="" for="inpInternalSizeWz"> Глубина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWz"
                                    name="package_iwz" pattern=“[0-9]+” required>
                                <label class="" for="inpInternalSizeWz"> мм </label>
                            </div>
                        </div>

                        <div class="section-general__flex">
                            <div class="">
                                <label class="" for="color"> Цвет: </label>
                                <input class="mainInput" type="color" id="inpColor" name="package_color">
                            </div>

                            <div class="">

                                <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="hidden mainInput" size="6" type="text" id="inpPayload"
                                    name="package_payload">
                            </div>

                            <div class="">
                                <label class="" for="inpVolume"> Объем = </label>
                                <label class="" type="text" id="inpVolume" name="package_value"> 0 </label>
                                <label class="" for="inpVolume" id="inpVolumeUnit"> </label>
                            </div>
                        </div>

                    </section>
                    <section class="section-subs">
                        <!-- элемент имеет внутреннее содержимое -->
                        <header class="header__sub">
                            <div class="">
                                <div class="inputBlock mx-1">
                                    <input class="mainInput" type="checkbox" id="checkBoxHasContent"
                                        name="checkBoxHasContent">
                                    <label class="label-heading" for="checkBoxHasContent"> Внутренние
                                        прямоугольники:&nbsp;</label>
                                    <label class="label-heading" type="text" id="inpTotal" name="package_total"> 0
                                    </label>
                                    <label class="label-heading" for="inpTotal"> шт </label>
                                </div>
                            </div>
                        </header>

                        <section id="subBlock_" class="section-sub hidden">
                            <!-- внутреннее содержимое -->
                            <!-- блок внутренних прямоугольников -->

                            <div class="section-sub__grid--5x2">
                                <div class="nmbr"><label class="" id="subLabel_"> 1. </label></div>
                                <div class="frst">
                                    <label class="" for="inpSizeWx_">Ширина</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx_">
                                    <label class="" for="inpSizeWx_">мм</label>
                                </div>

                                <div class="scnd">
                                    <label class="" for="inpSizewY_">Высота</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy_">
                                    <label class="" for="inpSizewY_">мм</label>
                                </div>

                                <div class="thrd subInput dropdown wide-100" tabindex="0">
                                    <!-- <div class="dropdown wide-100" tabindex="0"> -->
                                    <input size="6" class="subInput dropdown-input" type="text" placeholder="Тип">
                                    <ul id="packList_" class="subInput dropdown-content hidden" tabindex="0">
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                        <li> Обозначение <i>|</i> Нименование наименование <i>|</i> 777x888x999 <i>|</i>
                                            Внут 10шт </li> -->
                                    </ul>
                                    <button class="subInput dropbtn">&#9013</button>
                                    <!-- </div> -->
                                </div>

                                <div class="checkbox">
                                    <label class="" for="checkBoxInRow_"> В ряд:&nbsp;</label>
                                    <input class="subInput" type="checkbox" id="checkBoxInRow_">
                                </div>

                                <!-- Second grid Line -->
                                <div class="frth">
                                    <label class="" for="inpNy_"> Количество<br>по вертикали </label>
                                    <input class="subInput" size="1" type="text" id="inpNy_">
                                    <label class="" for="inpNy_"> шт </label>
                                </div>

                                <div class="ffth">
                                    <label class="" for="inpNx_"> Количество<br>по горизонтали </label>
                                    <input class="subInput" size="1" type="text" id="inpNx_" name="package_wx_">
                                    <label class="" for="inpNx_"> шт </label>
                                </div>

                                <div class="ffth1">
                                    <label class="summ" for="inpTotal_"> Всего = </label>
                                    <label class="summ" type="text" id="inpTotal_" name="package_total_"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>
                            </div>

                        </section>

                    </section>
                    <section class="section__subsumm">

                    </section>
                </div>
                <!--right item-->

            </main>

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
    </div>

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

<dialog class="dialog-modal" id="dialog_modal">
    <!-- <div class="gridContainer__modal modal-alert"> -->
    <div class="gridContainer__modal">
        <header class="header-top__modal">

            <!-- TOP - Панель с заголовком -->
            <div id="title" class=""> </div>

        </header>

        <!-- Тело сообщения -->
        <!-- УБРАЛ <main role="main"> - 2 РАЗА ПОВТОРЯЕТСЯ -->

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

        <!-- // УБРАЛ <main role="main"> - 2 РАЗА ПОВТОРЯЕТСЯ -->
    </div>
</dialog>

</html>