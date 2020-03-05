<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" type="text/css" href="..\css\style.css" /> Черновая версия - > и . шрифтовые, (. before li), (> before span) -->
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />

    <title> Склад </title>
</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer--whouse">
        <header class="header-top">
            <!-- TOP - Панель с заголовком -->

            <div class=""> </div>

        </header>

        <!--  Sub-TOP - панель навигации -->

        <!--  Sub-TOP - панель выбора элемента -->
        <section class="section__main">

            <!-- <ul class="nav" id="nav">
                    Список уровней  -->
            <!-- <li class="nav-first-item" id="1"> Уровень 1 </li>
                </ul> -->

            <ul class="nav" id="nav">
                <!-- Список уровней  -->
                <!-- <li class="nav-first-item" id="1"> Уровень 1 </li> -->
                <li><span>склад</span><label>5</label></li>
                <li><span>секция</span><label>1</label></li>
                <li><span>уровень</span><label>2</label></li>
                <li class="beforedot"><span>линия</span><label>3</label></li> 
                <li><span>стеллаж</span><label>A</label></li>
                <li class="beforedot"><span>полка</span><label>6</label></li>
                <li><span>лоток</span><label>54</label></li>
                <li class="beforedot"><span>контейнер</span><label>А</label></li>
                <li><span>ячейка</span><label>87</label></li>
            </ul>
            <input class="hidden mainInput" size="4" type="text" id="inpCodeEdit" name="package_code"> <!-- Последний элемент .nav li:last-child пока скрыт в css -->
            <!-- </div> -->


        </section>



        <!-- Информация об упаковке -->

        <!-- Изображение и характеристики -->
        <main role="main">
            <!-- Центральная главная область с двумя блоками: Left и Right -->

            <!-- Left item -->
            <input type="hidden" name="package_id">
            <div class="item-1">

                <!-- Изображение -->
                <canvas class="" id="canvas">
                    success: {
                    }
                    error: Browser does not support canvas element.
                </canvas>
            </div>
            <!-- характеристики -->
            <!-- Right item -->
            <div class="item-2--whouse">



                <!-- кнопки -->
                <!-- <section class="right-block__buttons">

            <button class="button-right" id="btnCopy"> Копировать </button>
            <button class="" id="btnDelete"> Удалить </button> -->
                <!-- <button class="" id="btnAdd"> Добавить </button> 
            <button class="button-right" id="btnApply"> Сохранить </button>

        </section> -->

                <!-- Выбор Типа -->
                <div class="right-form">
                    <!-- выпадающий список элементов -->
                    <label class="" for="selCode"> Обозначение </label>
                    <select class="select-type" id="selCode" name="package_code">
                        <!-- Список всех элементов в базе  -->
                        <option id="0"> Новый </option>
                    </select>
                    <!-- Кнопка справа  -->
                    <div class="right-block__buttons">
                        <button class="" id="btnEdit"> Редактировать </button>
                    </div>
                    <input class="hidden mainInput" size="4" type="text" id="inpCodeEdit" name="package_code">


                </div>
                <div class="right-form">

                    <!-- Растягивающийся блок с input - ВО ВТОРУЮ СТРОКУ -->
                    <div class="input-flex">
                        <label class="" for="inpName"> Наименование </label>
                        <input class="mainInput" type="text" id="inpName" name="package_name">
                    </div>
                </div>


                <!-- <header class="header__general">                </header> -->


                <div class="section-general__flex">
                    <div class="left">
                        <label class="label-heading bold" for="inpInternalSizeWx"> X </label>
                        <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWx" name="package_iwx" pattern="[0-9]+" required>

                    </div>
                    <div class="left">
                        <label class="label-heading bold" for="inpInternalSizeWy"> Y </label>
                        <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWy" name="package_iwy" pattern="[0-9]+" required>

                    </div>
                </div>

                <section class="section-general">

                    <div class="section-general__grid">
                        <!-- Grid таблица 3х2 для отображения inputs для ввода Размеров прямоугольника -->
                        <div class="label-heading"> Внешние Размеры </div>
                        <div class="section-general__grid--3x2">

                            <div class="frst">
                                <label class="" for="sizeWx"> Ширина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWx" name="package_wx" pattern=“[0-9]+” required>
                                <label class="" for="sizeWx"> мм </label>
                            </div>

                            <div class="scnd">
                                <label class="" for="sizeWy"> Высота </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWy" name="package_wy" pattern=“[0-9]+” required>
                                <label class="" for="sizeWy"> мм </label>
                            </div>

                            <div class="thrd">
                                <label class="" for="sizeWz"> Глубина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWz" name="package_wz" pattern=“[0-9]+” required>
                                <label class="" for="sizeWz"> мм </label>
                            </div>
                            <div class="frth">
                                <!-- <label class="" for="color"> Цвет: </label>
                                <input class="mainInput" type="color" id="inpColor" name="package_color"> -->
                            </div>

                            <div class="ffth">
                                <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="hidden mainInput" size="6" type="text" id="inpPayload" name="package_payload">
                            </div>

                            <div class="sxth">
                                <label class="" for="inpVolume"> Объем = </label>
                                <label class="" type="text" id="inpVolume" name="package_value"> 0 </label>
                                <label class="" for="inpVolume" id="inpVolumeUnit"> мм&sup2 </label>
                            </div>

                        </div>
                    </div>
                    <div class="label-heading"> Внутренние Размеры </div>
                    <div class="section-general__flex">
                        <div class="">
                            <label class="" for="inpInternalSizeWx"> Ширина </label>
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWx" name="package_iwx" pattern="[0-9]+" required>
                            <label class="" for="sizeWx"> мм </label>
                        </div>
                        <div class="">
                            <label class="" for="inpInternalSizeWy"> Высота </label>
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWy" name="package_iwy" pattern="[0-9]+" required>
                            <label class="" for="sizeWy"> мм </label>
                        </div>
                        <div class="">
                            <label class="" for="inpInternalSizeWz"> Глубина </label>
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWz" name="package_iwz" pattern="[0-9]+" required>
                            <label class="" for="inpInternalSizeWz"> мм </label>
                        </div>
                    </div>


                </section>
                <section class="section-subs hidden">
                    <!-- элемент имеет внутреннее содержимое -->
                    <header class="header__sub">
                        <div class="">
                            <div class="inputBlock mx-1">
                                <input class="border-1 text-black bg-tr mainInput" type="checkbox" id="checkBoxHasContent" name="checkBoxHasContent">
                                <label class="label-heading my-1 mx-2" for="checkBoxHasContent"> Внутренние прямоугольники </label>
                            </div>
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
                                <label class="" for="inpSizeWy_">Высота</label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy_" name="package_wy_">
                                <label class="" for="inpSizeWy_">мм</label>
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
                                <input class="subInput" size="1" type="text" id="inpNy_" name="package_ny_">
                                <label class="" for="inpNy_"> шт </label>
                            </div>

                            <div class="ffth">
                                <label class="" for="inpNx_"> Количество<br>по горизонтали </label>
                                <input class="subInput" size="1" type="text" id="inpNx_" name="package_nx_">
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
                    <!--Здесь было общее крол-->
                </section>
            </div>
            <!--right item-->


        </main>



        <!-- Строка статуса -->
        <section class="status-bar">
            <div class="">
                <label class="status-label"> | </label>
                <label class="status-label" id="lblStatusChanged"> </label>
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
    <script src="../package/subblock.js"></script>
    <script src="settings.js?n=1"></script>
    <script src="warehouse.js?n=1"></script>
    <script src="../package/package.js?n=1"></script>
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

         <!-- УБРАЛ <main role="main"> - 2 РАЗА ПОВТОРЯЕТСЯ -->
    </div>
</dialog>


</html>