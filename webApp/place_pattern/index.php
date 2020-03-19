<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <title> Упаковка </title>
    <!-- SVG SPRITE - ИКОНКА ГАЛОЧКА ВНИЗ -->
    <svg style="display:none;">
        <symbol id="down" viewBox="0 0 16 16">
            <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
        </symbol>
    </svg>
</head>

<body class="">

    <!-- корневой контейнер формы -->
    <div class="gridContainer">
        <header class="header-top">
            <!-- TOP - Панель с заголовком -->

            <div class=""> </div>

        </header>

        <!--  Sub-TOP - панель выбора элемента - FIRST VAR -->
        <section class="section__main" id="selectPanel">

            <div class="wide-100">

                <label class="" for="packList"> Тип </label>
                <!-- <input class="label-twin" id="" name="" value="Тип"> -->
                <div class="dropdown wide-100" tabindex="0">
                    <input class="wide-100" type="text" placeholder="Поиск..">
                    <ul id="packList" class="dropdown-content hidden" tabindex="0">
                    </ul>
                    <button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true">
                            <use xlink:href="#down"></use>
                        </svg></button>
                </div>

                <div>
                    <button class="" id="btnEdit"> Редактировать </button>
                </div>
            </div>
        </section>
        <!-- END FIRST VAR  -->

        <!-- Sub-TOP - панель редактирования элемента - SECOND VAR -->
        <section class="section__main hidden" id="editPanel">
            <div class="wide-100">
                <div>
                    <label class="" for="inpCode"> Обозначение </label>
                    <input class="mainInput" size="4" type="text" id="inpCode" name="package_code">
                </div>
                <div class="input-flex">
                    <label class="" for="inpName"> Наименование </label>
                    <input class="mainInput" type="text" id="inpName" name="package_name">
                </div>

                <div>
                    <button class="" id="btnBack"> Назад </button>
                </div>
            </div>
        </section>
        <!-- END SECOND VAR -->


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

                    <!-- Выбор Базового Типа -->
                    <!-- Выпадающий список элементов -->
                    <div class="wide-100">
                        <!-- Поисковая строка с выпадающим списком -->
                        <label class="" for="patternPackList"> Базовый </label>
                        <div class="dropdown wide-100" tabindex="0">
                            <input class="archeTypeSelectInput wide-100" type="text" placeholder="Поиск..">
                            <ul id="patternPackList" class="dropdown-content drop-right hidden" tabindex="0">
                            </ul>
                            <!-- <button class="archeTypeSelectInput dropbtn">&#9013</button> -->
                            <button class="archeTypeSelectInput dropbtn"><svg width="16px" height="16px"
                                    aria-hidden="true">
                                    <use xlink:href="#down"></use>
                                </svg></button>
                        </div>
                        <!-- END Выпадающий список элементов -->
                    </div>

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
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWx" name="package_iwx"
                                pattern=“[0-9]+” required>
                            <label class="" for="sizeWx"> мм </label>
                        </div>

                        <div class="">
                            <label class="" for="inpInternalSizeWy"> Высота </label>
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWy" name="package_iwy"
                                pattern=“[0-9]+” required>
                            <label class="" for="sizeWy"> мм </label>
                        </div>

                        <div class="">
                            <label class="" for="inpInternalSizeWz"> Глубина </label>
                            <input class="h-11 mainInput" size="5" type="text" id="inpInternalSizeWz" name="package_iwz"
                                pattern=“[0-9]+” required>
                            <label class="" for="inpInternalSizeWz"> мм </label>
                        </div>
                    </div>

                    <div class="section-general__flex">
                        <div class="">
                            <label class="left" for="color"> Цвет: </label>
                            <input class="mainInput" type="color" id="inpColor" name="package_color">
                        </div>

                        <div class="">
                            <label class="hidden" for="inpPayload"> Грузоподьемность, гр </label>
                            <input class="hidden mainInput" size="6" type="text" id="inpPayload" name="package_payload">
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
                            <div class="inputBlock">
                                <input class="mainInput" type="checkbox" id="checkBoxHasContent">
                                <label class="label-heading" for="checkBoxHasContent"> Внутренние
                                    прямоугольники:&nbsp;</label>
                                <label class="label-heading" type="text" id="inpTotal"> 0 </label>
                                <label class="label-heading" for="inpTotal"> шт </label>

                                <!-- чекбокс - внутренние элементы заданы по координатам -->
                                <input class="subInput" type="checkbox" id="checkBoxByCoordinares">
                                <label class="label-heading" for="checkBoxByCoordinares"> По координатам</label>
                            </div>
                        </div>
                    </header>

                    <section id="subBlock_" class="section-sub hidden">
                        <!-- внутреннее содержимое -->
                        <!-- блок внутренних прямоугольников -->

                        <div class="section-sub__grid--7x2">
                            <div class="div1"><label class="" id="subLabel_"> 1. </label></div>
                            <div class="div2">
                                <label class="left" for="inpSizeWx_">Ширина</label>
                                <input class="disabled" size="5" type="text" id="inpSizeWx_">
                                <label class="right" for="inpSizeWx_">мм</label>
                            </div>

                            <div class="div3">
                                <label class="left" for="inpSizewY_">Высота</label>
                                <input class="disabled" size="5" type="text" id="inpSizeWy_">
                                <label class="right" for="inpSizewY_">мм</label>
                            </div>

                            <div class="div4 subInput dropdown wide-100" tabindex="0">
                                <div class="dropdown wide-100" tabindex="0">
                                    <input size="6" class="subInput dropdown-input" type="text" placeholder="Тип">
                                    <ul id="packList_" class="dropdown-content hidden" tabindex="0">
                                    </ul>
                                    <button class="subInput dropbtn"><svg width="16px" height="16px" aria-hidden="true">
                                            <use xlink:href="#down"></use>
                                        </svg></button>
                                    <!-- <button class="subInput dropbtn">&#9013</button> -->
                                </div>
                            </div>

                            <div class="div5">
                                <input class="subInput" type="checkbox" id="checkBoxInRow_">
                                <label class="right" for="checkBoxInRow_"> В ряд</label>
                            </div>

                            <!-- Second grid Line -->
                            <div class="div6">
                                <button class="subInput" id="btnTurn_"> Повернуть </button>
                            </div>
                            <div class="div7">
                                <label class="left subInputLabelY" for="inpNy_"> Количество<br>по вертикали </label>
                                <input class="subInput" size="5" type="text" id="inpNy_">
                                <label class="right" for="inpNy_"> шт </label>
                            </div>

                            <div class="div8">
                                <label class="left subInputLabelX" for="inpNx_"> Количество<br>по горизонтали </label>
                                <input class="subInput" size="5" type="text" id="inpNx_" name="package_wx_">
                                <label class="right" for="inpNx_"> шт </label>
                            </div>

                            <div class="div9">
                                <label class="summ" for="inpTotal_"> Всего = </label>
                                <label class="summ" type="text" id="inpTotal_" name="package_total_"> 0 </label>
                                <!-- <label class="my-1 mx-1" for="inpTotal4"> шт </label> -->
                            </div>
                        </div>


                    </section>


                </section>

            </div>
            <!--right item-->


        </main>



        <!-- Строка статуса -->
        <section class="status-bar">
            <div class="">
                <input class="label-twin" disabled="" id="lblStatusEdit" value="">
                <label class="status-label"> | </label>
                <input class="label-twin" disabled="" id="lblStatusChanged" value="">
                <!-- <input class="status-label-changed" id="lblStatusChanged" type="text"> </input> -->
                <label class="status-label"> | </label>
                <input class="label-twin" disabled="" id="lblStatus" value="">
                <!-- <label class="status-label" id="lblStatus"> </label> -->
                <label class="status-label"> | </label>
                <input class="label-twin label-width-200" disabled="" id="lblStatusInfo" value="">
                <!-- <label class="status-label" id="lblStatusInfo"> </label> -->
                <label hidden class="status-label"> | </label>
            </div>
        </section>
    </div>

    <!--скрипты для стилей -->
    <script src="../jquery/jquery-3.4.1.min.js"></script>
    <script src="../jquery/jquery.validate.js"></script>
    <script src="settings.js?n=1"></script>
    <script src="place_pattern.js?n=1"></script>
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