<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" type="text/css" href="..\reset.css" /> -->
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />
    <title> Упаковка </title>
</head>

<body class="">
    <script src="..\jquery\jquery-3.4.1.min.js"></script>
    <script src="..\jquery\jquery.validate.js"></script>
    <!-- <script src="Package.js"></script> -->
    <script src="main.js"></script>

    <!-- коневой контейнер формы -->

    <div class="gridContainer">
        <header>
            <!-- TOP - Панель с заголовком -->
            <div class="flex justify-center border-dotted border-0 border-b-1 border-chiffon m-1 p-2 text-lg">
                <div class=""> </div>
            </div>
        </header>
        <!-- Sub-TOP - панель выбора элемента -->
        <section class="section__main">

            <div class="flex mx-2">
                <div class="inputBlock-top pl-3">

                    <!-- выпадающий список элементов -->
                    <label class="inputLabel label-heading" for="selCode"> Обозначение </label>
                    <select class="h-125" id="selCode" name="package_code">
                        <!-- Список всех элементов в базе -->
                        <option value=""> Тип </option>
                    </select>
                    <input class="h-125 hidden" size="4" type="text" id="inpCodeEdit" name="package_code">
                </div>

                <div class="inputBlock-top px-6">

                    <label class="inputLabel label-heading" for="inpName"> Наименование </label>
                    <input class="h-125 w-auto" size="75" type="text" id="inpName" name="package_name">
                </div>

                <div class="inputBlock-top">
                    <button class="h-13" id="btnEdit"> Редактировать </button>
                </div>
            </div>
        </section>

        <!-- Информация об упаковке -->

        <!-- Изображение и характеристики -->
        <main>
            <!-- Центральная главная область с двумя блоками: Left и Right -->
            <div class="flex flex-row p-1 pt-3">
                <!-- Left item -->
                <div class="item-1">
                    <input type="hidden" name="package_id">

                    <!-- Изображение -->
                    <div class="flex flex-col h-auto ml-5 my-5 mr-3 p-6 border-dotted border border-chiffon bg-chateauGrey">
                        <canvas class="border-dotted border border-chiffon p-0 m-0" id="canvas" style="width: 500px; height: 500px; object-fit: contain;">
                            success: {
                            }
                            error: Browser does not support canvas element.
                        </canvas>
                    </div>
                </div>
                <!-- характеристики -->
                <!-- Right item -->
                <div class="item-2 item-general flex flex-col p-1">
                    <header class="header__general">
                        <div class="flex ml-6">
                            <div class="label-heading"> Размеры прямоугольника </div>
                        </div>
                    </header>
                    <section class="section__general">
                        <div class="flex flex-row ml-2 mt-3 text-sm">

                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="sizeWx"> Ширина </label>
                                <input class="h-11" size="5" type="text" id="inpSizeWx" name="package_wx">
                                <label class="inputLabel" for="sizeWx"> мм </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="sizeWy"> Высота </label>
                                <input class="h-11" size="5" type="text" id="inpSizeWy" name="package_wy">
                                <label class="inputLabel" for="sizeWy"> мм </label>
                            </div>

                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="sizeH"> Глубина </label>
                                <input class="h-11" size="5" type="text" id="inpSizeH" name="package_h">
                                <label class="inputLabel" for="sizeH"> мм </label>
                            </div>

                        </div>

                        <div class="flex flex-row ml-2 mt-2 text-sm">

                            <div class="inputBlock mx-2">
                                <label class="mx-1" for="color"> Цвет: </label>
                                <input class="h-11" type="color" id="inpColor" name="package_color">
                            </div>

                            <div hidden class="inputBlock mx-2">
                                <label class="my-1 mx-1 hidden" for="inpPayload"> Грузоподьемность, гр </label>
                                <input class="h-11 hidden" size="6" type="text" id="inpPayload" name="package_payload">
                            </div>

                            <div class="inputBlock mx-2">
                                <label class="mx-1" for="inpVolume"> Объем = </label>
                                <label class="" type="text" id="inpVolume" name="package_value"> 0 </label>
                                <label class="my-1 mx-1" for="inpVolume"> мм&sup2 </label>
                            </div>

                        </div>
                    </section>
                    <section class="section-sub">
                        <!-- элемент имеет внутреннее содержимое -->
                        <header class="header__sub">
                            <div class="flex flex-row justify-between mt-6 mb-1">
                                <div class="inputBlock mx-1">
                                    <input class="border-1 text-black bg-tr" type="checkbox" id="checkBoxHasContent" name="checkBoxHasContent">
                                    <label class="label-heading my-1 mx-2" for="checkBoxHasContent"> Внутренние прямоугольники </label>
                                </div>
                            </div>
                        </header>

                        <!-- внутреннее содержимое -->
                        <div class="flex flex-col" style="overflow-y: show;">

                            <!-- блок внутренних прямоугольников -->
                            <div class="flex flex-row mt-2">

                                <label class="ml-1 my-1" id="sub1"> 1. </label>
                                <div class="inputBlock mx-2">
                                    <label class="inputLabel" for="inpSizeWx1"> Ширина </label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWx1" name="package_wx1">
                                    <label class="inputLabel" for="inpSizeWx1"> мм </label>
                                </div>

                                <div class="inputBlock mx-4">
                                    <label class="inputLabel" for="inpSizewY1"> Высота </label>
                                    <input class="disabled" size="5" type="text" id="inpSizeWy1" name="package_wy1">
                                    <label class="inputLabel" for="inpSizewY1"> мм </label>
                                </div>

                                <div class="inputBlock mx-2">
                                    <label class="inputLabel" for="selCode1"> </label>
                                    <select class="h-1" id="selCode1" name="package_code1">
                                        <option value=""> Тип </option>
                                        <!-- Список всех элементов в базе -->
                                    </select>
                                </div>

                            </div>

                            <div class="flex flex-row mb-3 mt-1">

                                <div class="inputBlock ml-8 mr-2">
                                    <label class="inputLabel" for="inpNy1"> Количество<br>по вертикали </label>
                                    <input class="" size="1" type="text" id="inpNy1" name="package_wy1">
                                    <label class="inputLabel" for="inpNy1"> шт </label>
                                </div>

                                <div class="inputBlock mx-4">
                                    <label class="inputLabel" for="inpNx1"> Количество<br>по горизонтали </label>
                                    <input class="" size="1" type="text" id="inpNx1" name="package_wx1">
                                    <label class="inputLabel" for="inpNx1"> шт </label>
                                </div>

                                <div class="inputBlock-base ml-10">
                                    <label class="my-1 mx-1" for="inpTotal1"> Всего = </label>
                                    <label class="" type="text" id="inpTotal1" name="package_total1"> 0 </label>
                                    <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                                </div>

                            </div>
                    </section>
                    <section class="section-sub">
                        <!-- блок внутренних прямоугольников -->
                        <div class="flex flex-row mt-2">

                            <label class="ml-1 my-1" id="sub1"> 2. </label>
                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="inpSizeWx2"> Ширина </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWx2" name="package_wx1">
                                <label class="inputLabel" for="inpSizeWx2"> мм </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpSizewY2"> Высота </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy2" name="package_wy2">
                                <label class="inputLabel" for="inpSizewY2"> мм </label>
                            </div>

                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="selCode2"> </label>
                                <select class=" " id="selCode2" name="package_code2">
                                    <option value=""> Тип </option>
                                    <!-- Список всех элементов в базе -->
                                </select>
                            </div>

                        </div>

                        <div class="flex flex-row mb-3 mt-1">

                            <div class="inputBlock ml-8 mr-2">
                                <label class="inputLabel" for="inpNy2"> Количество<br>по вертикали </label>
                                <input class="" size="1" type="text" id="inpNy2" name="package_wx2">
                                <label class="inputLabel" for="inpNy2"> шт </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpNx2"> Количество<br>по горизонтали </label>
                                <input class="" size="1" type="text" id="inpNx2" name="package_wy2">
                                <label class="inputLabel" for="inpNx2"> шт </label>
                            </div>

                            <div class="inputBlock-base ml-10">
                                <label class="my-1 mx-1" for="inpTotal2"> Всего = </label>
                                <label class="" type="text" id="inpTotal2" name="package_total2"> 0 </label>
                                <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                            </div>

                        </div>

                        <!-- блок внутренних прямоугольников -->
                        <div class="flex flex-row mt-2">

                            <label class="ml-1 my-1" id="sub3"> 3. </label>
                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="inpSizeWx3"> Ширина </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWx3" name="package_wx3">
                                <label class="inputLabel" for="inpSizeWx3"> мм </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpSizewY3"> Высота </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy3" name="package_wy3">
                                <label class="inputLabel" for="inpSizewY3"> мм </label>
                            </div>

                            <div class="inputBlock mx-2">
                                <label class="" for="selCode3"> </label>
                                <select class=" " id="selCode3" name="package_code3">
                                    <option value=""> Тип </option>
                                    <!-- Список всех элементов в базе -->
                                </select>
                            </div>

                        </div>

                        <div class="flex flex-row mb-3 mt-1">

                            <div class="inputBlock ml-8 mr-2">
                                <label class="inputLabel" for="inpNy3"> Количество<br>по вертикали </label>
                                <input class="" size="1" type="text" id="inpNy3" name="package_wx3">
                                <label class="inputLabel" for="inpNy3"> шт </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpNx3"> Количество<br>по горизонтали </label>
                                <input class="" size="1" type="text" id="inpNx3" name="package_wy3">
                                <label class="inputLabel" for="inpNx3"> шт </label>
                            </div>

                            <div class="inputBlock-base ml-10">
                                <label class="my-1 mx-1" for="inpTotal4"> Всего = </label>
                                <label class="" type="text" id="inpTotal3" name="package_total3"> 0 </label>
                                <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                            </div>

                        </div>
                    </section>

                    <!-- блок внутренних прямоугольников -->
                    <section class="section-sub">
                        <div class="flex flex-row mt-2">

                            <label class="ml-1 my-1" id="sub1"> 4. </label>
                            <div class="inputBlock mx-2">
                                <label class="inputLabel" for="inpSizeWx4"> Ширина </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWx4" name="package_wx4">
                                <label class="inputLabel" for="inpSizeWx4"> мм </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpSizewY4"> Высота </label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy4" name="package_wy4">
                                <label class="inputLabel" for="inpSizewY4"> мм </label>
                            </div>

                            <div class="inputBlock mx-2">
                                <label class="" for="selCode4"> </label>
                                <select class=" " id="selCode4" name="package_code4">
                                    <option value=""> Тип </option>
                                    <!-- Список всех элементов в базе -->
                                </select>
                            </div>

                        </div>

                        <div class="flex flex-row mb-2 mt-1">

                            <div class="inputBlock ml-8 mr-2">
                                <label class="inputLabel" for="inpNy4"> Количество<br>по вертикали </label>
                                <input class="" size="1" type="text" id="inpNy4" name="package_wx4">
                                <label class="inputLabel" for="inpNy4"> шт </label>
                            </div>

                            <div class="inputBlock mx-4">
                                <label class="inputLabel" for="inpNx4"> Количество<br>по горизонтали </label>
                                <input class="" size="1" type="text" id="inpNx4" name="package_wy4">
                                <label class="inputLabel" for="inpNx4"> шт </label>
                            </div>

                            <div class="inputBlock-base ml-10">
                                <label class="my-1 mx-1" for="inpTotal4"> Всего = </label>
                                <label class="" type="text" id="inpTotal4" name="package_total4"> 0 </label>
                                <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                            </div>

                        </div>

                    </section>
                    <section class="section__subsumm">
                        <div class="flex flex-row my-1">

                            <div class="inputBlock-base flex flex-grow justify-end items-center mx-2 mt-4">
                                <label class="inputLabel label-heading my-1 mx-1" for="inpTotal4"> Общее количество = </label>
                                <label class="inputLabel label-heading" type="text" id="inpTotal4" name="package_total4"> 0 </label>
                                <label class="inputLabel label-heading my-1 mx-1" for="inpTotal4"> шт </label>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

            </div>
        </main>

    <!-- кнопки -->
    <section class="main_block__buttons">
        <div class="flex items-end mx-2">
            <div class="flex flex-row items-end" style="width: 810px">
            </div>
            <div class="flex items-center">

                <button class="h-13" id="btnCopy"> Копировать </button>
                <!-- <button class="bg-tr border border-solid border-black h-6 px-3 py-1 ml-3" id="btnDelete"> Удалить </button> -->
                <!-- <button class="bg-tr border border-solid border-black h-6 px-3 py-1 ml-3" id="btnAdd"> Добавить </button> -->
                <button class="h-13" id="btnApply"> Сохранить </button>
            </div>
        </div>
    </section>

    </div>

    <!--скрипты для стилей -->
</body>

<footer>
</footer>

</html>