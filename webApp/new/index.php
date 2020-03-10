<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="..\img\favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="..\css\style.css" />
    <link rel="stylesheet" type="text/css" href="menu-acc.css" />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title> Меню </title>

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
                <div class="user">Vladimir Cherepovskiy <span><a class="out" href="#"></a></span> </div> <!-- User -->
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
                            <div class="div5"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                        </div>
                    </div>

                    <div class="form-container">

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> M </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН ПЕРВЫЙ -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        <!-- ВТОРОЙ -->
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div><!-- ТРЕТИЙ -->
                                <div class="div9"></div><!-- ЧЕТВЕРТЫЙ -->
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 1 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 2 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 3 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 4 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 5 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 6 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 7 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 8 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 9 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 10 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 11 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 12 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
                            </div>
                        </div>

                        <div class="form-acc">
                            <div class="grid--7x2">
                                <!-- GRID для user accounts -->
                                <div class="div1"> 13 </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3"> <input class="mainInput"></div> <!-- ПАРОЛЬ -->
                                <div class="div4"> <input class="mainInput"></div> <!-- ТИП -->
                                <div class="div5"> <input type="checkbox" class="green" id="" name="" value=""></div>
                                <!-- АКТИВЕН -->
                                <div class="div6"> <button class="x-but">X</button></div> <!-- кнопка крестик -->
                                <div class="div7"> <input type="checkbox" id="" name="" value=""> <label>Привязать
                                        RFID</label> <input class="mainInput"></div>
                                <div class="div8"> <label>Игнорировать активность </label> <input type="checkbox" id=""
                                        name="" value=""></div>
                                <div class="div9"> </div>
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
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3 useracc-title"> Доступ </div> <!-- Доступ -->
                                <div class="div4 useracc-title"> Активность </div> <!-- Активность -->
                                <div class="div5"></div> <!-- Подчеркивание -->
                                <div class="div6">
                                    <!-- 1 СТОЛБЕЦ -->
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""> <label>Подтверждение по
                                                SMS</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Использовать
                                                RFID</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешение
                                                IP-адреса</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешенные
                                                устройства</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>

                                </div>
                                <div class="div7">
                                    <!-- 2 СТОЛБЕЦ Доступ -->
                                    <ol>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li class="unordered-item-button"><button
                                                class="plus-button"><span>+</span></button></li>
                                    </ol>
                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                <div class="div8">
                                    <ul>
                                        <li><label>Понедельник</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                        <li><label>Вторник</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Среда</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Четверг</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Пятница</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Суббота</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Воскресенье</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="grid--5x2">
                                <!-- Элемент user accounts -->
                                <div class="div1"> 2. </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3 useracc-title"> Доступ </div> <!-- Доступ -->
                                <div class="div4 useracc-title"> Активность </div> <!-- Активность -->
                                <div class="div5"></div> <!-- Подчеркивание -->
                                <div class="div6">
                                    <!-- 1 СТОЛБЕЦ -->
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""> <label>Подтверждение по
                                                SMS</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Использовать
                                                RFID</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешение
                                                IP-адреса</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешенные
                                                устройства</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>

                                </div>
                                <div class="div7">
                                    <!-- 2 СТОЛБЕЦ Доступ -->
                                    <ol>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li class="unordered-item-button"><button
                                                class="plus-button"><span>+</span></button></li>
                                    </ol>
                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                <div class="div8">
                                    <ul>
                                        <li><label>Понедельник</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                        <li><label>Вторник</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Среда</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Четверг</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Пятница</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Суббота</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Воскресенье</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="grid--5x2">
                                <!-- Элемент user accounts -->
                                <div class="div1"> 3. </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3 useracc-title"> Доступ </div> <!-- Доступ -->
                                <div class="div4 useracc-title"> Активность </div> <!-- Активность -->
                                <div class="div5"></div> <!-- Подчеркивание -->
                                <div class="div6">
                                    <!-- 1 СТОЛБЕЦ -->
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""> <label>Подтверждение по
                                                SMS</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Использовать
                                                RFID</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешение
                                                IP-адреса</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешенные
                                                устройства</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>

                                </div>
                                <div class="div7">
                                    <!-- 2 СТОЛБЕЦ Доступ -->
                                    <ol>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li class="unordered-item-button"><button
                                                class="plus-button"><span>+</span></button></li>
                                    </ol>
                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                <div class="div8">
                                    <ul>
                                        <li><label>Понедельник</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                        <li><label>Вторник</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Среда</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Четверг</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Пятница</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Суббота</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Воскресенье</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="grid--5x2">
                                <!-- Элемент user accounts -->
                                <div class="div1"> 4. </div>
                                <div class="div2"> <input class="mainInput"> </div> <!-- ИМЯ -->
                                <div class="div3 useracc-title"> Доступ </div> <!-- Доступ -->
                                <div class="div4 useracc-title"> Активность </div> <!-- Активность -->
                                <div class="div5"></div> <!-- Подчеркивание -->
                                <div class="div6">
                                    <!-- 1 СТОЛБЕЦ -->
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""> <label>Подтверждение по
                                                SMS</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Использовать
                                                RFID</label></li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешение
                                                IP-адреса</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><input type="checkbox" id="" name="" value=""><label>Разрешенные
                                                устройства</label>
                                            <ol>
                                                <li><input><button class="x-but">X</button></li>
                                                <li><input><button class="x-but">X</button></li>
                                                <li class="unordered-item-button"><button
                                                        class="plus-button"><span>+</span></button></li>
                                            </ol>
                                        </li>
                                    </ul>

                                </div>
                                <div class="div7">
                                    <!-- 2 СТОЛБЕЦ Доступ -->
                                    <ol>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li><input><input type="checkbox" class="green" id="" name="" value=""><button
                                                class="x-but">X</button></li>
                                        <li class="unordered-item-button"><button
                                                class="plus-button"><span>+</span></button></li>
                                    </ol>
                                </div> <!-- 3 СТОЛБЕЦ Активность -->
                                <div class="div8">
                                    <ul>
                                        <li><label>Понедельник</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                        <li><label>Вторник</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Среда</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Четверг</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Пятница</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Суббота</label> <input> <input> <input type="checkbox" id="" name=""
                                                value=""></li>
                                        <li><label>Воскресенье</label> <input> <input> <input type="checkbox" id=""
                                                name="" value=""></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </div>
    </div>
    <footer></footer>
</body>

</html>