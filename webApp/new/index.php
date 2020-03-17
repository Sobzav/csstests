<!DOCTYPE html>
<html>

<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="..\css\style.css" />
        <!-- <link rel="stylesheet" type="text/css" href="menu-acc.css" /> -->
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <title> Меню </title>
        <svg style="display:none;">
        <symbol id="down" viewBox="0 0 16 16">
                <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
        </symbol>
        <symbol id="users" viewBox="0 0 16 16">
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,0,1-5.19-2.32,2.71,2.71,0,0,1,1.7-1,13.11,13.11,0,0,0,1.29-.28,2.32,2.32,0,0,0,.94-.34,1.17,1.17,0,0,0-.27-.7h0A3.61,3.61,0,0,1,5.15,7.49,3.18,3.18,0,0,1,8,4.07a3.18,3.18,0,0,1,2.86,3.42,3.6,3.6,0,0,1-1.32,2.88h0a1.13,1.13,0,0,0-.27.69,2.68,2.68,0,0,0,.93.31,10.81,10.81,0,0,0,1.28.23,2.63,2.63,0,0,1,1.78,1A7,7,0,0,1,8,15Z" />
        </symbol>
        <symbol id="x-but" viewBox="0 0 19 19">
                <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" stroke="black" stroke-width="1"  stroke-dasharray="0"/>
        </symbol>
        </svg>
</head>

<body class="">

        <!-- корневой контейнер формы -->
        <div class="gridContainer">
                <div class="local-grid">
                        <header class="header-top">
                                <!-- TOP - Панель с заголовком -->
                                <div class="logo-left"> </div><!-- Логотип -->
                                <div class="menu-name"> Управление аккаунтами </div><!-- Имя страницы -->
                                <div class="menu-burger burger" data-target="#menu"><span></span>
                                        <!-- span не убирать - это полоски на бургере -->
                                        <span></span>
                                        <span></span>
                                </div>
                                <div class="user">Vladimir Cherepovskiy <span><a class="out" href="#"></a></span> </div>
                                <!-- User -->
                        </header>
                        <!-- Центральная главная область с двумя блоками: Left и Right -->
                        <main role="main">
                                <!-- Left item -->
                                <div class="item-1">
                                        <header>Аккаунты</header>

                                        <div class="form-acc-head">
                                                <div class="grid-head-7x1">
                                                        <div class="div1">Логин</div>
                                                        <div class="div2"> Пароль</div>
                                                        <div class="div3"> Тип</div>
                                                        <div class="div4"> Активен</div>
                                                        <div class="div5"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                        <!-- кнопка крестик -->
                                                </div>
                                        </div>

                                        <div class="form-container">

                                                <div class="form-acc">
                                                        <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> M </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 1 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 2 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 3 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 4 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 5 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 6 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 7 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 8 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 9 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 10 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 11 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 12 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                                <div class="form-acc">
                                                <div class="grid--7x2">
                                                                <!-- GRID для user accounts -->
                                                                <div class="div1"> 13 </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ПАРОЛЬ -->
                                                                <div class="div3"> <input class="mainInput"> </div>
                                                                <!-- ТИП -->
                                                                <div class="div4"> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>
                                                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                                                <div class="div5"> <input type="checkbox" class="green"
                                                                                id="" name="" value=""></div>
                                                                <!-- кнопка крестик -->
                                                                <div class="div6"> <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button>
                                                                </div>
                                                                <div class="div7"> <input type="checkbox" id="" name=""
                                                                                value=""> <label>Привязать
                                                                                <!-- ВТОРОЙ -->
                                                                                RFID</label> <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div></div>

                                                                <div class="div8"> <label>Игнорировать активность
                                                                        </label> <input type="checkbox" id="" name=""
                                                                                value=""></div><!-- ТРЕТИЙ -->
                                                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                                                        </div>
                                                </div>

                                        </div>

                                </div>
                                <!-- Right item -->
                                <div class="item-2">
                                        <header>Типы аккаунтов</header>

                                        <div class="form-container">

                                                <div class="form-acc">

                                                        <div class="grid--5x2">
                                                                <!-- Элемент user accounts -->
                                                                <div class="div1"> 1. </div>
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div3 useracc-title"> Доступ </div>
                                                                <!-- Доступ -->
                                                                <div class="div4 useracc-title"> Активность </div>
                                                                <!-- Активность -->
                                                                <div class="div5"></div> <!-- Подчеркивание -->
                                                                <div class="div6">
                                                                        <!-- 1 СТОЛБЕЦ -->
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value="">
                                                                                        <label>Подтверждение по SMS</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Использовать
                                                                                                RFID</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные IP-адреса</label>
                                                                                        <ol>
                                                                                                <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)' ><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные устройства</label>
                                                                                        <ol>
                                                                                        <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>

                                                                </div>
                                                                <div class="div7">
                                                                        <!-- 2 СТОЛБЕЦ Доступ -->
                                                                        <ol>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li class="unordered-item-button">
                                                                                        <button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                </li>
                                                                        </ol>
                                                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                                                <div class="div8">
                                                                        <ul>
                                                                        <li><label>Понедельник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Вторник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Среда</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value=""></li>
                                                                                <li><label>Четверг</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Пятница</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Суббота</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Воскресенье</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>

                                                        <div class="grid--5x2">
                                                                <!-- Элемент user accounts -->
                                                                <div class="div1"> 2. </div>
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div3 useracc-title"> Доступ </div>
                                                                <!-- Доступ -->
                                                                <div class="div4 useracc-title"> Активность </div>
                                                                <!-- Активность -->
                                                                <div class="div5"></div> <!-- Подчеркивание -->
                                                                <div class="div6">
                                                                        <!-- 1 СТОЛБЕЦ -->
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value="">
                                                                                        <label>Подтверждение по
                                                                                                SMS</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Использовать
                                                                                                RFID</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                IP-адреса</label>
                                                                                        <ol>
                                                                                                <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                устройства</label>
                                                                                        <ol>
                                                                                        <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>

                                                                </div>
                                                                <div class="div7">
                                                                        <!-- 2 СТОЛБЕЦ Доступ -->
                                                                        <ol>
                                                                        <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li class="unordered-item-button">
                                                                                        <button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                </li>
                                                                        </ol>
                                                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                                                <div class="div8">
                                                                        <ul>
                                                                        <li><label>Понедельник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Вторник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Среда</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value=""></li>
                                                                                <li><label>Четверг</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Пятница</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Суббота</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Воскресенье</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>

                                                        <div class="grid--5x2">
                                                                <!-- Элемент user accounts -->
                                                                <div class="div1"> 3. </div>
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div3 useracc-title"> Доступ </div>
                                                                <!-- Доступ -->
                                                                <div class="div4 useracc-title"> Активность </div>
                                                                <!-- Активность -->
                                                                <div class="div5"></div> <!-- Подчеркивание -->
                                                                <div class="div6">
                                                                        <!-- 1 СТОЛБЕЦ -->
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value="">
                                                                                        <label>Подтверждение по
                                                                                                SMS</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Использовать
                                                                                                RFID</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                IP-адреса</label>
                                                                                        <ol>
                                                                                                <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                устройства</label>
                                                                                        <ol>
                                                                                        <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>

                                                                </div>
                                                                <div class="div7">
                                                                        <!-- 2 СТОЛБЕЦ Доступ -->
                                                                        <ol>
                                                                        <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li class="unordered-item-button">
                                                                                        <button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                </li>
                                                                        </ol>
                                                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                                                <div class="div8">
                                                                        <ul>
                                                                        <li><label>Понедельник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Вторник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Среда</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value=""></li>
                                                                                <li><label>Четверг</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Пятница</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Суббота</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Воскресенье</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>

                                                        <div class="grid--5x2">
                                                                <!-- Элемент user accounts -->
                                                                <div class="div1"> 4. </div>
                                                                <div class="div2"> <input class="mainInput"> </div>
                                                                <!-- ИМЯ -->
                                                                <div class="div3 useracc-title"> Доступ </div>
                                                                <!-- Доступ -->
                                                                <div class="div4 useracc-title"> Активность </div>
                                                                <!-- Активность -->
                                                                <div class="div5"></div> <!-- Подчеркивание -->
                                                                <div class="div6">
                                                                        <!-- 1 СТОЛБЕЦ -->
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value="">
                                                                                        <label>Подтверждение по
                                                                                                SMS</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Использовать
                                                                                                RFID</label></li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                IP-адреса</label>
                                                                                        <ol>
                                                                                                <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>
                                                                        <ul>
                                                                                <li><input type="checkbox" id="" name=""
                                                                                                value=""><label>Разрешенные
                                                                                                устройства</label>
                                                                                        <ol>
                                                                                        <li>
                                                                                                <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li><div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button>
                                                                                                <button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                                </li>
                                                                                                <li class="unordered-item-button"><button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                                </li>
                                                                                        </ol>
                                                                                </li>
                                                                        </ul>

                                                                </div>
                                                                <div class="div7">
                                                                        <!-- 2 СТОЛБЕЦ Доступ -->
                                                                        <ol>
                                                                        <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li>
                                                                                        <div><input type="checkbox" class="green" id="" name="" value=""><button class="x-but"><svg width="14px" height="14px" aria-hidden="true"><use xlink:href="#x-but"></use></svg></button></div>
                                                                                        <div class="dropdown wide-100" tabindex="0"><input class="mainInput"><button class="dropbtn"><svg width="16px" height="16px" aria-hidden="true"><use xlink:href="#down"></use></svg></button></div>
                                                                                </li>
                                                                                <li class="unordered-item-button">
                                                                                        <button class="plus-button"><span><svg width="13px" height="13px" aria-hidden="true" transform='rotate(45)'><use xlink:href="#x-but"></use></svg></span></button>
                                                                                </li>
                                                                        </ol>
                                                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                                                <div class="div8">
                                                                        <ul>
                                                                        <li><label>Понедельник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Вторник</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Среда</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value=""></li>
                                                                                <li><label>Четверг</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Пятница</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Суббота</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                                <li><label>Воскресенье</label> <input type="text" value="с"><input type="text" value="09"><input type="text" value=":"><input type="text" value="22"> <input type="text" value="до"><input type="text" value="22"><input type="text" value=":"><input type="text" value="56"> <input type="checkbox" id="" name="" value="">
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>

                                                </div>

                                        </div>

                                </div>

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
        <footer></footer>
</body>

</html>