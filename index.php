<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/ant/reset.css">

    <link rel="stylesheet" href="css/ant/style.css">
    <!-- <link rel="stylesheet" href="http://10.30.50.10/webapp/css/style.css"> -->
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="apple-touch-icon" href="icon.png">
    <title> Упаковка </title>
</head>

<body class="">
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.validate.js"></script>
    <!-- <script src="js/main.js"></script> -->
    <script src="http://10.30.50.10/webapp/package/main.js"></script>

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
                    <option value=""> Тип </option>
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
                                <label class="" for="sizeWx"> Ширина </label>
                                <input class="h-11" size="5" type="text" id="inpSizeWx" name="package_wx">
                                <label class="" for="sizeWx"> мм </label>
                            </div>

                            <div class="scnd">
                                <label class="" for="sizeWy"> Высота </label>
                                <input class="h-11" size="5" type="text" id="inpSizeWy" name="package_wy">
                                <label class="" for="sizeWy"> мм </label>
                            </div>

                            <div class="thrd">
                                <label class="" for="sizeH"> Глубина </label>
                                <input class="h-11" size="5" type="text" id="inpSizeH" name="package_h">
                                <label class="" for="sizeH"> мм </label>
                            </div>
                            <div class="frth">
                                <label class="" for="color"> Цвет: </label>
                                <input class="" type="color" id="inpColor" name="package_color">
                            </div>

                            <div class="ffth">
                                <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="hidden" size="6" type="text" id="inpPayload" name="package_payload">
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
                                <input class="border-1 text-black bg-tr" type="checkbox" id="checkBoxHasContent" name="checkBoxHasContent">
                                <label class="label-heading my-1 mx-2" for="checkBoxHasContent"> Внутренние прямоугольники </label>
                            </div>
                        </div>
                    </header>

                    <section class="section-sub">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->
                        <div class="section-sub__grid">

                            <div class="section-sub__grid--5x2">
                                <div class="nmbr"><label class="" id="sub1"> 1. </label></div>
                                <div class="frst">
                                    <label class="" for="inpSizeWx1">Ширина</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx1" name="package_wx1">
                                    <label class="" for="inpSizeWx1">мм</label>
                                </div>

                                <div class="scnd">
                                    <label class="" for="inpSizewY1">Высота</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy1" name="package_wy1">
                                    <label class="" for="inpSizewY1">мм</label>
                                </div>

                                <div class="thrd">

                                    <select class="" id="selCode1" name="package_code1">
                                        <option value=""> Тип </option>
                                        <!-- Список всех элементов в базе -->
                                    </select>
                                </div>
                                <!-- Second grid Line -->
                                <div class="frth">
                                    <label class="" for="inpNy1"> Количество<br>по вертикали </label>
                                    <input class="" size="1" type="text" id="inpNy1" name="package_wy1">
                                    <label class="" for="inpNy1"> шт </label>
                                </div>

                                <div class="ffth">
                                    <label class="" for="inpNx1"> Количество<br>по горизонтали </label>
                                    <input class="" size="1" type="text" id="inpNx1" name="package_wx1">
                                    <label class="" for="inpNx1"> шт </label>
                                </div>

                                <div class="sxth">
                                    <label class="summ" for="inpTotal1"> Всего = </label>
                                    <label class="" type="text" id="inpTotal1" name="package_total1"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>
                            </div>

                        </div>

                    </section>


                    <section class="section-sub">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->
                        <div class="section-sub__grid">

                            <div class="section-sub__grid--5x2">
                                <div class="nmbr"><label class="" id="sub2"> 2. </label></div>
                                <div class="frst">
                                    <label class="" for="inpSizeWx2">Ширина</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx2" name="package_wx2">
                                    <label class="" for="inpSizeWx2">мм</label>
                                </div>

                                <div class="scnd">
                                    <label class="" for="inpSizewY2">Высота</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy2" name="package_wy2">
                                    <label class="" for="inpSizewY2">мм</label>
                                </div>

                                <div class="thrd">

                                    <select class="" id="selCode2" name="package_code1">
                                        <option value=""> Тип </option>
                                        <!-- Список всех элементов в базе -->
                                    </select>
                                </div>
                                <!-- Second grid Line -->
                                <div class="frth">
                                    <label class="" for="inpNy2"> Количество<br>по вертикали </label>
                                    <input class="" size="1" type="text" id="inpNy2" name="package_wy2">
                                    <label class="" for="inpNy2"> шт </label>
                                </div>

                                <div class="ffth">
                                    <label class="" for="inpNx2"> Количество<br>по горизонтали </label>
                                    <input class="" size="1" type="text" id="inpNx2" name="package_wx2">
                                    <label class="" for="inpNx2"> шт </label>
                                </div>

                                <div class="sxth">
                                    <label class="summ" for="inpTotal2"> Всего = </label>
                                    <label class="summ" type="text" id="inpTotal2" name="package_total2"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>
                            </div>

                        </div>

                    </section>

                    <section class="section-sub">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->
                        <div class="section-sub__grid">

                            <div class="section-sub__grid--5x2">
                                <div class="nmbr"><label class="" id="sub1"> 3. </label></div>
                                <div class="frst">
                                    <label class="" for="inpSizeWx3">Ширина</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx3" name="package_wx1">
                                    <label class="" for="inpSizeWx3">мм</label>
                                </div>

                                <div class="scnd">
                                    <label class="" for="inpSizewY3">Высота</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy3" name="package_wy1">
                                    <label class="" for="inpSizewY3">мм</label>
                                </div>

                                <div class="thrd">

                                    <select class="" id="selCode3" name="package_code1">
                                        <option value=""> Тип </option>
                                        <!-- Список всех элементов в базе -->
                                    </select>
                                </div>
                                <!-- Second grid Line -->
                                <div class="frth">
                                    <label class="" for="inpNy3"> Количество<br>по вертикали </label>
                                    <input class="" size="1" type="text" id="inpNy3" name="package_wy1">
                                    <label class="" for="inpNy3"> шт </label>
                                </div>

                                <div class="ffth">
                                    <label class="" for="inpNx3"> Количество<br>по горизонтали </label>
                                    <input class="" size="1" type="text" id="inpNx3" name="package_wx1">
                                    <label class="" for="inpNx3"> шт </label>
                                </div>

                                <div class="sxth">
                                    <label class="summ" for="inpTotal3"> Всего = </label>
                                    <label class="summ" type="text" id="inpTotal3" name="package_total1"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>
                            </div>

                        </div>

                    </section>
                    <section class="section-sub">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->
                        <div class="section-sub__grid">

                            <div class="section-sub__grid--5x2">
                                <div class="nmbr"><label class="" id="sub1"> 4. </label></div>
                                <div class="frst">
                                    <label class="" for="inpSizeWx4">Ширина</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx4" name="package_wx1">
                                    <label class="" for="inpSizeWx4">мм</label>
                                </div>

                                <div class="scnd">
                                    <label class="" for="inpSizewY4">Высота</label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy4" name="package_wy1">
                                    <label class="" for="inpSizewY4">мм</label>
                                </div>

                                <div class="thrd">

                                    <select class="" id="selCode4" name="package_code1">
                                        <option value=""> Тип </option>
                                        <!-- Список всех элементов в базе -->
                                    </select>
                                </div>
                                <!-- Second grid Line -->
                                <div class="frth">
                                    <label class="" for="inpNy4"> Количество<br>по вертикали </label>
                                    <input class="" size="1" type="text" id="inpNy4" name="package_wy1">
                                    <label class="" for="inpNy4"> шт </label>
                                </div>

                                <div class="ffth">
                                    <label class="" for="inpNx4"> Количество<br>по горизонтали </label>
                                    <input class="" size="1" type="text" id="inpNx4" name="package_wx1">
                                    <label class="" for="inpNx4"> шт </label>
                                </div>

                                <div class="sxth">
                                    <label class="summ" for="inpTotal4"> Всего = </label>
                                    <label class="summ" type="text" id="inpTotal4" name="package_total1"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>
                            </div>

                        </div>

                    </section>
                </section>
                <section class="section__subsumm">
                    <div class="flex flex-row my-1">

                        <div class="inputBlock-base flex flex-grow justify-end items-center mx-2 mt-4">
                            <label class="summ inputLabel label-heading my-1 mx-1" for="inpTotal4"> Общее количество = </label>
                            <label class="summ inputLabel label-heading" type="text" id="inpTotal4" name="package_total4"> 0 </label>
                            <label class="inputLabel label-heading my-1 mx-1" for="inpTotal4"> шт </label>
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
</body>

<footer>
</footer>

</html>