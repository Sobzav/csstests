<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="..\css\reset.css" />
    <link rel="stylesheet" type="text/css" href="css\style.css" />
    <title> Упаковка </title>
</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <header class="header-top">
            <!-- TOP - Панель с заголовком -->

            <div class=""> </div>

        </header>


        <!--  Sub-TOP - панель выбора элемента -->
        <section class="section__main">

            <!-- Выбор Типа -->
            <div style="" class="">
                <!-- выпадающий список элементов -->
                <label class="" for="selCode"> Обозначение </label>
                <select class="select-type" id="selCode" name="package_code">
                    <!-- Список всех элементов в базе  -->
                    <option id="0"> Новый </option>
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
            <div class="item-2">
                <header class="header__general">
                    <div class="label-heading"> Размеры прямоугольника </div>
                </header>
                <section class="section-general">
                    <div class="section-general__grid">
                        <!-- Grid таблица 3х2 для отображения inputs для ввода Размеров прямоугольника -->
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
                                <label class="" for="inpSizeWz"> Глубина </label>
                                <input class="h-11 mainInput" size="5" type="text" id="inpSizeWz" name="package_wz" pattern=“[0-9]+” required>
                                <label class="" for="inpSizeWz"> мм </label>
                            </div>
                            <div class="frth">
                                <label class="" for="color"> Цвет: </label>
                                <input class="mainInput" type="color" id="inpColor" name="package_color">
                            </div>

                            <div class="ffth">
                                <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="hidden mainInput" size="6" type="text" id="inpPayload" name="package_payload">
                            </div>

                            <div class="sxth">
                                <label class="" for="inpVolume"> Объем = </label>
                                <label class="" type="text" id="inpVolume" name="package_value"> 0 </label>
                                <label class="" for="inpVolume"> мм&sup2 </label>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="section-subs">
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
                    <div class="flex flex-row my-1">

                        <div class="inputBlock-base flex flex-grow justify-end items-center mx-2 mt-4">
                            <label class="summ inputLabel label-heading my-1 mx-1" for="inpTotal"> Общее количество = </label>
                            <label class="summ inputLabel label-heading" type="text" id="inpTotal" name="package_total"> 0 </label>
                            <label class="inputLabel label-heading my-1 mx-1" for="inpTotal"> шт </label>
                        </div>

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
    <script src="../jquery/jquery-3.4.1.min.js"></script>
    <script src="../jquery/jquery.validate.js"></script>
    <script src="package.js"></script>
    <script src="subblock.js"></script>
    <script src="main.js"></script>
</body>

<footer>
</footer>

<dialog class="dialog-modal" id="dialog_modal">
    <!-- <div class="gridContainer__modal modal-alert"> -->
    <div class="gridContainer__modal">
        <header class="header-top__modal">

            <!-- TOP - Панель с заголовком -->
            <div id="title" class="">  </div>

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
            <section class="bottom-block__buttons--modal">

                <button class="button-right" id="btnOk_modal"> OK </button>
                <button class="button-right" id="btnCancel_modal"> Cancel </button>
                <button class="button-right" id="btnClose_modal"> Close </button>

            </section>

        </main>
    </div>
</dialog>


</html>